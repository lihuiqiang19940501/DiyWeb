<template>
  <div class="index">
    <div class="indexBox">
      <div class="left">
        <div class="view">
          <img src="../assets/img/phoneStatus.png" alt style="width:100%;height:auto;" />
          <draggable element="div" v-model="list" :options="options">
            <p v-for="item in list" :key="item.index" :style="{background:item.BgColor}">{{item.name}}</p>
          </draggable>
          <!-- 输出list数据 -->
          {{list}}
        </div>
      </div>
      <div class="rigth"></div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "index",
  components: {
    draggable
  },
  data() {
    return {
      options:{
        animation:200,
      },
       list:[
        {
          id: 1,
          name: 'a',
          BgColor: '#000',
        },
        {
          id: 2,
          name: 'b',
          BgColor: '#333',
        },
        {
          id: 3,
          name: 'c',
          BgColor: '#666',
        },
        {
          id: 4,
          name: 'd',
          BgColor: '#999',
        },
        {
          id: 5,
          name: 'e',
          BgColor: '#bbb',
        },
        {
          id: 6,
          name: 'f',
          BgColor: '#eee',
        },
      ],
    };
  },
  computed: {
    myList: {
      get() {
        return this.$store.state.myList;
      },
      set(value) {
        this.$store.commit("updateList", value);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  height: auto;
  background: #fff;
  .indexBox {
    width: 1400px;
    min-height: 800px;
    margin: 0px auto;
    margin-top: 50px;
    background: #f7f7f7;
    display: flex;
    .left {
      flex: 0.35;
      .view {
        margin: 60px auto;
        width: 375px;
        min-height: 667px;
        border-radius: 8px;
        overflow: hidden;
        background: #fff;
        box-shadow: 0px 2px 4px 0px rgba(200, 200, 200, 0.8);
        li{
          height: 50px;
          cursor:pointer;
        }
      }
    }
    .rigth {
      flex: 0.65;
    }
  }
}
</style>

