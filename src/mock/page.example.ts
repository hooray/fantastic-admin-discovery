import Mock from 'mockjs'
import area from '@/components/PcasCascader/pcas-code.json'
const Random = Mock.Random

// 表单展示模式
const formModeList: any[] = []
for (let i = 0; i < 50; i++) {
  formModeList.push(Mock.mock({
    id: '@id',
    title: '@ctitle(10, 20)',
  }))
}
const formModeMock = [
  {
    url: '/mock/pages_example/form_mode/list',
    method: 'get',
    response: (option: any) => {
      const { title, from, limit } = option.query
      const list = formModeList.filter((item) => {
        return title ? item.title.includes(title) : true
      })
      const pageList = list.filter((item, index) => {
        return index >= ~~from && index < (~~from + ~~limit)
      })
      return {
        error: '',
        status: 1,
        data: {
          list: pageList,
          total: list.length,
        },
      }
    },
  },
  {
    url: '/mock/pages_example/form_mode/detail',
    method: 'get',
    response: (option: any) => {
      const info = formModeList.filter(item => item.id === option.query.id)
      return {
        error: '',
        status: 1,
        data: info[0],
      }
    },
  },
  {
    url: '/mock/pages_example/form_mode/create',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
  {
    url: '/mock/pages_example/form_mode/edit',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
  {
    url: '/mock/pages_example/form_mode/delete',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
]

// 管理员
const managerList: any[] = []
for (let i = 0; i < 50; i++) {
  managerList.push(Mock.mock({
    id: '@id',
    account: '@first',
    name: '@cname',
    sex: Random.natural(0, 2),
    mobile: /1\d{10}/,
    status: '@boolean',
  }))
}
const managerMock = [
  {
    url: '/mock/pages_example/manager/list',
    method: 'get',
    response: ({ query }: any) => {
      const { account, name, mobile, sex, from, limit } = query
      let list = managerList.filter((item) => {
        return account ? item.account.includes(account) : true
      })
      list = list.filter((item) => {
        return name ? item.name.includes(name) : true
      })
      list = list.filter((item) => {
        return mobile ? item.mobile === mobile : true
      })
      list = list.filter((item) => {
        return sex ? item.sex === sex : true
      })
      const pageList = list.filter((item, index) => {
        return index >= ~~from && index < (~~from + ~~limit)
      })
      return {
        error: '',
        status: 1,
        data: {
          list: pageList,
          total: list.length,
        },
      }
    },
  },
  {
    url: '/mock/pages_example/manager/detail',
    method: 'get',
    response: ({ query }: any) => {
      const info = managerList.filter(item => item.id === query.id)
      return {
        error: '',
        status: 1,
        data: info[0],
      }
    },
  },
  {
    url: '/mock/pages_example/manager/create',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
  {
    url: '/mock/pages_example/manager/edit',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
  {
    url: '/mock/pages_example/manager/delete',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
  {
    url: '/mock/pages_example/manager/password/reset',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
  {
    url: '/mock/pages_example/manager/change/status',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
  {
    url: '/mock/pages_example/manager/check',
    method: 'get',
    response: (option: any) => {
      const { key, value, id } = option.query
      let exist = false
      exist = managerList.some((item) => {
        let flag
        switch (key) {
          case 'account':
            if (item.account === value && (id ? id !== item.id : true)) {
              flag = true
            }
            break
          case 'mobile':
            if (item.mobile === value && (id ? id !== item.id : true)) {
              flag = true
            }
            break
        }
        return flag
      })
      return {
        error: '',
        status: 1,
        data: {
          exist,
        },
      }
    },
  },
]

// 部门&职位
const departmentjobList = [
  {
    id: 1,
    title: '技术部',
    jobList: [
      { id: 1, title: '前端开发' },
      { id: 2, title: '接口开发' },
      { id: 3, title: 'App开发' },
    ],
  },
  {
    id: 2,
    title: '设计部',
    jobList: [
      { id: 4, title: '网页设计' },
      { id: 5, title: '视觉设计' },
    ],
  },
  {
    id: 3,
    title: '运营部',
    jobList: [
      { id: 6, title: '用户运营' },
      { id: 7, title: '产品运营' },
      { id: 8, title: '内容运营' },
    ],
  },
]
const departmentjobMock = [
  {
    url: '/mock/pages_example/department/list',
    method: 'get',
    response: (option: any) => {
      const { title, from, limit } = option.query
      const list = departmentjobList.filter((item) => {
        return title ? item.title.includes(title) : true
      })
      const pageList = list.filter((item, index) => {
        return index >= ~~from && index < (~~from + ~~limit)
      })
      return {
        error: '',
        status: 1,
        data: {
          list: pageList,
          total: list.length,
        },
      }
    },
  },
  {
    url: '/mock/pages_example/department/detail',
    method: 'get',
    response: (option: any) => {
      const info = departmentjobList.filter(item => item.id === ~~option.query.id)
      return {
        error: '',
        status: 1,
        data: info[0],
      }
    },
  },
  {
    url: '/mock/pages_example/department/create',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
  {
    url: '/mock/pages_example/department/edit',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
  {
    url: '/mock/pages_example/department/delete',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
  {
    url: '/mock/pages_example/job/list',
    method: 'get',
    response: (option: any) => {
      const { department_id, title, from, limit } = option.query
      let jobList: any[] = []
      for (const i in departmentjobList) {
        if (departmentjobList[i].id === ~~department_id) {
          jobList = departmentjobList[i].jobList
        }
      }
      const list = jobList.filter((item) => {
        return title ? item.title.includes(title) : true
      })
      const pageList = list.filter((item, index) => {
        return index >= ~~from && index < (~~from + ~~limit)
      })
      return {
        error: '',
        status: 1,
        data: {
          list: pageList,
          total: list.length,
        },
      }
    },
  },
  {
    url: '/mock/pages_example/job/detail',
    method: 'get',
    response: (option: any) => {
      let jobList: any[] = []
      for (const i in departmentjobList) {
        if (departmentjobList[i].id === ~~option.query.department_id) {
          jobList = departmentjobList[i].jobList
        }
      }
      const info = jobList.filter(item => item.id === ~~option.query.id)
      return {
        error: '',
        status: 1,
        data: info[0],
      }
    },
  },
  {
    url: '/mock/pages_example/job/create',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
  {
    url: '/mock/pages_example/job/edit',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
  {
    url: '/mock/pages_example/job/delete',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
]

// 运费模版
const deliveryList: any[] = []
for (let i = 0; i < 50; i++) {
  const address = []
  const p_index = Random.natural(0, area.length - 1)
  address.push(area[p_index].name)
  const c_index = Random.natural(0, area[p_index].children.length - 1)
  address.push(area[p_index].children[c_index].name)
  const a_index = Random.natural(0, area[p_index].children[c_index].children.length - 1)
  address.push(area[p_index].children[c_index].children[a_index].name)
  deliveryList.push(Mock.mock({
    id: '@id',
    title: '@ctitle(5, 10)',
    address,
    method: Random.natural(1, 2),
    first_step: Random.natural(1, 5),
    first_price: Random.natural(1, 5),
    continued_step: Random.natural(5, 10),
    continued_price: Random.natural(5, 10),
    infos: [
      {
        list: ['43', '50'],
        first_step: Random.natural(1, 5),
        first_price: Random.natural(1, 5),
        continued_step: Random.natural(5, 10),
        continued_price: Random.natural(5, 10),
      },
    ],
    status: '@boolean',
  }))
}
const deliveryMock = [
  {
    url: '/mock/pages_example/delivery/list',
    method: 'get',
    response: (option: any) => {
      const { title, from, limit } = option.query
      const list = deliveryList.filter((item) => {
        return title ? item.title.includes(title) : true
      })
      const pageList = list.filter((item, index) => {
        return index >= ~~from && index < (~~from + ~~limit)
      })
      return {
        error: '',
        status: 1,
        data: {
          list: pageList,
          total: list.length,
        },
      }
    },
  },
  {
    url: '/mock/pages_example/delivery/detail',
    method: 'get',
    response: (option: any) => {
      const info = deliveryList.filter(item => item.id === option.query.id)
      return {
        error: '',
        status: 1,
        data: info[0],
      }
    },
  },
  {
    url: '/mock/pages_example/delivery/create',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
  {
    url: '/mock/pages_example/delivery/edit',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
  {
    url: '/mock/pages_example/delivery/delete',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
  {
    url: '/mock/pages_example/delivery/change/status',
    method: 'post',
    response: {
      error: '',
      status: 1,
      data: {
        isSuccess: true,
      },
    },
  },
]

export default [
  ...formModeMock,
  ...managerMock,
  ...departmentjobMock,
  ...deliveryMock,
]
