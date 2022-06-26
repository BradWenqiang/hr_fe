import axios from 'axios'
import {message} from 'antd'

/* 
    封装ajax
    axios库
    返回值是promise对象
 */
export default function ajax(url,data={},type='GET'){
    return new Promise((resolve,reject)=>{
        let promise
        if (type === 'GET'){
            promise =  axios.get(url,{
                params: data
            })
        }else{
            promise = axios.post(url,data)
        }

        //如果成功了，调用resolve（value）
        promise.then(response =>{
            resolve(response)
        }).catch(error=>{
            //如果失败了，不屌用reject(reason），而是提示异常信息
            message.error('请求出错了: ' + error.message)
        })
        
    })

}