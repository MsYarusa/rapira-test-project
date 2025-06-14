import type { User } from '@/entities/users/@x/blog/comments'

import type { CommentApi } from '../../api'
import type { Comment } from '../../model/Comment'

export function mapCommentApiToComment(
  commentApi: CommentApi,
  userList: User[],
): Comment | undefined {
  const commentAuthor = userList.find((user) => {
    return user.id === commentApi.user_id
  })

  if (!commentAuthor) {
    return
  }

  const comment: Comment = {
    id: commentApi.id,
    date: new Date(commentApi.date),
    content: commentApi.content,
    user: commentAuthor,
  }

  return comment
}
