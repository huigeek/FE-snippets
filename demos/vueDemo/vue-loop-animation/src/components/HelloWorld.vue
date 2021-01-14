<template>
  <section class="container">
    <header>
      <nav>
        <ul class="tabs">
          <li
            class="item tab"
            v-for="tab in tabs"
            :key="tab"
            @click="handleClickTab">
            {{tab}}
          </li>
        </ul>
      </nav>

      <nav>
        <ul class="pages">
          <li
            class="item page"
            :class="{'active': currentPage === page}"
            v-for="page in pages"
            :key="page">
            {{page}}
          </li>
        </ul>
      </nav>
    </header>

    <main class="content">
      <div v-for="item in lists" :key="item">{{item}}</div>
    </main>
  </section>
</template>

<script>
import { ClickPageLoop } from '../utils/Loop.js'

export default {
  name: 'HelloWorld',
  data () {
    return {
      data: [],
      tabs: [],
      currentPage: 0,
      loop: null
    }
  },
  created () {
    this.data  = Array.from(Array(Math.ceil(Math.random() * 100)), (_, idx) => idx)
    this.tabs  = Array.from(Array(3), (_, idx) => `${idx + 2020}学年`)
  },
  mounted () {
    this.loop = new ClickPageLoop('.container', this.togglePage, 5000, this.playCb)
  },
  computed: {
    lists () {
      return this.data.slice(this.currentPage * 9, this.currentPage * 9 + 9)
    },
    pages () {
      return Array.from(Array(Math.ceil(this.data.length / 9)), (_, idx) => idx)
    }
  },
  methods: {
    handleClickTab () {
      this.loop.destroy()
      this.currentPage = 0
      this.data  = Array.from(Array(Math.ceil(Math.random() * 100)), (_, idx) => idx)
      this.loop.play()
    },
    togglePage () {
      (this.currentPage + 1) + 1 > this.pages.length ? this.currentPage = 0 : this.currentPage++
    },
    playCb (ev) {
      this.currentPage = +ev.target.innerHTML
    }
  }
}
</script>

<style lang="">
ul, li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.container {
  margin: 20px auto;
  width: 500px;
  height: 300px;
  border: 1px solid indianred;
}
.tabs {
  margin: 20px;
}
.pages {
  margin: 20px;
  text-align: right;
}
.item {
  display: inline-block;
  border: 1px solid goldenrod;
  padding: 3px 8px;
  cursor: pointer;
}
.active {
  color: indianred;
}
.content {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
}
.content div {
  text-align: center;
}
</style>
