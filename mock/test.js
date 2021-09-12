
const list = [
  {
    nickname: 'Allen',
    phone: '43423432424',
    name: '羽',
    subject: '数学',
    job: '教授',
    year: 20,
    upDataTime: '2021-9-8'
  },
  {
    nickname: 'Allen1',
    phone: '1234567890',
    name: '一',
    subject: '数学',
    job: '老师',
    year: 2,
    upDataTime: '2021-9-12'
  },
  {
    nickname: 'Allen2',
    phone: '12345678444',
    name: '小七',
    subject: '数学',
    job: '助教',
    year: 4,
    upDataTime: '2020-11-11'
  },
  {
    nickname: 'Allen3',
    phone: '1234567832',
    name: '小七',
    subject: 'web',
    job: '销售',
    year: 2,
    upDataTime: '2020-11-11'
  }
]

module.exports = [
  {
    url: '/vue-admin-template/test/list',
    type: 'get',
    response: config => {
      return {
        code: 20000,
        data: {
          total: list.length,
          items: list
        }
      }
    }
  }
]
