<template>
  <form
    class="p-1"
    @submit.prevent
  >
    <AddCommentTextarea
      v-model="content"
      :max-length="maxLength"
      :invalid="invalid"
    />
    <div class="flex w-full items-center justify-end gap-[10px]">
      <button
        type="reset"
        class="add-comment-form-btn reset"
        @click="emit('cancel')"
      >
        {{ t('common.cancel') }}
      </button>

      <button
        type="submit"
        class="add-comment-form-btn submit"
        :disabled="invalid || content.length === 0"
      >
        {{ t('common.publish') }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import AddCommentTextarea from './AddCommentTextarea.vue'
import { DEFAULT_MAX_LENGTH } from '../config'

interface AddCommentFormProps {
  maxLength?: number
}

const { maxLength = DEFAULT_MAX_LENGTH } = defineProps<AddCommentFormProps>()

interface AddCommentFormEmits {
  (event: 'cancel'): void
}

const emit = defineEmits<AddCommentFormEmits>()

const content = ref<string>('')

const { t } = useI18n()

const invalid = computed(() => {
  return content.value.length > maxLength
})
</script>

<style scoped>
@import './AddCommet.css';
</style>
