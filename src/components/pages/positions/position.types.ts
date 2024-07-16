import type { Position, User } from 'cv-graphql'

export type PositionWithUsers = Position & {
  users: User[]
}
