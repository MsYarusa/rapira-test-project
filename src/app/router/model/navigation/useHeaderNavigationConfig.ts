import { computed, type Ref } from 'vue'
import { useI18n } from 'vue-i18n'

import type { HeaderLinkConfig } from '@/widgets/layout/header'

import { BLOG_PAGE_PATH, HOME_PAGE_PATH } from '../../config'

interface UseHeaderNavigationConfigReturn {
  headerNavigationConfig: Ref<HeaderLinkConfig[]>
}

export function useHeaderNavigationConfig(): UseHeaderNavigationConfigReturn {
  const { t } = useI18n()

  const headerNavigationConfig = computed<HeaderLinkConfig[]>(() => {
    return [
      {
        to: HOME_PAGE_PATH,
        label: t('navigation.home_page_label'),
      },
      {
        to: BLOG_PAGE_PATH,
        label: t('navigation.blog_page_label'),
      },
    ]
  })

  return { headerNavigationConfig }
}
