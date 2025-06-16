<template>
  <div
    v-if="visible"
    class="modal__container fixed top-0 left-0 flex h-screen w-screen items-center justify-center"
  >
    <div
      class="modal z-20 m-[15px] max-h-[0.8] w-fit rounded-xl bg-white p-[15px]"
    >
      <div class="modal-header relative mb-[15px] pe-[20px]">
        <slot name="modal-header" />

        <button
          class="modal-close-btn group absolute top-0 right-0 cursor-pointer"
          @click="visible = false"
        >
          <XIcon
            class="size-[20px] fill-gray-400 group-has-hover:fill-gray-500"
          />
        </button>
      </div>

      <div class="hide-scrollbar overflow-y-auto">
        <slot name="modal-content" />
      </div>
    </div>
    <ModalBackground @click="handleBackgroundClick" />
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'

import ModalBackground from './ModalBackground.vue'
import { XIcon } from '../../assets/icons'

interface BaseModalProps {
  persistent?: boolean // Отвечает за то, может ли форма быть закрыта при клике вне области
}

const { persistent } = defineProps<BaseModalProps>()

interface BaseModalEmits {
  (event: 'close'): void
  (event: 'open'): void
}

const emit = defineEmits<BaseModalEmits>()

const visible = defineModel<boolean>('visible', { default: false })

const handleBackgroundClick = (): void => {
  if (persistent) {
    return
  }

  visible.value = false
}

const handleBodyOverflow = (): void => {
  if (visible.value) {
    document.body.classList.add('overflow-hidden')

    return
  }

  document.body.classList.remove('overflow-hidden')
}

watch(visible, handleBodyOverflow)

const handleEmits = (): void => {
  if (visible.value) {
    emit('open')

    return
  }

  emit('close')
}

watch(visible, handleEmits)
</script>
