<template>
    <div id="search" @click="emit" class="EditSearch">
      <div class="input_box" @click="jumpTo('/Search')">
        <img src="../assets/img/seach.png" alt />
        <p>搜索商品</p>
      </div>
    </div>
</template>

<script>
export default {
  name: "EditSearch",
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
.EditSearch {
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  .input_box {
    box-sizing: border-box;
    width: 100%;
    height: 33px;
    background: #fff;
    border-radius: 15px;
    display: flex;
    align-items: center;
    padding-left: 14px;
    color: #c7c7c7;
    img {
      width: 15px;
      margin-left: 10px;
      margin-right: 15px;
    }
  }
}
</style>
