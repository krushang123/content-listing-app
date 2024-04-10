export interface Poster {
  name: string
  posterImage: string
}

export interface PosterItems {
  content: Poster[]
}

export interface Page {
  title: string
  totalContentItems: number
  pageNumRequested: number
  pageSizeRequested: number
  pageSizeReturned: number
  contentItems: PosterItems
}

export interface PageData {
  page: Page
}

export interface PostersState {
  posters: Poster[]
  isLoading: boolean
  error: string | null
}
