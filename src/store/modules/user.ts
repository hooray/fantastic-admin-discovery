import useMenuStore from './menu'
import useWindowStore from './window'
import api from '@/api'

export const useUserStore = defineStore(
  // 唯一ID
  'user',
  () => {
    const account = ref(localStorage.getItem('account') ?? '')
    const token = ref(localStorage.getItem('token') ?? '')
    const failure_time = ref(localStorage.getItem('failure_time') ?? '')
    const permissions = ref<string[]>([])
    const isLogin = computed(() => {
      let retn = false
      if (token.value) {
        if (new Date().getTime() < parseInt(failure_time.value) * 1000) {
          retn = true
        }
      }
      return retn
    })

    async function login(data: {
      account: string
      password: string
    }) {
      // 通过 mock 进行登录
      const res = await api.post('member/login', data, {
        baseURL: '/mock/',
      })
      localStorage.setItem('account', res.data.account)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('failure_time', res.data.failure_time)
      account.value = res.data.account
      token.value = res.data.token
      failure_time.value = res.data.failure_time
    }
    async function logout() {
      const menuStore = useMenuStore()
      const windowStore = useWindowStore()
      localStorage.removeItem('account')
      localStorage.removeItem('token')
      localStorage.removeItem('failure_time')
      account.value = ''
      token.value = ''
      failure_time.value = ''
      menuStore.setActived(0)
      menuStore.removeMenus()
      windowStore.removeAll()
    }
    // 获取我的权限
    async function getPermissions() {
      // 通过 mock 获取权限
      const res = await api.get('member/permission', {
        baseURL: '/mock/',
        params: {
          account: account.value,
        },
      })
      permissions.value = res.data.permissions
      return permissions.value
    }
    async function editPassword(data: {
      password: string
      newpassword: string
    }) {
      await api.post('member/edit/password', {
        account: account.value,
        password: data.password,
        newpassword: data.newpassword,
      }, {
        baseURL: '/mock/',
      })
    }

    return {
      account,
      token,
      permissions,
      isLogin,
      login,
      logout,
      getPermissions,
      editPassword,
    }
  },
)

export default useUserStore
