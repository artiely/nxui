<template>
  <div class="cb-cell-group" :class="{'cb-cell-group-border':border}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'nx-cell-group',
  props: {
    border: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="less">
.cb-cell-group {
  background: #fff;
  overflow: hidden;
}
.cb-cell-group-border {
  .borderTB()
}
</style>
