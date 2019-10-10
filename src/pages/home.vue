<template>
  <div class="index">
    <div class="indexBox">
      <div class="left">
        <div class="view">
          <div class="img" style="width:100%;height:45px;">
            <img src="../assets/img/phoneStatus.png" alt style="width:100%;height:45px;" />
          </div>
          <draggable element="div" v-model="content" :options="{animation:200}" @choose="show2($event)">
            <template v-for="item in content" >
              <component :key="item.index"  :is="item.name" v-if="item.name != 'edit-goods-list'" :data='item.params' @show="show" :id="item.id"></component>
            </template>
          </draggable>
        </div>
      </div>
      <div class="rigth">
        <div class="mark" :style="{marginTop:setInfoH-50+'px'}"></div>
        <div class="setInfo" :style="{marginTop:setInfoH-50+'px'}">
          <p>组件id:{{activeId}}</p>
          <span>属性设置:</span>
          <span>背景颜色</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
// import EditSlide from "../components/EditSlide";
import EditBlank from "../components/EditBlank";
import EditNav from "../components/EditNav";
import EditCube from "../components/EditCube";
// import EditGoodsList from "../components/EditGoodsList";
import EditSearch from "../components/EditSearch";
export default {
  name: "index",
  components: {
    draggable,
    // EditSlide,
    EditBlank,
    EditNav,
    EditCube,
    // EditGoodsList,
    EditSearch
  },
  data() {
    return {
      setInfoH:'',
      activeId:'',
      content: JSON.parse('[{\"id\":\"C1563521946645\",\"name\":\"edit-blank\",\"params\":{\"height\":\"100\",\"bgColor\":\"red\"}},{\"id\":\"C1563521946045\",\"name\":\"edit-blank\",\"params\":{\"height\":\"50\",\"bgColor\":\"blue\"}},{\"id\":\"C1563521946647\",\"name\":\"edit-search\",\"params\":{\"searchPlaceholder\":\"搜索商品\",\"icon\":\"http://172.16.1.10:8080/by/static/img/design/search-icon.png\"}},{\"id\":\"C1563417356629\",\"name\":\"edit-nav\",\"params\":{\"bgColor\":\"rgba(255,255,255,1)\",\"items\":{\"N0000000000001\":{\"img\":\"http://172.16.1.10:8080/by/static/img/design/nav_0.png\",\"text\":\"菜单\",\"color\":\"rgba(0,0,0,1)\",\"link\":null},\"N0000000000002\":{\"img\":\"http://172.16.1.10:8080/by/static/img/design/nav_1.png\",\"text\":\"菜单\",\"color\":\"rgba(0,0,0,1)\",\"link\":null},\"N0000000000003\":{\"img\":\"http://172.16.1.10:8080/by/static/img/design/nav_2.png\",\"text\":\"菜单\",\"color\":\"rgba(0,0,0,1)\",\"link\":null},\"N0000000000004\":{\"img\":\"http://172.16.1.10:8080/by/static/img/design/nav_3.png\",\"text\":\"菜单\",\"color\":\"rgba(0,0,0,1)\",\"link\":null},\"N0000000000005\":{\"img\":\"http://172.16.1.10:8080/by/static/img/design/nav_4.png\",\"text\":\"菜单\",\"color\":\"rgba(0,0,0,1)\",\"link\":null}}}}]'),
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
  },
  methods:{
    show(id){
      this.activeId=id;
    },
    show2(e){
      this.setInfoH = e.item.offsetTop;
      console.log(this.setInfoH);
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
      position: relative;
      .mark{
        position: absolute;
        top: 10px;
        left: -10px;
        width: 20px;
        height: 20px;
        background: #fff;
        z-index: 0;
        transform: rotate(45deg);
      }
      .setInfo{
        border-radius: 10px;
        width: 95%;
        height: auto;
        overflow: hidden;
        padding: 10px;
        position: absolute;
        background: #fff;
        z-index: 1;
      }
    }
  }
}
</style>

