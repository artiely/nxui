<template>
  <div :class="['c_picker-column', className]" :style="columnStyle" @touchstart="onTouchStart" @touchmove.prevent="onTouchMove" @touchend="onTouchEnd" @touchcancel="onTouchEnd">
    <ul :style="wrapperStyle">
      <li v-for="(option, index) in options" :key="index" v-html="getOptionText(option)" :style="optionStyle" class="van-ellipsis" :class="['c_picker-column__item',
          isDisabled(option)?'c_picker-column__item--disabled':'',
          index === currentIndex?'c_picker-column__item--selected':''
        ]" @click="setIndex(index, true)" />
    </ul>
  </div>
</template>

<script>
import deepClone from './_util/deep-clone'
import { isObj, range } from './_util'
const DEFAULT_DURATION = 200
export default {
  name: 'picker-column',
  props: {
    valueKey: String,
    className: String,
    itemHeight: Number,
    visibleItemCount: Number,
    px2remUnit: [String, Number],
    initialOptions: {
      type: Array,
      default: () => []
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      startY: 0,
      offset: 0,
      duration: 0,
      startOffset: 0,
      options: deepClone(this.initialOptions),
      currentIndex: this.defaultIndex
    }
  },
  created() {
    this.$parent.children && this.$parent.children.push(this)
    this.setIndex(this.currentIndex)
  },
  destroyed() {
    const { children } = this.$parent
    children && children.splice(children.indexOf(this), 1)
  },
  watch: {
    defaultIndex() {
      this.setIndex(this.defaultIndex)
    }
  },
  computed: {
    count() {
      return this.options.length
    },
    baseOffset() {
      return this.itemHeight * (this.visibleItemCount - 1) / 2
    },
    columnStyle() {
      return {
        height:
          this.itemHeight * this.visibleItemCount * this.px2remUnit + 'rem'
      }
    },
    wrapperStyle() {
      return {
        transition: `${this.duration}ms`,
        transform: `translate3d(0, ${(this.offset + this.baseOffset) *
          this.px2remUnit}rem, 0)`,
        lineHeight: this.itemHeight * this.px2remUnit + 'rem'
      }
    },
    optionStyle() {
      return {
        height: this.itemHeight * this.px2remUnit + 'rem'
      }
    }
  },
  methods: {
    onTouchStart(event) {
      this.startY = event.touches[0].clientY
      this.startOffset = this.offset
      this.duration = 0
    },
    onTouchMove(event) {
      const deltaY = event.touches[0].clientY - this.startY
      this.offset = range(
        this.startOffset + deltaY,
        -(this.count * this.itemHeight),
        this.itemHeight
      )
    },
    onTouchEnd() {
      if (this.offset !== this.startOffset) {
        this.duration = DEFAULT_DURATION
        const index = range(
          Math.round(-this.offset / this.itemHeight),
          0,
          this.count - 1
        )
        this.setIndex(index, true)
      }
    },
    adjustIndex(index) {
      index = range(index, 0, this.count)
      for (let i = index; i < this.count; i++) {
        if (!this.isDisabled(this.options[i])) return i
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!this.isDisabled(this.options[i])) return i
      }
    },
    isDisabled(option) {
      return isObj(option) && option.disabled
    },
    getOptionText(option) {
      return isObj(option) && this.valueKey in option
        ? option[this.valueKey]
        : option
    },
    setIndex(index, userAction) {
      index = this.adjustIndex(index) || 0
      this.offset = -index * this.itemHeight
      if (index !== this.currentIndex) {
        this.currentIndex = index
        userAction && this.$emit('change', index)
      }
    },
    setValue(value) {
      const { options } = this
      for (let i = 0; i < options.length; i++) {
        if (this.getOptionText(options[i]) === value) {
          return this.setIndex(i)
        }
      }
    },
    getValue() {
      return this.options[this.currentIndex]
    }
  }
}
</script>