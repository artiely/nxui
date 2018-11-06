<template>
  <div class="c_header" :class="{'c_header-fixed':fixed}">
    <div class="c_header-isborder" :class="{'c_header-border':border,'c_header-shadow':shadow}">
      <slot>
        <div class="c_header-inner">
          <div class="c_header-left" :class="leftClass" @click="handleLeft">
            <slot name="left">
              <nx-icon :name="leftIcon" v-if="leftIcon"></nx-icon>
            </slot>
          </div>
          <div class="c_header-center">
            <nx-moon-loader class="c_header-loading" v-if="loading" :color="loadingColor"></nx-moon-loader>
            <div class="c_header-title" :class="titleClass" @click="handleTitle">
              <slot name="title">
                {{title}}
              </slot>
            </div>
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
    loading: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    loadingColor: {
      type: String,
      default: '#1690ff'
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
  computed: {
    loadingShow() {
      return this.loading && this.loading.show === true
        ? this.loading.show
        : this.loading
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
@header-height: 44px;
@header-border-color: #c7c7c7;
@header-fill-color: #f8f8f8;
@header-title-color: #333;
@header-title-font-size: 17px;
@header-btn-color: #1690ff;
.c_header {
  top: 0;
  left: 0;
  width: 100%;
  height: @header-height;
  line-height: @header-height;
  background: @header-fill-color;
  color: @header-title-color;
  font-weight: 500;
  text-align: center;
  z-index: 999;
  font-size: @header-title-font-size;
  &.c_header-fixed {
    position: fixed;
  }
  .c_header-isborder {
    display: flex;
    height: 100%;
    &.c_header-border {
      border-bottom: 1px solid @header-border-color;
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
      color: @header-btn-color;
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
      .textover1();
      text-align: justify;
      text-justify: inter-ideograph;
    }
    .c_header-center {
      overflow: hidden;
      padding: 0 25px;
      position: relative;
      .c_header-loading {
        position: absolute;
        top: (@header-height - 20) / 2;
        left: 5px;
      }
    }
  }
}
</style>
