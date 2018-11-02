<template>
  <div class="c_mask-box" v-show="value">
    <transition name="fade">
      <div class="c_mask" v-show="value" @click="handleMask"></div>
    </transition>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'nx-mask',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleMask() {
      this.$emit('input', false)
    }
  }
}
</script>

<style >
.c_mask-box {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
}
.c_mask {
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
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
</style>