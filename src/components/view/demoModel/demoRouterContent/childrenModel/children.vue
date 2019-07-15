<template>
  <div>
    {{propsData}}<br><br>
    {{parent}}<br><br>
    <el-button type="primary" @click="primaryParent">子组件调用父组件方法</el-button>
  </div>
</template>

<script>
export default {
  props: ['propsData'],
  data () {
    return {
      parent: ''
    }
  },
  methods: {
    // 父组件调用子组件方法
    parentChildFun (val) {
      this.parent = '父组件调用子组件方法传值' + Number(val)
    },
    // 子组件调用父组件方法
    primaryParent () {
      const data = {
        dataName: '这个是子组件传过的名称',
        dateType: 1
      }
      this.$emit('primaryParentFun', data)
    }
  }
}
</script>

<style lang="scss" scoped>
@import './children.scss'
</style>
