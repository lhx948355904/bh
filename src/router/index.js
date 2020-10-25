import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home
  },
  {
    path:"/my",
    name:"my",
    component:()=>import("@/views/my")
  },
  {
    path:"/searchFault",
    name:"searchFault",
    component:()=>import("@/views/searchFault")
  },
  {
    path:"/knowledgeList",
    name:"knowledgeList",
    component:()=>import("@/views/knowledgeList")
  },
  {
    path:"/console",
    name:"console",
    component:()=>import("@/views/console")
  },
  {
    path:"/browse",
    name:"browse",
    component:()=>import("@/views/browse")
  },
  {
    path:"/reportRepair",
    name:"reportRepair",
    component:()=>import("@/views/reportRepair")
  },
  {
    path:"/record",
    name:"record",
    component:()=>import("@/views/record")
  },
  {
    path:"/searchResult",
    name:"searchResult",
    component:()=>import("@/views/searchResult")
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
