/**
 * Created by Administrator on 2018/7/2.
 */

import productService from './product';

const service = {
    productService
}
export default {
    install(Vue) {
        Object.keys(service).forEach(key=>{
            Vue.prototype[`$${key}`] = service[key]
        })
    }
}
