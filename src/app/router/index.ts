import { createRouter, createWebHistory } from 'vue-router'

import { BlogPageConfig } from '@/pages/blog'
import { HomePageConfig } from '@/pages/home'

import { BASE_PAGE_NAME, BASE_PAGE_PATH } from './config'
import AppLayout from '../layout/AppLayout.vue'
import type { ConcreteComponent } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: BASE_PAGE_PATH,
      name: BASE_PAGE_NAME,
      redirect: HomePageConfig.HOME_PAGE_PATH,
      component: AppLayout,
      props: {},
      children: [
        {
          path: HomePageConfig.HOME_PAGE_PATH,
          name: HomePageConfig.HOME_PAGE_NAME,
          component: (): ConcreteComponent => {
            return import('@/pages/home').then((module) => {
              return module.HomeView
            })
          },
        },
        {
          path: BlogPageConfig.BLOG_PAGE_PATH,
          name: BlogPageConfig.BLOG_PAGE_NAME,
          component: (): ConcreteComponent => {
            return import('@/pages/blog').then((module) => {
              return module.BlogView
            })
          },
        },
      ],
    },
  ],
})

export default router
