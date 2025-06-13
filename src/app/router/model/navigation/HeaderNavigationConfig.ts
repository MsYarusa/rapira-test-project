import type { HeaderLinkConfig } from '@/widgets/layout/header'

import { BlogPageConfig } from '@/pages/blog'
import { HomePageConfig } from '@/pages/home'

export const HEADER_NAVIGATION_CONFIG: HeaderLinkConfig[] = [
  {
    to: HomePageConfig.HOME_PAGE_PATH,
    label: HomePageConfig.HOME_PAGE_NAME,
  },
  {
    to: BlogPageConfig.BLOG_PAGE_PATH,
    label: BlogPageConfig.BLOG_PAGE_NAME,
  },
]
