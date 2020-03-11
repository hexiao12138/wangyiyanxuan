const Msite = () => import('../pages/Msite')
const Category = () => import('../pages/Category')
const ShopCard = () => import('../pages/ShopCard')
const User = () => import('../pages/User')
const Buy = () => import('../pages/Buy')
const Login = () => import('../pages/Login')
const Detail = () => import('../components/Detail')
const Search = () => import('../pages/Search')
export default [
  {
    path: '/msite',
    component: Msite,
    meta: { isShow: true }
  },
  {
    path: '/category',
    component: Category,
     meta: { isShow: true },
  },
  
  {
    path: '/user',
    component: User,
    meta: { isShow: true }
  },
  {
    path: '/buy',
    component: Buy,
    meta: { isShow: true }
  },
  {
    path: '/shopcard',
    component: ShopCard,
    meta: { isShow: true }
  },
  {
    path: '/',
    redirect: '/msite',
    meta: { isShow: true }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/detail',
    component: Detail
  },
  {
    path: '/search',
    component: Search
  }
]