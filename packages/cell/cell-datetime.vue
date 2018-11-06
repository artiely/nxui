<template>
  <div>
    <nx-cell :value="value" :title="title" :placeholder="placeholder" link @click.native="visible=true"></nx-cell>
    <!-- popup -->
    <nx-popup v-model="visible" position="bottom" get-container="body">
      <nx-datetime-picker v-model="datetime" :type="type" :min-date="minDate" :max-date="maxDate" @confirm="confirm" @cancel="cancel"></nx-datetime-picker>
    </nx-popup>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  name: 'nx-cell-datetime',
  props: {
    value: String,
    title: String,
    placeholder: String,
    type: String,
    minDate: Date,
    maxDate: Date
  },
  data() {
    return {
      visible: false,
      datetime: ''
    }
  },
  methods: {
    format(value) {
      return dayjs(value).format('YYYY-MM-DD HH:mm')
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

<style scoped>
</style>