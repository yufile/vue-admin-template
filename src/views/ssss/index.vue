<template>
  <div class="dialog">
    <!--  1.讲解自定义指令、 2.实现防抖自定义指令 3、作用是用来防止搜索的时候导致请求接口过于频繁 ddddd -->
    <input v-model="value" v-anti-shake:none="getData" type="text">
    <div>ssss</div>
  </div>
</template>

<script>
export default {
  name: 'Dialog',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    getData() {
      console.log(1)
    }
  }
}
</script>

<style scoped>

</style>
