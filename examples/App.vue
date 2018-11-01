<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <nx-button> <nx-icon name="icon-tianjiahaoyou"></nx-icon> 谭杰</nx-button>
      <nx-button disabled> <nx-icon name="icon-tianjiahaoyou"></nx-icon> 谭杰</nx-button>
      <nx-button  circle> <nx-icon name="icon-tianjiahaoyou"></nx-icon> 谭杰</nx-button>
      默认
      <nx-header ></nx-header>
      有下边框
      <nx-header border title="中间标题"></nx-header>
      有阴影
      <nx-header  shadow title="中间标题"></nx-header>
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
      <nx-header border shadow title="中间标题中间标题中间标题中间标题">
        <div slot="left">
         取消
        </div>
        <div slot="right">
         确定
        </div>
      </nx-header>
      1
      <nx-header border shadow title="流水">
        <div slot="left">
         <nx-icon name="icon-v-icon-arrow-left" style="padding-right:5px"></nx-icon>返回
        </div>
        <div slot="right">
         消费记录
        </div>
      </nx-header>
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
      <nx-tag title="次卡" fill  style="background: linear-gradient(to right,#ffb819 ,#ffdc65)"></nx-tag>
      <br>
      <nx-tag title="次卡"  style="background: linear-gradient(to right,#ffb819 ,#ffdc65)"></nx-tag>
      <div  class="demo"></div>
      <nx-cell-group>
        <nx-cell-input title="姓名" required></nx-cell-input>
        <nx-cell-input title="姓名" placeholder="请输入"></nx-cell-input>
        <nx-cell-input title="金额" placeholder="请输入" type="number" currency v-model="money"></nx-cell-input>
        <nx-cell-input title="电话" placeholder="请输入" type="tel" maxlength="11" v-model="tel"></nx-cell-input>
        <nx-cell-input title="数字" placeholder="请输入" type="number" maxlength="11" v-model="num"></nx-cell-input>
        <nx-cell-input title="数字嘿嘿" placeholder="请输入" type="number" maxlength="11" v-model="num"></nx-cell-input>
        <nx-cell-input title="禁用" placeholder="请输入"  disabled type="number" maxlength="11" v-model="num"></nx-cell-input>
        <nx-cell-input placeholder="请输入" type="number" maxlength="11" v-model="num"></nx-cell-input>
        <nx-cell-input placeholder="请输入" type="password" maxlength="11" v-model="num" eye></nx-cell-input>
        <nx-cell-input placeholder="请输入" type="password" maxlength="11" v-model="num" clear eye></nx-cell-input>
        <nx-cell-input placeholder="请输入" type="password" maxlength="11" v-model="num" clear ></nx-cell-input>
      </nx-cell-group>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      html: '',
      money: '',
      tel:'',
      num:'12'
    }
  },
  mounted() {
    
  }
}
</script>
<style lang="less">
.demo{
  height:50px;background:#ddd
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
