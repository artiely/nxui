<template>
  <div class="md-button" :class="[type, size, disabled ? 'disabled' : '',circle?'circle':'']" @click="onBtnClick">
    <div class="md-button-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nx-button',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'large'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onBtnClick(event) {
      if (this.disabled) {
        event.stopImmediatePropagation()
      } else {
        this.$emit('click', event)
      }
    }
  }
}
</script>

<style lang="less">
@import '../style/theme';
// 按钮主色
@button-primary-fill: #1690ff;
// 点击高亮色
@button-primary-fill-tap: darken(@button-primary-fill, 10%);
// 禁用颜色
@button-primary-fill-disabled: #c7c7c7;
@button-height: 40px;
@button-font-size: 18px;
@button-border-radius: 2px;
@button-border-radius-circle: @button-height / 2;

.md-button {
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  text-align: center;
  border-radius: @button-border-radius;
  box-sizing: border-box;
  overflow: visible;
  height: @button-height;
  line-height: @button-height;
  font-size: @button-font-size;
  &.circle {
    border-radius: @button-border-radius-circle;
  }
  &.disabled {
    &:active::before {
      display: none;
    }
  }
  &::before {
    display: none;
    content: '';
    position: absolute;
    box-sizing: border-box;
  }
  &:active::before {
    display: block;
  }
  .md-button-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    white-space: nowrap;
  }
  // type
  &.primary {
    background-color: @button-primary-fill;
    color: @color-text-base-inverse;
    &:active {
      background-color: @button-primary-fill-tap;
    }
    &.disabled {
      background-color: @button-primary-fill-disabled;
    }
  }
}
</style>
