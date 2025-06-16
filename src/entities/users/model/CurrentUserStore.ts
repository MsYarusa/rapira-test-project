import { defineStore } from 'pinia'
import { ref } from 'vue'

import type { User } from './User'
import { mockUser } from '../config/mockUser'

const STORE_NAME = 'users'

export const useCurrentUserStore = defineStore(STORE_NAME, () => {
  const user = ref<User>(mockUser)

  return {
    user,
  }
})
