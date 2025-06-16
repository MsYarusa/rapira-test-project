<template>
  <img
    class="aspect-13/8 rounded-xl object-cover object-center"
    :src="post.imageUrl"
    :alt="`image-${post.title}'`"
  />
</template>

<script setup lang="ts">
import type { Post } from '../../model/Post'

interface PostImageProps {
  post: Post
}

defineProps<PostImageProps>()
</script>
