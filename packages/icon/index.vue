<template>
  <i class="cb-icon iconfont" v-if="!symbol" :class="name" :style="'font-size:'+size+';color:'+color"></i>
  <svg class="icon" aria-hidden="true" v-else :style="'font-size:'+size">
    <use :xlink:href="`#${name}`"></use>
  </svg>
</template>

<script>
export default {
  name: 'nx-icon',
  props: {
    name: {
      type: String,
      default: ''
    },
    symbol: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: '0.5rem'
    },
    color: {
      type: String,
      default: ''
    }
  },
  mounted() {}
}
</script>

<style lang="less">
@import '//at.alicdn.com/t/font_869194_nujouwg8lv.css';
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 44px;
  color: green;
}
.iconfont {
  font-size: 44px;
}
</style>
