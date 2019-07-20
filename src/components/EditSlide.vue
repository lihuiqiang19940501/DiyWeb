<template>
  <div id="swiper">
    <div
      class="swiperBox0"
      v-if="data.style === '00'"
      :style="{backgroundColor: data.bgColor, height: data.height}"
    >
      <swiper :options="swiperOption0" ref="mySwiper0" class="swiper">
        <swiperSlide v-for="(item,index) in data.items" :key="index">
          <img :src="item.img" alt :style="{height: data.height}" />
        </swiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div
      class="swiperBox"
      v-if="!data.style || data.style === '0'"
      :style="{backgroundColor: data.bgColor}"
    >
      <swiper :options="swiperOption" class="swiper" ref="swiperBox">
        <swiper-slide v-for="(item, index) in data.items" :key="index">
          <img :src="item.img" alt />
        </swiper-slide>
      </swiper>
    </div>
    <div class="swiperBox1" v-else-if="data.style === '1'" :style="{backgroundColor: data.bgColor}">
      <swiper :options="swiperOption1" class="swiper" ref="swiperBox1">
        <swiper-slide v-for="(item, index) in data.items" :key="index">
          <img :src="item.img" alt />
        </swiper-slide>
      </swiper>
    </div>
    <div class="swiperBox2" v-else-if="data.style === '3'" :style="{backgroundColor: data.bgColor}">
      <swiper :options="swiperOption2" class="swiper2" ref="swiperBox2">
        <swiper-slide v-for="(item, index) in data.items" :key="index">
          <img :src="item.img" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="swiperBox3" v-else-if="data.style === '2'" :style="{backgroundColor: data.bgColor}">
      <swiper :options="swiperOption3" class="swiper3" ref="swiperBox3">
        <swiper-slide v-for="(item, index) in data.items" :key="index">
          <img :src="item.img" alt />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination">
          <span :class="asdf"></span>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "IndexSwiper",
  components: {
    swiper,
    swiperSlide
  },
  props: ["data"],
  data() {
    return {
      asdf: "swiper-pagination-bullet-active",
      swiper: "",
      swiperOption0: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        hideOnClick: true,
        disabledClass: "my-button-disabled",
        hiddenClass: "my-button-hidden",
        spaceBetween: 5,
        autoplay: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          bulletClass: "my-bullet",
          bulletActiveClass: "my-bullet-active"
        },
        on: {
          click: () => {
            let k = 0;
            for (let i in this.data.items) {
              if (k === this.$refs.mySwiper0.swiper.realIndex) {
                // this.jumpLink(this.data.items[i].link)
                console.log(this.data.items[i].link);
              }
              k++;
            }
          },
          slideChange: progress => {
            document.getElementsByClassName(
              "my-bullet-active"
            )[0].style.background = this.data.elcolor;
            // if (this.$refs.swiperBox0.swiper) {
            //   // this.income = this.data ? this.data.managerList[this.$refs.mySwiper.swiper.activeIndex] : ''
            //   let k = 0
            //   let color = ''
            //   for (let i in this.data.items) {
            //     if (k === this.$refs.swiperBox2.swiper.realIndex) {
            //       color = this.data.items[i].bgColor
            //     }
            //     k++
            //   }
            //   this.$emit('swiperChange', color)
            //   if (this.$refs.swiperBox2.swiper) {
            //     // console.log(this.$refs.swiperBox2.swiper.progress)
            //   }
            // } else {
            //   let k = 0
            //   let color = ''
            //   for (let i in this.data.items) {
            //     if (k === 0) {
            //       color = this.data.items[i].bgColor
            //     }
            //     k++
            //   }
            //   this.$emit('swiperChange', color)
            //   if (this.$refs.swiperBox2.swiper) {
            //     // console.log(this.$refs.swiperBox2.swiper.progress)
            //   }
            // }
          }
        }
      },
      swiperOption: {
        grabCursor: true,
        loop: true,
        slidesPerView: 1,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        on: {
          click: () => {
            let k = 0;
            for (let i in this.data.items) {
              if (k === this.$refs.swiperBox.swiper.realIndex) {
                this.jumpLink(this.data.items[i].link);
              }
              k++;
            }
          }
        }
      },
      swiperOption1: {
        effect: "coverflow",
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        initialSlide: 1,
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 25,
          stretch: 20,
          depth: 0,
          modifier: 2,
          slideShadows: false
        },
        on: {
          click: () => {
            let k = 0;
            for (let i in this.data.items) {
              if (k === this.$refs.swiperBox1.swiper.realIndex) {
                this.jumpLink(this.data.items[i].link);
              }
              k++;
            }
          }
        }
      },
      swiperOption2: {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
        },
        on: {
          click: () => {
            let k = 0;
            for (let i in this.data.items) {
              if (k === this.$refs.swiperBox2.swiper.realIndex) {
                this.jumpLink(this.data.items[i].link);
              }
              k++;
            }
          },
          slideChange: progress => {
            if (this.$refs.swiperBox2.swiper) {
              // this.income = this.data ? this.data.managerList[this.$refs.mySwiper.swiper.activeIndex] : ''
              let k = 0;
              let color = "";
              for (let i in this.data.items) {
                if (k === this.$refs.swiperBox2.swiper.realIndex) {
                  color = this.data.items[i].bgColor;
                }
                k++;
              }
              this.$emit("swiperChange", color);
              if (this.$refs.swiperBox2.swiper) {
                // console.log(this.$refs.swiperBox2.swiper.progress)
              }
            } else {
              let k = 0;
              let color = "";
              for (let i in this.data.items) {
                if (k === 0) {
                  color = this.data.items[i].bgColor;
                }
                k++;
              }
              this.$emit("swiperChange", color);
              if (this.$refs.swiperBox2.swiper) {
                // console.log(this.$refs.swiperBox2.swiper.progress)
              }
            }
            // let length = 0
            // for (let i in this.data.items) {
            //   length++
            // }
            // // console.log(progress)
            // // console.log(progress * length)
            // let index = Math.round(progress * length)
            // // if (index <= 0) index = 1
            // // console.log(index)
          }
        }
      },
      swiperOption3: {
        loop: true,
        autoplay: {
          delay: 50000
        },
        slidesPerView: 1.15,
        centeredSlides: true,
        spaceBetween: 10,
        effect: "coverflow",
        coverflowEffect: {
          rotate: 0,
          stretch: -20,
          depth: 105,
          modifier: 1,
          slideShadows: false
        },
        flipEffect: {
          slideShadows: false
        },
        pagination: {
          el: ".swiper-pagination",
          type: "custom",
          autoplayDisableOnInteraction: false,
          renderCustom: function(swiper, current, total) {
            var paginationHtml = " ";
            for (var i = 0; i < total; i++) {
              // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
              if (i === current - 1) {
                paginationHtml +=
                  '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
              } else {
                paginationHtml +=
                  '<span class="swiper-pagination-customs"></span>';
              }
            }
            return paginationHtml;
          }
        },
        on: {
          click: () => {
            let k = 0;
            for (let i in this.data.items) {
              if (k === this.$refs.swiperBox3.swiper.realIndex) {
                this.jumpLink(this.data.items[i].link);
              }
              k++;
            }
          },
          slideChange: progress => {
            if (this.$refs.swiperBox3.swiper) {
              let k = 0;
              let color = "";
              for (let i in this.data.items) {
                if (k === this.$refs.swiperBox3.swiper.realIndex) {
                  color = this.data.items[i].bgColor;
                }
                k++;
              }
              this.$emit("swiperChange", color);
              if (this.$refs.swiperBox3.swiper) {
              }
            } else {
              let k = 0;
              let color = "";
              for (let i in this.data.items) {
                if (k === 0) {
                  color = this.data.items[i].bgColor;
                }
                k++;
              }
              this.$emit("swiperChange", color);
              if (this.$refs.swiperBox3.swiper) {
              }
            }
          }
        }
      }
    };
  },
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style lang="less" scoped>
// #swiper{
//   margin-top: -1px;
// }
</style>
<style lang="less">
#swiper {
  .swiperBox2 {
    position: relative;
    .swiper-container {
      /*padding-bottom: 0.4rem;*/
      .swiper-pagination {
        bottom: 0.1rem;
        width: 100%;
        .swiper-pagination-bullet {
          width: 0.08rem;
          height: 0.08rem;
          border-radius: 0.04rem;
          opacity: 1;
          margin: 0 0.1rem;
          background: #fff;
          border: none;
        }
        .swiper-pagination-bullet-active {
          background: #fff;
          width: 0.26rem;
          height: 0.08rem;
          border-radius: 0.04rem;
        }
      }
    }
  }
  .swiperBox3 {
    .swiper-pagination-bullet-active {
      background: #000 !important;
    }
  }
}
</style>
<style  lang="less" scoped>
#swiper {
  overflow-x: hidden;
  .swiperBox {
    position: relative;
    .swiper-slide {
      img {
        width: 100%;
        float: left;
      }
    }
    .vux-slider {
      .vux-indicator {
        .vux-icon-dot {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.4);
        }
        .active {
          background: rgba(255, 255, 255, 1) !important;
        }
      }
    }
  }
  .swiperBox2 {
    position: relative;
    .swiper-slide {
      img {
        width: 7.1rem;
        margin: 0 0.2rem;
        border-radius: 0.1rem;
      }
    }
  }
  .swiperBox1 {
    position: relative;
    width: 9.5rem;
    transform: translateX(-1rem);
    /*height: 2.2rem;*/
    .swiper {
      /*width: 9.5rem;*/
      /*position: absolute;*/
      /*left: -1rem;*/
      /*top: 0;*/
    }
    /*.coverL{*/
    /*position: absolute;*/
    /*left: 0;*/
    /*width: 1.2rem;*/
    /*background: #fff;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*z-index: 1000;*/
    /*}*/
    /*.coverR{*/
    /*position: absolute;*/
    /*right: 0;*/
    /*width: 1.2rem;*/
    /*background: #fff;*/
    /*top: 0;*/
    /*bottom: 0;*/
    /*z-index: 1000;*/
    /*}*/
    /*width: 6rem;*/
    /*margin: 0 auto;*/
  }
  .swiperBox3 {
    padding: 0.2rem 0;
    .swiper-slide {
      box-shadow: 0px 2px 4px 0px rgba(236, 236, 236, 1);
      border-radius: 10px;
      overflow: hidden;
      height: auto;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination-bullet-active {
      background: #f0f !important;
    }
  }
}
</style>


