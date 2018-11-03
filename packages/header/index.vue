<template>
  <div class="c_header">
    <div class="c_header-isborder" :class="{'c_header-border':border,'c_header-shadow':shadow}">
      <slot>
        <div class="c_header-inner">
          <div class="c_header-left" :class="leftClass" @click="handleLeft">
            <slot name="left">
              <nx-icon :name="leftIcon" v-if="leftIcon"></nx-icon>
            </slot>
          </div>
          <div class="c_header-title" :class="titleClass" @click="handleTitle">
            <slot name="title">
              {{title}}
            </slot>
          </div>
          <div class="c_header-right" :class="rightClass" @click="handleRight">
            <slot name="right">
              <nx-icon :name="rightIcon" v-if="rightIcon"></nx-icon>
            </slot>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import nxIcon from '../icon'
export default {
  name: 'nx-header',
  components: {
    nxIcon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    shadow: {
      type: Boolean,
      default: false
    },
    // TODO:
    loading: {
      type: Boolean,
      default: false
    },
    leftIcon: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: false
    },
    leftClass: {
      type: String,
      default: ''
    },
    rightClass: {
      type: String,
      default: ''
    },
    titleClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleLeft(e) {
      this.$emit('handle-left', e)
    },
    handleRight(e) {
      this.$emit('handle-right', e)
    },
    handleTitle(e) {
      this.$emit('handle-title', e)
    }
  }
}
</script>

<style lang="less">
// @import '../../assets/style/var.less';
// @import '../../assets/style/border.less';
@header-height: 44px;
.c_header {
  // position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: @header-height;
  line-height: @header-height;
  background: #f8f8f8;
  color: #434a5a;
  font-weight: 500;
  text-align: center;
  z-index: 999;
  font-size: 17px;
  .c_header-isborder {
    display: flex;
    height: 100%;
    &.c_header-border {
      .borderB();
    }
    &.c_header-shadow {
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.1);
    }
  }
  .c_header-inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .c_header-left,
    .c_header-right {
      flex: 1;
      align-items: stretch;
      white-space: nowrap;
      color: #1690ff;
    }
    .c_header-left {
      text-align: left;
      padding-left: 10px;
    }
    .c_header-right {
      text-align: right;
      padding-right: 10px;
    }
    .c_header-title {
      padding: 0 5px;
      .textover1();
    }
  }
}
</style>
