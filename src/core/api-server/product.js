/**
 * Created by Administrator on 2018/7/2.
 */
import  axios from 'axios';
export default {
    getProductList(url){
        return new Promise(( resolve,reject ) => {
            axios.post(url, {}).then( response => {
                    response.data.status === '1' ? resolve(response.data):reject(response.data)
                })
                .catch( (error) => {
                    throw new Error(error)
                });
        })
    }
}