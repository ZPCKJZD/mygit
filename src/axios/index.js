import Jsonp from 'jsonp'
import axios from 'axios'
import {Modal} from 'antd'
export default class Axios{
     static jsonp(options){
      return new Promise((res,rej)=>{
            Jsonp(options.url,{
                param:'callback'
            },function(err,response){
                  if(response.status==="success"){
                      res(response)
                  }else{
                      rej(response.message)
                  }
            })
        })
     }
     static ajax(options){
        let baseUrl="http://mock.studyinghome.com/mock/5e9ee1ef301a4f07a0c8aa87/"
        if(options.data.loading){
            let loading=document.getElementById("loading")
            loading.style.display="block"
        }
         return new Promise((resolve,reject)=>{
                 axios({
                     url:options.url,
                     method:options.method,
                     baseURL:baseUrl,
                     timeout:5000,
                     params:(options.data && options.data.params) || ''
                 }).then(res=>{
                    if(options.data.loading){
                        let loading=document.getElementById("loading")
                        loading.style.display="none"
                    }
                     if(res.status=='200'){
                         if(res.data.code===0){
                             resolve(res.data)
                         }else{
                             Modal.info({
                                 title:'提示',
                                 content:res.data.msg
                             })
                         }
                     }
                 })
         })
     }

}