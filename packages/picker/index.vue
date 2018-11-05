<template>
  <div class="van-picker">
    <div class="van-picker__toolbar van-hairline--top-bottom" v-if="showToolbar">
      <slot>
        <div class="van-picke__cancel" @click="emit('cancel')">{{ cancelButtonText || 取消 }}</div>
        <div class="van-picker__title van-ellipsis" v-if="title" v-text="title" />
        <div class="van-picker__confirm" @click="emit('confirm')">{{ confirmButtonText || 确定 }}</div>
      </slot>
    </div>
    <div v-if="loading" class="van-picker__loading">
      <loading />
    </div>
    <div class="van-picker__columns" :style="columnsStyle" @touchmove.prevent>
      <picker-column v-for="(item, index) in (simple ? [columns] : columns)" :key="index" :value-key="valueKey" :initial-options="simple ? item : item.values" :class-name="item.className" :default-index="item.defaultIndex" :item-height="itemHeight" :visible-item-count="visibleItemCount" @change="onChange(index)" />
      <div class="van-picker__frame van-hairline--top-bottom" :style="frameStyle" />
    </div>
  </div>
</template>

<script>
// import create from '../utils/create';
import PickerColumn from './picker-column'
import deepClone from './_util/deep-clone'
export default {
  name: 'nx-picker',
  components: {
    PickerColumn
  },
  props: {
    title: String,
    loading: Boolean,
    showToolbar: Boolean,
    confirmButtonText: String,
    cancelButtonText: String,
    visibleItemCount: {
      type: Number,
      default: 5
    },
    valueKey: {
      type: String,
      default: 'text'
    },
    itemHeight: {
      type: Number,
      default: 44
    },
    columns: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      children: []
    }
  },
  computed: {
    frameStyle() {
      return {
        // height: this.itemHeight + 'px'
      }
    },
    columnsStyle() {
      return {
        height: this.itemHeight * this.visibleItemCount + 'px'
      }
    },
    simple() {
      return this.columns.length && !this.columns[0].values
    }
  },
  watch: {
    columns() {
      this.setColumns()
    }
  },
  methods: {
    setColumns() {
      const columns = this.simple ? [{ values: this.columns }] : this.columns
      columns.forEach((columns, index) => {
        this.setColumnValues(index, deepClone(columns.values))
      })
    },
    emit(event) {
      if (this.simple) {
        this.$emit(event, this.getColumnValue(0), this.getColumnIndex(0))
      } else {
        this.$emit(event, this.getValues(), this.getIndexes())
      }
    },
    onChange(columnIndex) {
      if (this.simple) {
        this.$emit(
          'change',
          this,
          this.getColumnValue(0),
          this.getColumnIndex(0)
        )
      } else {
        this.$emit('change', this, this.getValues(), columnIndex)
      }
    },
    // get column instance by index
    getColumn(index) {
      return this.children[index]
    },
    // get column value by index
    getColumnValue(index) {
      const column = this.getColumn(index)
      return column && column.getValue()
    },
    // set column value by index
    setColumnValue(index, value) {
      const column = this.getColumn(index)
      column && column.setValue(value)
    },
    // get column option index by column index
    getColumnIndex(columnIndex) {
      return (this.getColumn(columnIndex) || {}).currentIndex
    },
    // set column option index by column index
    setColumnIndex(columnIndex, optionIndex) {
      const column = this.getColumn(columnIndex)
      column && column.setIndex(optionIndex)
    },
    // get options of column by index
    getColumnValues(index) {
      return (this.children[index] || {}).options
    },
    // set options of column by index
    setColumnValues(index, options) {
      const column = this.children[index]
      if (
        column &&
        JSON.stringify(column.options) !== JSON.stringify(options)
      ) {
        column.options = options
        column.setIndex(0)
      }
    },
    // get values of all columns
    getValues() {
      return this.children.map(child => child.getValue())
    },
    // set values of all columns
    setValues(values) {
      values.forEach((value, index) => {
        this.setColumnValue(index, value)
      })
    },
    // get indexes of all columns
    getIndexes() {
      return this.children.map(child => child.currentIndex)
    },
    // set indexes of all columns
    setIndexes(indexes) {
      indexes.forEach((optionIndex, columnIndex) => {
        this.setColumnIndex(columnIndex, optionIndex)
      })
    }
  }
}
</script>
<style lang="less">
@white: #fff;
@blue: #1690ff;
@active-color: #333;
@gray-dark: #eee;
@text-color: #555;
.van-picker {
  overflow: hidden;
  user-select: none;
  position: relative;
  background-color: @white;
  -webkit-text-size-adjust: 100%; /* avoid iOS text size adjust */

  &__toolbar {
    display: flex;
    height: 44px;
    line-height: 44px;
    justify-content: space-between;
  }

  &__cancel,
  &__confirm {
    color: @blue;
    padding: 0 15px;
    font-size: 14px;

    &:active {
      background-color: @active-color;
    }
  }

  &__title {
    max-width: 50%;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }

  &__columns {
    display: flex;
    position: relative;
  }

  &__loading {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    position: absolute;
    background-color: rgba(255, 255, 255, 0.9);

    circle {
      stroke: @blue;
    }
  }

  &__loading .van-loading,
  &__frame {
    top: 50%;
    left: 0;
    width: 100%;
    z-index: 1;
    height: 44px;
    position: absolute;
    pointer-events: none;
    transform: translateY(-50%);
  }

  &-column {
    flex: 1;
    overflow: hidden;
    font-size: 16px;
    text-align: center;

    &__item {
      padding: 0 5px;
      color: @gray-dark;

      &--selected {
        font-weight: 500;
        color: @text-color;
      }

      &--disabled {
        opacity: 0.3;
      }
    }
  }
}
</style>
