import axios from 'axios'
import qs from 'qs'
const axiosInstance = axios.create({
	baseURL: '/api'
})

// 添加请求拦截器
axiosInstance.interceptors.request.use(config => {
	const { method, data } = config
	if (method.toUpperCase() === 'POST' && data instanceof Object) {
		config.data = qs.stringify(data)
	}
	return config
})
axiosInstance.interceptors.response.use(
  response => response.data
)
export default axiosInstance