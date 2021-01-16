<template>
  <div class="swiperWrapper">
    <swiper ref="mySwiper" :options="swiperOptions" class="swiperBox">
      <swiper-slide v-for="item in data" :key="item">{{item}}</swiper-slide>
    </swiper>
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import { Swiper as SwiperClass, Autoplay, Navigation, Pagination } from 'swiper/core'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
SwiperClass.use([Autoplay, Navigation, Pagination])
export default {
  name: 'HelloWorld',
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      data: [],
      swiperOptions: {
        loop: true,
        slidesPerView: 6,
        slideToClickedSlide: true,
        autoplay: {
          delay: 3000
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'custom',
          renderCustom: function (swiper, current, total) {
            console.log(swiper, current, total)
            return `${current}of${total}`
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  directives: {
    swiper: directive
  },
  created(){
    this.data = Array.from(Array(15), (_, idx) => idx)
  },
  mounted () {
    this.swiper.autoplay.start()
  }
}
</script>

<style lang="">
  .swiperWrapper {
    margin: 20px auto;
    position: relative;
    width: 600px;
    height: 300px;
    border: 1px solid peru;
  }
  .swiper-pagination {
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }
</style>
