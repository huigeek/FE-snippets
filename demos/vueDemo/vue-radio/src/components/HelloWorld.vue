<template>
  <div class="hello">
    <div ref="statusWarpper">
      <input
        id="hide"
        type="radio"
        name="status"
        :checked="status === 0"
        :value="0"
        @click="handleClick"
        >
      <label for="hide">隐藏</label>
      &nbsp;&nbsp;
      <input
        id="show"
        type="radio"
        name="status"
        :checked="status === 1"
        :value="1"
        @click="handleClick"
        >
      <label for="show">显示</label>
      &nbsp;&nbsp;
      <input
        id="edit"
        type="radio"
        name="status"
        :checked="status === 2"
        :value="2"
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
  data () {
    return {
    }
  },
  mounted(){
    const el = this.$refs.statusWarpper
    el.addEventListener('click', (e) => {
      console.log('=====', e, e.target, typeof e.target.value, e.target.value)
      if (typeof e.target.value === 'string') {
        // trigger xhr
        this.settingStatus(+e.target.value)
      }
    }, false)
  },
  computed: mapState({
    status: state => state.status
  }),
  methods: {
    settingStatus(value){
      this.$store.commit('SET_STATUS', value)
    },
    handleClick(e){
      e.preventDefault();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
