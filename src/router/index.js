import Vue from 'vue'
import Router from 'vue-router'
import homepage from './../components/home/homepage'
import aboutus from './../components/aboutus/aboutIntroduction'
import cases from './../components/case/caseIntroduction'
import contact from './../components/contact/contactus'
import fenghuo from './../components/management/fenghuo'
import fenjin from './../components/management/fenjin'
import managedetail from './../components/management/manageDetail'
import promanage from './../components/management/projectManagement'
import news from './../components/news/newsIntroduction'
import detail from './../components/producte/details'
import introduce from './../components/producte/productIntroduction'
import project from './../components/project/project'
import solution from './../components/solution/solutionIntroduction'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'homepage',component: homepage},
      {path: '/aboutus/aboutIntroduction',component: aboutus},
      {path: '/case/caseIntroduction',component: cases},
      {path: '/contact/contactus',component: contact},
      {path: '/management/fenghuo',component: fenghuo},
      {path: '/management/fenjin',component: fenjin},
      {path: '/management/manageDetail',component: managedetail},
      {path: '/management/projectManagement',component: promanage},
      {path: '/news/newsIntroduction',component: news},
      {path: '/producte/details/:types/:id',component: detail},
      {path: '/producte/productIntroduction',component: introduce},
      {path: '/project/project',component: project},
      {path: '/solution/solutionIntroduction',component: solution}
  ]
})
