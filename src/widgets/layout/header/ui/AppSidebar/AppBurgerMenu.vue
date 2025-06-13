<template>
  <button ref="burgerButton" class="cursor-pointer py-0" @click="emit('click')">
    <BurgerMenuActiveIcon v-if="active" />
    <BurgerMenuInactiveIcon v-else />
  </button>
</template>

<script setup lang="ts">
import {
  BurgerMenuInactiveIcon,
  BurgerMenuActiveIcon,
} from '@/shared/ui/assets/icons'

interface BurgerMenuProps {
  active: boolean
}

defineProps<BurgerMenuProps>()

interface BurgerMenuEmits {
  (event: 'click'): void
}

const emit = defineEmits<BurgerMenuEmits>()
</script>
