<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <nx-button>
        <nx-icon name="icon-tianjiahaoyou"></nx-icon> 谭杰</nx-button>
      <nx-button disabled>
        <nx-icon name="icon-tianjiahaoyou"></nx-icon> 谭杰</nx-button>
      <nx-button circle>
        <nx-icon name="icon-tianjiahaoyou"></nx-icon> 谭杰</nx-button>
      <br>
      <nx-button circle type="danger">
        xx</nx-button>
      默认
      <nx-header></nx-header>
      有下边框
      <nx-header border title="中间标题"></nx-header>
      有阴影
      <nx-header shadow title="中间标题"></nx-header>
      1
      <nx-header shadow title="中间标题" loading></nx-header>
      标题很长
      <nx-header border shadow title="中间标题中间标题中间标题中间标题"></nx-header>
      <nx-header left-icon="icon-v-icon-arrow-left" title="中间标题中间标题中间标题中间标题"></nx-header>
      自定义
      <nx-header border shadow title="中间标题中间标题中间标题中间标题">
        <div slot="left">
          <nx-icon name="icon-v-icon-arrow-left" style="padding-right:5px"></nx-icon>
          <nx-icon name="icon-guanbi" style="padding-left:5px"></nx-icon>
        </div>
      </nx-header>
      左右文字
      <nx-header border shadow title="中间标题中间标题中间标题中间标题" :loading="loading">
        <div slot="left">
          取消
        </div>
        <div slot="right">
          确定
        </div>
      </nx-header>
      1
      <nx-header border shadow title="流水" :loading="loading" loading-color="#333">
        <div slot="left">
          <nx-icon name="icon-v-icon-arrow-left" style="padding-right:5px"></nx-icon>返回
        </div>
        <div slot="right">
          消费记录
        </div>
      </nx-header>
      <nx-button @click.native="loading=true">true</nx-button>
      <nx-button @click.native="loading=false">false</nx-button>
      <div v-html="html"></div>
      <nx-icon name="icon-tianjiahaoyou" color="#f00"></nx-icon>
      <nx-icon name="icon-tianjiahaoyou" symbol></nx-icon>
      123
      <nx-tag></nx-tag>
      <nx-tag title="服" color="#ff5500"></nx-tag>
      <div></div>
      <nx-tag title="服" color="#2db7f5"></nx-tag>
      <div></div>
      <nx-tag title="折扣卡" color="#2db7f5"></nx-tag>
      <div></div>
      <nx-tag title="次卡" fill color="#2db7f5"></nx-tag>
      <div></div>
      <nx-tag title="次卡" fill style="background: linear-gradient(to right,#ffb819 ,#ffdc65)"></nx-tag>
      <br>
      <nx-tag title="次卡" style="background: linear-gradient(to right,#ffb819 ,#ffdc65)"></nx-tag>
      <div class="demo"></div>
      <nx-cell-group>
        <nx-cell-input title="姓名" required></nx-cell-input>
        <nx-cell-input title="姓名" placeholder="请输入"></nx-cell-input>
        <nx-cell-input title="金额" placeholder="请输入" type="number" currency v-model="money"></nx-cell-input>
        <nx-cell-input title="电话" placeholder="请输入" type="tel" maxlength="11" v-model="tel"></nx-cell-input>
        <nx-cell-input title="数字" placeholder="请输入" type="number" maxlength="11" v-model="num"></nx-cell-input>
        <nx-cell-input title="数字嘿嘿" placeholder="请输入" type="number" maxlength="11" v-model="num"></nx-cell-input>
        <nx-cell-input title="标题很长很长" placeholder="请输入" type="number" maxlength="11" v-model="num"></nx-cell-input>
        <nx-cell-input title="禁用" placeholder="请输入" disabled type="number" maxlength="11" v-model="num"></nx-cell-input>
        <nx-cell-input placeholder="请输入" type="number" maxlength="11" v-model="num"></nx-cell-input>
        <nx-cell-input placeholder="请输入" type="password" maxlength="11" v-model="num" eye></nx-cell-input>
        <nx-cell-input placeholder="请输入" type="password" maxlength="11" v-model="num" clear eye></nx-cell-input>
        <nx-cell-input placeholder="请输入" type="password" maxlength="11" v-model="num" clear></nx-cell-input>
        <nx-cell value="请输入1" title="cell" link placeholder="请输入"></nx-cell>
        <nx-cell value="请输入2" title="cell" placeholder="xx"></nx-cell>
        <nx-cell value="" title="cell" placeholder="请选择日期" link></nx-cell>
        <nx-cell value="请选择日期请选择日期请选择日期请选择日期请选择日期请选择日期请选择日期" title="cell" placeholder="" link></nx-cell>
        <nx-cell value="请选择日期请选择日期请选择日期请选择日期请选择日期请选择日期请选择日期" title="cell" placeholder="" link wrap></nx-cell>
        <nx-cell value="请选择日期请选择日期请" title="cell" placeholder="" link wrap></nx-cell>
        <nx-cell v-model="xx" title="cell" placeholder="请选择时间" link  :datetime-picker="datetimePicker"></nx-cell>
        <nx-cell v-model="xxx" title="cell" placeholder="请选择时间" link  :datetime-picker="datetimePicker2"></nx-cell>
        <nx-cell v-model="xxxx" title="cell" placeholder="请选择时间" link  :datetime-picker="datetimePicker3"></nx-cell>
        <nx-cell-datetime title="保险到期" v-model="xx" type="date"></nx-cell-datetime>
      </nx-cell-group>
      <button @click="show1=true">上</button>
      <br>
      <button @click="show2=true">右</button><br>
      <button @click="show3=true">下</button><br>
      <button @click="show4=true">左</button><br>
      <button @click="show5=true">zhong</button><br>
      <button @click="show6=true">full</button><br>
      <button @click="show7=true">77777777777</button><br>
      <nx-popup v-model="show1" position="top" get-container="body" style="height:300px;width:100%;background:red">
        <div>123</div>
      </nx-popup>

      <nx-popup v-model="show2" position="right" get-container="body" style="height:50%;width:200px;background:red">
        <div></div>
      </nx-popup>
      <nx-popup v-model="show3" position="bottom" style="height:300px;width:100%;background:red">
        <div></div>
      </nx-popup>
      <nx-popup v-model="show4" position="left" get-container="body" style="height:50%;width:300px;background:red">
        <div></div>
      </nx-popup>
      <nx-popup v-model="show6" position="left" get-container="body" containerClass="containerClass" style="height:100%;width:100%;background:red">
        <div @click="show6=false">guanbi</div>
      </nx-popup>

      <nx-popup v-model="show5" position="center" get-container="body" style="height:100px;width:100px;background:red">
        <div></div>
      </nx-popup>

      <!-- <nx-popup2 v-model="show7" position="right" style="width:50px;height:50%;background:#fff">
        <div style="height:50%;width:50%;background:red">123</div>
      </nx-popup2> -->

      <nx-popup v-model="show7" position="top" style="width:100%;height:300px;background:red">
        <div>999999999999999999</div>
      </nx-popup>

      <nx-moon-loader></nx-moon-loader>

      <nx-picker :columns="columns" @change="onChange" />
      <nx-picker :columns="columns" @change="onChange" loading/>
      <nx-datetime-picker v-model="currentDate" type="datetime" :min-hour="minHour" :max-hour="maxHour" :min-date="minDate" :max-date="maxDate" />
    </div>
  </div>
</template>
<script>
import dayjs from 'dayjs'
export default {
  data() {
    return {
      html: '',
      money: '',
      tel: '',
      num: '12',
      xx: '',
      xxx: '2019/08/08 01:01',
      xxxx: '01:01:00',
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      position: 'top',
      loading: false,
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      datetimePicker: {
        type: 'datetime',
        minHour: 10,
        maxHour: 20,
        minDate: new Date(),
        maxDate: new Date(2019, 10, 1),
        format:'YYYY-MM-DD HH:mm'
      },
      datetimePicker2: {
        type: 'datetime',
        minHour: 10,
        maxHour: 20,
        minDate: new Date(),
        maxDate: new Date(2019, 10, 1),
        format:'YYYY/MM/DD HH:mm'
      },
      datetimePicker3: {
        type: 'time',
        minHour: 10,
        maxHour: 20,
        minDate: new Date(),
        maxDate: new Date(2019, 10, 1),
        format:'HH:mm:ss'
      },
      minHour: 10,
      maxHour: 20,
      minDate: new Date(),
      maxDate: new Date(2019, 10, 1),
      currentDate: '2019-08-08 01:01'
    }
  },
  methods: {
    handleBtn(position) {
      this.position = position
    },
    onChange(picker, value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`)
    },
    onPickerInitialed() {
      const value = this.$refs.picker.getColumnValues()
      console.log(`[Mand Mobile] Picker Initialed: ${JSON.stringify(value)}`)
    },
    onPickerConfirm(columnIndex, itemIndex, value) {
      if (value) {
        this.pickerValue = value.text
      }
    }
  },
  mounted() {}
}
</script>
<style lang="less">
.containerClass {
  height: 100%;
  width: 100%;
  background: greenyellow;
}
.demo {
  height: 50px;
  background: #ddd;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
