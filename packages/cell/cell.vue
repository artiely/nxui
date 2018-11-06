<template>
  <div class="c_cell-wrapper">
    <div class="c_cell-text-box">
      <slot>
        <div class="c_cell-title" v-if="title">
          <slot name="title">{{title}}</slot>
        </div>
        <div class="c_cell-field" @click="handleText">
          <slot name="text">
            <sup class="c_cell-required" v-if="required">*</sup>
            <div class="c_cell-text-field" :class="{'c_cell-placeholder':!value,'c_cell-wrap': wrap}">
              <span class="c_cell-text-inner">{{finalText}}</span>
            </div>
            <div class="c_cell-right-link">
              <nx-icon v-if="link" class="c_cell-link" :name="linkName" @click.native="handleClear"></nx-icon>
            </div>
          </slot>
        </div>
      </slot>
    </div>
    <!-- popup -->
    <nx-popup v-model="visible" position="bottom" v-if="datetimePicker" get-container="body">
      <nx-datetime-picker v-model="datetime" :type="datetimePicker.type" :min-date="datetimePicker.minDate" :max-date="datetimePicker.maxDate" @confirm="confirm" @cancel="cancel"></nx-datetime-picker>
    </nx-popup>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'nx-cell',
  props: {
    value: {
      type: [String, Number, Date]
    },
    title: {
      type: String
    },
    wrap: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    link: {
      type: [Boolean, String],
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    datetimePicker: {
      type: Object,
      default: () => {
        
      }
    }
  },
  data() {
    return {
      visible: false,
      datetime: dayjs(this.value).toDate()
    }
  },
  computed: {
    linkName() {
      if (typeof this.link === 'string') {
        return this.link
      } else {
        return 'icon-v-icon-arrow-left-copy'
      }
    },
    finalText() {
      return this.value ? this.value : this.placeholder
    },
    // datetime: {
    //   get(){},
    //   set(){
    //     return dayjs(this.value).toDate()
    //   }
    // }
  },
  methods: {
    format(value){
      return dayjs(value).format(this.datetimePicker.format|| 'YYYY-MM-DD HH:mm')
    },
    handleClear() {
      this.$emit('input', '')
    },
    handleText() {
      if (this.datetimePicker) {
        this.visible = true
      }
    },
    confirm(val) {
      this.$emit('input', this.format(val))
      this.visible = false
    },
    cancel() {
      this.visible = false
    }
  }
}
</script>

<style scoped lang="less">
// @cell-height: 50px;
// @cell-reqired-color: red;
// @cell-border-color: #c7c7c7;
@import './var';
.c_cell-wrapper {
  position: relative;
  overflow: hidden;
  padding-left: 15px;
  margin-bottom: -2px;/*no*/
  min-height: @cell-height;
  font-size: 16px;
  .c_cell-text-box {
    display: flex;
    border-bottom: 1px solid @cell-border-color; /* no */
  }
  .c_cell-title {
    line-height: @cell-height;
  }
  .c_cell-field {
    position: relative;
    flex: 1;
    display: flex;
    .c_cell-required {
      position: absolute;
      left: 0;
      top: 0;
      line-height: @cell-height;
      color: @cell-reqired-color;
    }
    .c_cell-text-field {
      flex: 1;
      box-sizing: border-box;
      line-height: @cell-height;
      outline: none;
      border: none;
      height: 50px;
      width: 100%;
      background: transparent;
      font-size: 16px;
      font-weight: 500;
      padding-left: 10px;
      color: @cell-text-color;
      line-height: @cell-height;
      text-align: right;
      width: 100px;
      &.c_cell-placeholder {
        color: #c7c7c7;
      }
      &.c_cell-wrap {
        height: auto !important;
        line-height: 30px;
        padding: 10px 0;
        .c_cell-text-inner {
          text-align: left;
          padding-left: 5px;
          min-height: 30px;
          display: inline-block;
          text-align: justify;
          text-justify: inter-ideograph;
        }
      }
    }
    .c_cell-right-link {
      min-width: 10px;
    }
    .c_cell-link {
      height: @cell-height;
      line-height: @cell-height;
      color: #c7c7c7;
      padding-right: 5px;
      font-size: 14px;
    }
  }
}
</style>