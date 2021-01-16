<template>
  <div class="hello">
    <div ref="statusWarpper">
      <input
        id="hide"
        type="radio"
        name="status"
        value="0"
        @click="handleClick"
        >
      <label for="hide">隐藏</label>
      &nbsp;&nbsp;
      <input
        id="show"
        type="radio"
        name="status"
        value="1"
        @click="handleClick"
        >
      <label for="show">显示</label>
      &nbsp;&nbsp;
      <input
        id="edit"
        type="radio"
        name="status"
        value="2"
        @click="handleClick"
        >
      <label for="edit">编辑</label>
    </div>

    <div>
      <h2>当前computed status值为{{status}}</h2>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  computed: mapState({
    status: state => state.status
  }),
  watch: {
    status: {
      handler: function (val) {
        this.$nextTick(() => {
          const inputs = document.querySelectorAll('input')
          inputs[val].checked = true
        })
      },
      immediate: true
    }
  },
  methods: {
    settingStatus(value){
      // 正常这里是个异步，请求后台接口，再去处理
      setTimeout(() => {
        this.$store.commit('SET_STATUS', value)
      }, 0);
    },
    handleClick(e){
      e.preventDefault();
      this.settingStatus(+e.target.value)
    }
  }
}
</script>
