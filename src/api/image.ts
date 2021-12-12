import { ImageResult } from './image.type'
import { request } from '~/utils/request'

const BG_MAIN = 'api/web/bgimg'

export function queryBgImg(): Promise<ImageResult> {
  return request.request<ImageResult>({
    url: BG_MAIN,
    method: 'GET',
  })
}
