export interface Poster {
  name: string
  "poster-image": string
}

export interface PosterItems {
  content: Poster[]
}

export interface Page {
  title: string
  "total-content-items": string
  "page-num-requested": string
  "page-size-requested": string
  "page-size-returned": string
  "content-items": PosterItems
}

export interface PageData {
  page: Page
}

export interface PostersState {
  categoryTitle: string
  totalContentItems: number
  requestedPageNumber: number
  requestedPageSize: number
  returnedPageSize: number
  posters: Poster[]
  hasMorePages: boolean
  isLoading: boolean
  error: string | null
}
