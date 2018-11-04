<template>
  <div class="c_tag" :style="fill?fillColor:lightColor">
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'nx-tag',
  props: {
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    fill: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    lightColor() {
      let hexToRgba = function(hex, al) {
        let hexColor = /^#/.test(hex) ? hex.slice(1) : hex
        let alp = hex === 'transparent' ? 0 : Math.ceil(al)
        let r
        let g
        let b
        hexColor = /^[0-9a-f]{3}|[0-9a-f]{6}$/i.test(hexColor)
          ? hexColor
          : 'fffff'
        if (hexColor.length === 3) {
          hexColor = hexColor.replace(/(\w)(\w)(\w)/gi, '$1$1$2$2$3$3')
        }
        r = hexColor.slice(0, 2)
        g = hexColor.slice(2, 4)
        b = hexColor.slice(4, 6)
        r = parseInt(r, 16)
        g = parseInt(g, 16)
        b = parseInt(b, 16)
        return {
          hex: `#${hexColor}`,
          alpha: alp,
          rgba: `rgba(${r},${g},${b},${(alp / 100).toFixed(2)})`
        }
      }
      return {
        color: this.color,
        backgroundColor: hexToRgba(this.color, 10).rgba,
        border: 'none'
      }
    },
    fillColor() {
      return {
        color: '#fff',
        backgroundColor: this.color,
        border: 'none'
      }
    }
  },
  created() {
    console.log(this.$attrs)
  }
}
</script>

<style scoped lang="less">
.c_tag {
  box-sizing: border-box;
  padding: 2px 4px;
  background: #000;
  display: inline-block;
  border-radius: 4px;
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
  border: 1px solid transparent;
}
</style>