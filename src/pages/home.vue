<template>
  <div class="index">
    <div class="indexBox">
      <div class="left">
        <div class="view">
          <img src="../assets/img/phoneStatus.png" alt="" style="width:100%;height:auto;">

        </div>
      </div>
      <div class="rigth"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  }
}
</script>
<style lang="less" scoped>
.index {
  width: 100%;
  height: auto;
  background: #FFF;
  .indexBox {
    width: 1400px;
    min-height: 800px;
    margin: 0px auto;
    margin-top: 50px;
    background: #F7F7F7;
    display: flex;
    .left{
     flex: .35;
     .view{
       margin: 60px auto;
       width: 375px;
       min-height: 667px;
       border-radius: 8px;
       overflow: hidden;
       background: #FFF;
       box-shadow:0px 2px 4px 0px rgba(200,200,200,0.8);
     }
    }
    .rigth{
     flex: .65;
    }
  }
}
</style>

