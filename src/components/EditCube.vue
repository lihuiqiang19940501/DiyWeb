<template>
    <div class="EditCube" :style="{height: H + 'px'}">
      <img v-for="(item, key) of data.items" :key="key" :src="item.img" :style="{top: (item.top * size) + 'px', left: (item.left * size) + 'px',width: (item.width * size) + 'px', height: (item.height * size) + 'px'}" alt="" @click="jumpLink(item.link)">
    </div>
</template>

<script>
export default {
  name: 'EditCube',
  components: {},
  props: ['data'],
  data () {
    return {
      size: document.documentElement.clientWidth / 6,
      H: 0
    }
  },
  methods: {},
  created () {
    let h = 0
    for (let key in this.data.items) {
      let imgH = this.data.items[key].top + this.data.items[key].height
      if (h < imgH) {
        h = imgH
      }
    }
    this.H = h * this.size
  }
}
</script>

<style scoped lang="less">
.EditCube{
  margin-top: -1px;
  position: relative;
  width: 100%;
  img{
    position: absolute;
  }
}
</style>
