<template>
  <div
    class="user-avatar size-(--avatar-size) overflow-hidden rounded-full bg-gray-300"
  >
    <img
      v-if="user.avatarUrl"
      :src="user.avatarUrl"
      :alt="`avatar-${(user.lastName, user.firstName)}`"
      class="size-(--avatar-size)"
    />

    <UserIcon
      v-else
      class="size-(--avatar-size) fill-gray-400"
    />
  </div>
</template>

<script setup lang="ts">
import { UserIcon } from '@/shared/ui/assets/icons'

import type { User } from '../../model/User'

interface UserAvatarProps {
  user: User
}

defineProps<UserAvatarProps>()
</script>

<style scoped>
@import './UserAvatar.css';
</style>
