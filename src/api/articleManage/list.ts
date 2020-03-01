import request from '@/utils/request'

/**
 * 获取文章列表
 */
export const getArticleList = (param: any) => {
  request({
    url: '/getArticleList',
    method: 'post',
    data: param
  })
}