import type { Category } from '@/entities/blog/categories/@x/posts'

import type { PostApi } from '../../api'
import type { Post } from '../../model/Post'

export function mapPostApiToPost(
  postApi: PostApi,
  categoriesList: Category[],
): Post {
  const categories = categoriesList.filter((category) => {
    return postApi.categories_ids.includes(category.id)
  })

  const post: Post = {
    id: postApi.id,
    title: postApi.title,
    description: postApi.description,
    content: postApi.content,
    date: new Date(postApi.date),
    readTime: postApi.read_time,
    imageUrl: postApi.links.image,
    commentsCount: postApi.comments_ids.length,
    categories,
  }

  return post
}
