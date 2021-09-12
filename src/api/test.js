import request from '@/utils/request'

export function getTestList() {
  return request({
    url: '/vue-admin-template/test/list',
    method: 'get'
  })
}
