import { createRouter, createWebHistory } from 'vue-router'

import {
  BASE_PAGE_NAME,
  BASE_PAGE_PATH,
  BLOG_PAGE_NAME,
  BLOG_PAGE_PATH,
  HOME_PAGE_NAME,
  HOME_PAGE_PATH,
} from './config'
import AppLayout from '../layout/AppLayout.vue'
import type { ConcreteComponent } from 'vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: BASE_PAGE_PATH,
      name: BASE_PAGE_NAME,
      redirect: HOME_PAGE_PATH,
      component: AppLayout,
      children: [
        {
          path: HOME_PAGE_PATH,
          name: HOME_PAGE_NAME,
          component: (): ConcreteComponent => {
            return import('@/pages/home').then((module) => {
              return module.HomeView
            })
          },
        },
        {
          path: BLOG_PAGE_PATH,
          name: BLOG_PAGE_NAME,
          component: (): ConcreteComponent => {
            return import('@/pages/blog').then((module) => {
              return module.BlogView
            })
          },
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: (): ConcreteComponent => {
        return import('@/pages/404').then((module) => {
          return module.NotFound
        })
      },
    },
  ],
})

export default router
