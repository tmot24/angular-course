export interface Profile {
  id: number,
  username: string,
  avatarUrl: string | null,
  subscribersAmount: number | null,
  firstName: string | null,
  lastName: string | null,
  isActive: boolean | null,
  stack: string[] | null,
  city: string | null,
  description: string | null
}

export interface Pageable<T> {
  items: T[],
  total: number,
  page: number,
  size: number,
  pages: number
}
