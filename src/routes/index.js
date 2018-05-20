import Vue from 'vue'
import VueRouter from 'vue-router'
import OrgTree from '../components/org-tree/org-tree'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: OrgTree
    }
  ]
})

export default router
