import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import demoModel from '@/components/view/demoModel/index'
import demoRouterContent from '@/components/view/demoModel/demoRouterContent/index'
import videoPlayer from '@/components/view/demoModel/videoPlayer/videoPlayer'
import PDFplayer from '@/components/view/demoModel/PDFplayer/PDFplayer'
import tableDemo from '@/components/view/demoModel/tableDemo/tableDemo'
import specialTable from '@/components/view/demoModel/tableDemo/specialTable'
import fromSubmit from '@/components/view/demoModel/fromSubmit/fromSubmit'
import echartsMap from '@/components/view/demoModel/echartsMap/echartsMap'
import echartsCake from '@/components/view/demoModel/echartsCake/echartsCake'
import echartsChinaMap from '@/components/view/demoModel/echartsChinaMap/echartsChinaMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/demoModel',
      name: 'demoModel',
      component: demoModel,
      children: [
        {
          path: '/',
          name: 'demoRouterContent',
          component: demoRouterContent
        },
        {
          path: '/videoPlayer',
          name: 'videoPlayer',
          component: videoPlayer
        },
        {
          path: '/PDFplayer',
          name: 'PDFplayer',
          component: PDFplayer
        },
        {
          path: '/tableDemo',
          name: 'tableDemo',
          component: tableDemo
        },
        {
          path: '/specialTable',
          name: 'specialTable',
          component: specialTable
        },
        {
          path: '/fromSubmit',
          name: 'fromSubmit',
          component: fromSubmit
        },
        {
          path: '/echartsMap',
          name: 'echartsMap',
          component: echartsMap
        },
        {
          path: '/echartsCake',
          name: 'echartsCake',
          component: echartsCake
        },
        {
          path: '/echartsChinaMap',
          name: 'echartsChinaMap',
          component: echartsChinaMap
        }
      ]
    }
  ]
})
