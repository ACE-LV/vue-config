/**
 通过mutation间接更新state的多个方法的对象
 */
import {
  GETUSER,
  HEADIMGURL,
  NEWSCOUNT
} from './mutation-types'
import https from '@/API'
export default {
  getUserInfo({ commit },data) {
    commit(GETUSER, { data })
  },
  editHeadImgUrl({ commit },data) {
    commit(HEADIMGURL, { data })
  },
  getNewsCount ({ commit },data) {
    if (data === 'zero') {
      commit(NEWSCOUNT, 0)
    } else {
      let ajaxData = {
        url:'/message/getCountMessage',
        data:{}
      }
      https(ajaxData).then(res=>{
        if(res.success){
          let newsCount = Number(res.data)
          commit(NEWSCOUNT, newsCount)
        }
      })
    }

  }
}
