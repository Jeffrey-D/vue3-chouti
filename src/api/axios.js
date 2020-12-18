import axios from 'axios'
import qs from 'qs'

//axios.default 设置表示的是全局配置

//设置基础域名的url，也表示绝对路径
axios.defaults.baseURL = "";
// `withCredentials` 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = true;
// `headers` 是即将被发送的自定义请求头
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded";
// `transformRequest` 允许在向服务器发送前，修改请求数据
// 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
// 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
axios.defaults.transformRequest = data => qs.stringify(data);


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 由于响应数据本身就是json数据，因此可以直接获取其json的data
    //否则会将其包装成json的响应格式
    return response.data;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default axios;
