<template>
  <div v-show="isPopupShow" class="md-popup" :class="[
      hasMask ? 'with-mask' : '',
      position
    ]">
    <transition name="fade">
      <div v-show="hasMask && isPopupBoxShow" @click="onPopupMaskClick" class="md-popup-mask"></div>
    </transition>
    <transition :name="transition" @before-enter="onPopupTransitionStart" @before-leave="onPopupTransitionStart" @after-enter="onPopupTransitionEnd" @after-leave="onPopupTransitionEnd">
      <div v-show="isPopupBoxShow" class="md-popup-box" @click.self="onPopupMaskClick" :class="[
          transition,containerClass
        ]">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'nx-popup',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    containerClass: {
      type: String,
      default: ''
    },
    hasMask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'center'
    },
    transition: {
      type: String,
      default() {
        switch (this.position) {
          case 'bottom':
            return 'slide-up'
          /* istanbul ignore next */
          case 'top':
            return 'slide-down'
          /* istanbul ignore next */
          case 'left':
            return 'slide-right'
          /* istanbul ignore next */
          case 'right':
            return 'slide-left'
          default:
            return 'fade'
        }
      }
    },
    preventScroll: {
      type: Boolean,
      default: true
    },
    preventScrollExclude: {
      type: [String, HTMLElement],
      default() {
        return ''
      }
    },
    getContainer: [String, Function]
  },
  data() {
    return {
      // controle popup mask & popup box
      isPopupShow: false,
      // controle popup box
      isPopupBoxShow: false,
      // transtion lock
      isAnimation: false
    }
  },
  watch: {
    value(val) {
      /* istanbul ignore next */
      if (val) {
        if (this.isAnimation) {
          setTimeout(() => {
            this.open()
          }, 50)
        } else {
          this.open()
        }
      } else {
        this.close()
      }
    },
    preventScrollExclude(val, oldVal) {
      // remove old listener before add
      /* istanbul ignore next */
      this.handlePreventScrollExclude(false, oldVal)
      /* istanbul ignore next */
      this.handlePreventScrollExclude(true, val)
    },
    getContainer() {
      this.move()
    }
  },

  methods: {
    // MARK: private methods
    open() {
      this.isPopupShow = true
      this.isAnimation = true
      // popup box enter the animation after popup show
      this.$nextTick(() => {
        this.isPopupBoxShow = true
        /* istanbul ignore if */
        if (process.env.NODE_ENV === 'testing') {
          this.onPopupTransitionEnd()
        }
      })
      document.body.classList.add('van-overflow-hidden')
      this.preventScroll && this.handlePreventScroll(true)
    },
    close() {
      this.isAnimation = true
      this.isPopupBoxShow = false
      this.preventScroll && this.handlePreventScroll(false)
      this.$emit('input', false)
      document.body.classList.remove('van-overflow-hidden')
      if (process.env.NODE_ENV === 'testing') {
        this.onPopupTransitionEnd()
      }
    },
    handlePreventScroll(isBind) {
      const handler = isBind ? 'addEventListener' : 'removeEventListener'
      const masker = this.$el.querySelector('.md-popup-mask')
      const boxer = this.$el.querySelector('.md-popup-box')
      masker && masker[handler]('touchmove', this.onPreventDefault, false)
      boxer && boxer[handler]('touchmove', this.onPreventDefault, false)
      this.handlePreventScrollExclude(isBind)
    },
    handlePreventScrollExclude(isBind, preventScrollExclude) {
      const handler = isBind ? 'addEventListener' : 'removeEventListener'
      preventScrollExclude = preventScrollExclude || this.preventScrollExclude
      const excluder =
        preventScrollExclude && typeof preventScrollExclude === 'string'
          ? this.$el.querySelector(preventScrollExclude)
          : preventScrollExclude
      excluder &&
        excluder[handler]('touchmove', this.stopImmediatePropagation, false)
    },
    onPreventDefault(event) {
      event.preventDefault()
    },
    stopImmediatePropagation(event) {
      /* istanbul ignore next */
      event.stopImmediatePropagation()
    },
    // MARK: event handler
    onPopupTransitionStart() {
      if (!this.isPopupBoxShow) {
        this.$emit('beforeHide')
        this.$emit('before-hide')
      } else {
        this.$emit('beforeShow')
        this.$emit('before-show')
      }
    },
    onPopupTransitionEnd() {
      /* istanbul ignore next */
      if (!this.isAnimation) {
        return
      }
      /* istanbul ignore next */
      if (!this.isPopupBoxShow) {
        // popup hide after popup box finish animation
        this.isPopupShow = false
        this.$emit('hide')
      } else {
        this.$emit('show')
      }
      /* istanbul ignore next */
      this.isAnimation = false
    },
    onPopupMaskClick() {
      if (this.maskClosable) {
        this.close()
        this.$emit('maskClick')
      }
    },
    move() {
      let container

      const { getContainer } = this
      if (getContainer) {
        container =
          typeof getContainer === 'string'
            ? document.querySelector(getContainer)
            : getContainer()
      } else if (this.$parent) {
        container = this.$parent.$el
      }

      if (container) {
        container.appendChild(this.$el)
      }
    }
  },
  mounted() {
    this.getContainer && this.move()
    this.value && this.open()
  },
  activated() {
    /* istanbul ignore next */
    this.value && this.open()
  },
  beforeDestroy() {
    this.close()

    if (this.getContainer) {
      this.$parent.$el.appendChild(this.$el)
    }
  },

  deactivated() {
    /* istanbul ignore next */
    this.close()
  }
}
</script>

<style lang="less">
@popup-zindex: 999;
@popup-mask-bg: rgba(0, 0, 0, 0.3);
.van-overflow-hidden {
  overflow: hidden;
  height: 100%;
}
.md-popup {
  &.with-mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: @popup-zindex;
    .md-popup-box {
      position: absolute;
    }
  }
  .md-popup-box {
    position: fixed;
    z-index: @popup-zindex+1;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
    will-change: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    &.slide-up {
      // padding-bottom: env(safe-area-inset-bottom);
    }
  }
  .md-popup-mask {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: @popup-zindex;
    position: absolute;
    background-color: @popup-mask-bg;
  }
  &.center .md-popup-box {
    // absolute-pos(50%, auto, auto, 50%);
    top: 50%;
    right: auto;
    bottom: auto;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &.top,
  &.bottom,
  &.left,
  &.right {
    .md-popup-box {
      transition: all 0.3s;
    }
  }
  // &.top{
  //   .md-popup-box{
  //      &:nth-child(1){
  //        top:0;
  //        left:0
  //      }
  //   }
  // }
  // &.bottom{
  //   .md-popup-box{
  //      &:nth-child(1){
  //        bottom:0;
  //        left:0
  //      }
  //   }
  // }
  &.top,
  &.bottom {
    .md-popup-box {
      width: 100%;
    }
  }
  &.left,
  &.right {
    .md-popup-box {
      height: 100%;
    }
  }
  &.top .md-popup-box {
    top: 0;
    left: 0;
    :nth-child(1) {
      position: absolute;
      top: 0;
    }
  }
  &.bottom .md-popup-box {
    bottom: 0;
    left: 0;
    :nth-child(1) {
      position: absolute;
      bottom: 0;
    }
  }
  &.left .md-popup-box {
    left: 0;
    top: 0;
    :nth-child(1) {
      position: absolute;
      left: 0;
    }
  }
  &.right .md-popup-box {
    right: 0;
    top: 0;
    :nth-child(1) {
      position: absolute;
      right: 0;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter,
  .fade-leave-to,
  .fade-leave-active {
    opacity: 0;
  }
  .slide-up-enter-active,
  .slide-up-leave-active,
  .slide-down-enter-active,
  .slide-down-leave-active,
  .bottom .show {
    transform: translateY(0);
  }
  .slide-up-enter,
  .slide-up-leave-to {
    transform: translateY(70%);
  }
  .slide-up-leave-active {
    transform: translateY(100%);
  }
  .slide-down-enter,
  .slide-down-leave-to {
    transform: translateY(-70%);
  }
  .slide-down-leave-active {
    transform: translateY(-100%);
  }
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transform: translateX(0);
  }
  .slide-left-enter,
  .slide-left-leave-to {
    transform: translateX(70%);
  }
  .slide-left-leave-active {
    transform: translateX(100%);
  }
  .slide-right-enter,
  .slide-right-leave-to {
    transform: translateX(-70%);
  }
  .slide-right-leave-active {
    transform: translateX(-100%);
  }
}
</style>