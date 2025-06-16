import UserAvatar from './ui/userAvatar/UserAvatar.vue'
import UserAvatarPlaceholder from './ui/userAvatar/UserAvatarPlaceholder.vue'

export { UserAvatar, UserAvatarPlaceholder }
export type { User } from './model/User'
export { useCurrentUserStore } from './model/CurrentUserStore'
export { mapUserApiToUser } from './lib/mappers/apiMappers'
