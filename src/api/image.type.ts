export interface ImageData {
  avgColor: string
  name: string
  url: string
}

export type ImageResult = Record<string, ImageData>

export interface ImageDetail extends ImageData {
  type: string
}
