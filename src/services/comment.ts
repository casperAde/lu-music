import service from './request'
import { BannerList, Response, SongList } from '@/pages/Recommend/types'

// export const getBannerRequest = () => service.get<{ banners: BannerList[] }>('/banner')

/**
 * @param {*} params
 */
// export const getHotList = (params: { limit: number }) =>
//   service.get<{ result: SongList[] }>('/personalized', {
//     params
//   })

export const getBannerRequest = () => {
  return service({
    url: '/banner'
  })
}

export const getHotList = (data: { limit: number }) => {
  return service({
    url: '/personalized',
    data
  })
}

export const getNewSong = () => {
  return service({
    url: '/personalized/newsong'
  })
}
