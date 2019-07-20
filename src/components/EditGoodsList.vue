<template>
  <div class="EditGoodsList">
    <div class="list_header">
      <img src="../assets/img/home/index/list_header.png" alt class="topImg" />
    </div>
    <div class="list_count1" v-if="data.style=='0'">
      <ul>
        <li v-for="(item,index) in list" @click="handDetail(item)" :key="index">
          <img v-lazy="item.thumb" alt />
          <div class="shop_name">
            <table></table>
            <p>&nbsp;&nbsp;{{item.goodsName}}</p>
            <div class="label">
              <span v-for="i in item.goodsTag" :key="i.index">{{i}}</span>
            </div>
            <div class="price">
              <div class="price_main">
                ¥
                <span>{{item.spe_price}}</span>
              </div>
              <span>已售{{item.sales}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="list_count2" v-else-if="data.style=='1'">
      <ul>
        <li v-for="(item,index) in list" @click="handDetail(item)" :key="index">
          <img v-lazy="item.thumb" alt />
          <div class="shop_name">
            <table></table>
            <p>&nbsp;&nbsp;{{item.goodsName}}</p>
            <div class="label">
              <span v-for="i in item.goodsTag" :key="i.index">{{i}}</span>
            </div>
            <div class="price">
              <div class="price_main">
                ¥
                <span>{{item.spe_price}}</span>
              </div>
              <span>已售{{item.sales}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="list_count3" v-else-if="data.style=='2'">
      <ul>
        <li v-for="(item,index) in list" @click="handDetail(item)" :key="index">
          <div class="list_left3">
            <img v-lazy="item.thumb" alt />
          </div>
          <div class="list_right3">
            <p
              class="goodsName"
            >{{item.goodsName}}</p>
            <div class="label">
              <span v-for="i in item.goodsTag" :key="i.index">{{i}}</span>
            </div>
            <div class="price">
              <div class="price_main">
                ¥
                <span>{{item.spe_price}}</span>
              </div>
              <span>已售{{item.sales}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditGoodsList",
  props: ["list", "data"],
  mounted(){
    console.log(this.data.style);
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.EditGoodsList {
  // padding: 0 0.2rem;
  .list_header {
    height: 1rem;
    line-height: 1rem;
    background: #fff;
    text-align: center;
    box-sizing: border-box;
    border-radius: 9px 9px 0 0;
    img.topImg {
      width: 75%;
      height: 0.3rem;
      margin-top: 0.3rem;
    }
  }
  .list_count1 {
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background: #fff;
      li {
        width: 50%;
        margin-top: 0.1rem;
        background: #fff;
        padding-bottom: 0.25rem;
        border-radius: 3px;
        overflow: hidden;
        img {
          width: 3rem;
          height: 2.5rem;
          border-radius: 5px;
        }
        .shop_name {
          padding: 0 0.15rem;
          p {
            margin-top: 0.1rem;
            text-align: left;
            color: #333333;
            font-size: 0.28rem;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 0.4rem;
            width: 95%;
          }
          .label {
            width: 100%;
            height: 0.6rem;
            line-height: 0.6rem;
            display: flex;
            overflow: hidden;
            align-items: center;
            margin: 0.05rem 0;
            span {
              height: 0.3rem;
              // line-height: .3rem;
              border: 1px solid #fd8866;
              border-radius: 4px;
              padding: 0 0.1rem;
              color: #fd8866;
              margin-left: 0.1rem;
              display: flex;
              justify-content: center;
              flex-direction: column;
            }
          }
          .price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 0.1rem;
            .price_main {
              color: #fd8866;
              font-size: 0.25rem;
              padding-left: 0.15rem;
              span {
                color: #fd8866;
                font-size: 0.33rem;
                font-weight: 500;
              }
            }
            span {
              font-size: 0.24rem;
              color: #c6c6c6;
            }
          }
        }
      }
    }
  }
  .list_count2 {
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background: #fff;
      padding: 0.2rem;
      li {
        width: 100%;
        margin-top: 0.1rem;
        background: #fff;
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 0px 1px 4px 0px rgba(231, 231, 231, 1);
        border-radius: 10px;
        margin-bottom: 0.2rem;
        img {
          width: 100%;
          height: 3.9rem;
          border-radius: 5px 5px 0 0;
        }
        .shop_name {
          padding: 0 0.15rem;
          p {
            margin-top: 0.1rem;
            text-align: left;
            color: #333333;
            font-size: 0.3rem;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 0.4rem;
            width: 95%;
          }
          .fuTitle {
            color: #888;
            font-size: 0.24rem;
          }
          .label {
            width: 100%;
            line-height: 0.8rem;
            display: flex;
            overflow: hidden;
            align-items: center;
            margin: 0.2rem 0 0 0;
            span {
              height: 0.3rem;
              line-height: 0.3rem;
              border: 1px solid #ff6600;
              border-radius: 4px;
              padding: 0 0.1rem;
              color: #ff6600;
              margin-left: 0.1rem;
            }
          }
          .price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 0.1rem;
            padding-bottom: 0.2rem;
            .price_main {
              color: #ff6600;
              font-size: 0.25rem;
              padding-left: 0.15rem;
              span {
                color: #ff6600;
                font-size: 0.4rem;
                font-weight: 500;
              }
              .tip {
                font-size: 0.26rem;
                border-radius: 5px;
                padding: 0 0.15rem;
                border: 1px solid #ff6600;
              }
            }
            span {
              padding-top: 0.2rem;
              font-size: 0.24rem;
              color: #c6c6c6;
            }
          }
        }
      }
    }
  }
  .list_count3 {
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      background: #fff;
      padding: 0.2rem;
      li {
        border-bottom: 1px solid #f4f4f4;
        background: #fff;
        position: relative;
        // display: -webkit-box;
        // display: -ms-flexbox;
        display: flex;
        .list_left3 {
          width: 2.4rem;
          height: 2.3rem;
          display: inline-block;
          margin: 0.3rem 0.15rem 0.3rem 0;
          position: relative;
          img {
            border-radius: 5px;
            width: 100%;
            height: 100%;
          }
        }
        .list_right3 {
          width: 4.4rem;
          display: flex;
          height: 2.4rem;
          padding: 0.3rem 0;
          flex-direction: column;
          justify-content: center;
          .goodsName {
            overflow: hidden;
            display: -webkit-box;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2; //显示两行
            /* autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
            color: #333333;
            font-size: 0.3rem;
            text-align: left;
            height: 1rem;
          }
          .fuTitle {
            color: #888;
            font-size: 0.24rem;
          }
          .label {
            width: 100%;
            line-height: 0.8rem;
            display: flex;
            overflow: hidden;
            align-items: center;
            margin: 0.2rem 0 0 0;
            span {
              height: 0.3rem;
              line-height: 0.3rem;
              border: 1px solid #ff6600;
              border-radius: 4px;
              padding: 0 0.1rem;
              color: #ff6600;
              margin-left: 0.1rem;
            }
          }
          .price {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 0.1rem;
            padding-bottom: 0rem;
            .price_main {
              color: #ff6600;
              font-size: 0.25rem;
              padding-left: 0.15rem;
              span {
                color: #ff6600;
                font-size: 0.4rem;
                font-weight: 500;
              }
              .tip {
                font-size: 0.26rem;
                border-radius: 5px;
                padding: 0 0.15rem;
                border: 1px solid #ff6600;
              }
            }
            span {
              padding-top: 0.2rem;
              font-size: 0.24rem;
              color: #c6c6c6;
            }
          }
        }
      }
    }
  }
}
</style>

