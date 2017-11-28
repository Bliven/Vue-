import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Python from '@/components/python_course'
import Linux from "@/components/linux"
import py_detail from "@/components/python_detail"
import course_detail from "@/components/course_detail"
import login from "@/components/login"
import course_overview from "@/components/course_overview/overview"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
     {
      path: '/python',
      name: 'Python',
      component: Python
    },
     {
      path: '/python_detail/:id',
      name: 'python_detail',
      component: py_detail
    },
     {
      path: '/course_detail:id',
      name: 'course_detail',
      component:course_detail
    },{
      path: '/course_overview/:id',
      name: 'course_overview',
      component: course_overview
    },

     {
      path: '/linux',
      name: 'linux',
      component: Linux
    },
    {
      path: '/login',
      name: 'login',
      component:login
    },

  ]
})
