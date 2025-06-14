import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { Comment } from './Comment'

const STORE_NAME = 'comments'

/* 
    Возможно для оптимизации стоит использовать для хранения комментариев словарь, 
    где ключами выступают id соответствующих постов.
    В текущей реализации при каждом октрытие модального окна мы будем слать запрос на получение комментариев.

    Но данных подход также имеет и плюс - комментарии будут чаще обновляться для пользователя.
*/

export const useCommentsStore = defineStore(STORE_NAME, () => {
  const comments = ref<Comment[]>([])

  const setComments = (newComments: Comment[]): void => {
    comments.value = newComments
  }

  const addComment = (newComment: Comment): void => {
    comments.value.push(newComment)
  }

  return {
    comments,
    setComments,
    addComment,
  }
})
