<template>
    <div class="EditBlank" @click="emit" :style="{height: data.height +'px',backgroundColor: data.bgColor}">
    </div>
</template>

<script>
export default {
  name: 'EditBlank',
  components: {},
  props: ['data',"id"],
  data () {
    return {}
  },
  methods: {
     emit(){
      this.$emit('show',this.id);
    }
  }
}
</script>

<style scoped lang="less">
.EditBlank{
  overflow: hidden;
  width: 100%;
}
</style>
