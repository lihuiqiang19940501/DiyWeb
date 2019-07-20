<template>
  <div id="nav" @click="emit" class="index_nav" :style="{background:data.bgColor}">
    <div class="allBox" v-if="data">
      <div class="allList"  v-for="(item,i) in data.items" :key="i">
        <img :src="item.img" alt />
        <p :style="{color:item.color}">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditNav",
  components: {},
  props: ["data","id"],
  data() {
    return {};
  },
  methods: {
    emit(){
      this.$emit('show',this.id);
    }
  }
};
</script>

<style scoped lang="less">
.index_nav {
  width: 100%;
  // padding: 0 0.2rem;
  box-sizing: border-box;
  .allBox {
    width: 100%;
    display: flex;
    text-align: center;
    box-sizing: border-box;
    .allList {
      flex: 0.25;
      box-sizing: border-box;
      height: 70px;
      text-align: center;
      // margin-bottom: 0.15rem;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      p {
        margin-top: -3px;
      }
    }
  }
}
</style>
