import Mock from 'mockjs'
import data from './index.json'
import datas from './indexCateModule.json'
import slide from './cateNavDatas.json'
import slideRight from './cateLists.json'
Mock.mock('/api/category',{code:0,data: data.categoryHotSellModule.categoryList})
Mock.mock('/api/policyDescList',{code:0,data: data.policyDescList})
Mock.mock('/api/nav',{code:0,data: datas})
Mock.mock('/api/cateNav',{code:0,data: slide.categoryList})
Mock.mock('/api/slideright',{code:0,data: slideRight})
