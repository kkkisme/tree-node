<template>
  <div class="org-tree">
    <tree-node :data="data">
    </tree-node>
  </div>
</template>

<script>
  import TreeNode from './tree-node'

  export default {
    name: 'org-tree',
    components: {
      TreeNode
    },
    data () {
      return {
        data: {
          name: '一级',
          children: [
            {
              name: '二级1',
              children: [
                {
                  name: '三级1'
                }
              ]
            },
            {
              name: '二级2',
              children: [{ name: '三级2' }, { name: '三级3' }]
            },
            {
              name: '二级3'
            },
            {
              name: '二级4'
            }
          ]
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .org-tree
    display inline-block
    text-align center
    > .tree-node::after
      border-left 0
</style>
