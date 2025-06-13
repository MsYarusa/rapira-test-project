import { watch } from 'vue'
import {
  useI18n,
  type Composer,
  type LocaleMessages,
  type VueMessageType,
} from 'vue-i18n'

interface UseI18nModuleParams {
  messagesObject: { [key: string]: LocaleMessages<VueMessageType> }
}
/**
 * Данная функция инкапсулирует подключение файлов локали i18n внутри модуля.
 *
 * -- Функция подключает файлы локали из локального scope, гарантируя инкапсуляцию локалей внутри модуля
 * -- Локальная локаль синхронизирована с глобальной локалью
 *
 * @param {{ [key: string]: LocaleMessages<VueMessageType> }} - В качестве параметра принимается объект типа {ru, en, ...} предоставляющий подключаемые файлы локали.
 * @returns {Composer} - Функция возвращает объект типа Composer аналогичный возращаемому значению функции useI18n
 */

export function useI18nModule({
  messagesObject,
}: UseI18nModuleParams): Composer {
  const localI18n = useI18n({
    messages: messagesObject,
    useScope: 'local',
  })

  const { locale: globalLocale } = useI18n()

  watch(
    globalLocale,
    (newLocale) => {
      localI18n.locale.value = newLocale
    },
    { immediate: true },
  )

  return localI18n
}
