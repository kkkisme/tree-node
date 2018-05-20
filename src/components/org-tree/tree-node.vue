<template>
  <div class="tree-node">
    <div class="tree-node-label">
      <div class="tree-node-label-inner">
        {{data.name}}
      </div>
    </div>
    <div class="tree-node-children" v-if="data.children">
      <tree-node v-for="item in data.children" v-bind:key="item.id" :data="item"></tree-node>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tree-node',
    props: {
      data: Object
    }
  }
</script>

<style lang="stylus" scoped>
  .tree-node
    position relative
    padding-left 10px
    padding-right 10px
    padding-top 20px
    &::before
    &::after
      content ""
      position absolute
      top 0
      left 0
      width 50%
      height 19px
      ^[0]:not(:first-child)::before
      ^[0]:not(:last-child)::after
        border-top 1px solid #ddd
    &::after
      left 50%
      border-left 1px solid #ddd
    &:not(:only-child)
      float left

  .tree-node-children
    position relative
    padding-top 20px
    &::before
      content: "";
      position: absolute;
      top: 0
      left: 50%
      width: 0
      height: 20px
      border-left: 1px solid #ddd
    &::after
      content ''
      display table
      clear: both

  .tree-node-label
    display inline-block
    .tree-node-label-inner
      padding: 10px 15px
      border-radius: 3px
      box-shadow: 0 1px 5px rgba(0, 0, 0, .15)
</style>
