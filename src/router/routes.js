const Msite = () => import('../pages/Msite')
const Category = () => import('../pages/Category')
const ShopCard = () => import('../pages/ShopCard')
const User = () => import('../pages/User')
const Buy = () => import('../pages/Buy')
const Login = () => import('../pages/Login')
const SlideRight = () => import('../pages/Category/SlideRight')
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
    children: [
      {
        path: '/category',
        name: 'slideRight',
        component: SlideRight
      }
    ]
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
  }
]