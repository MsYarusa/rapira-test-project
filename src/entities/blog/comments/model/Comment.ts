import type { User } from '@/entities/users/@x/blog/comments'

export interface Comment {
  id: number
  date: Date
  content: string
  user: User
}
