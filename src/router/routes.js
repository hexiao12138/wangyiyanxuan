const Msite = () => import('../pages/Msite')
const Category = () => import('../pages/Category')
const ShopCard = () => import('../pages/ShopCard')
const User = () => import('../pages/User')
const Buy = () => import('../pages/Buy')
export default [
  {
    path: '/msite',
    component: Msite
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/buy',
    component: Buy
  },
  {
    path: '/shopcard',
    component: ShopCard
  },
  {
    path: '/',
    redirect: '/msite'
  }
]