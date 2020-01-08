
import {
  GETUSER,
  HEADIMGURL,
  NEWSCOUNT
} from './mutation-types'

export default {
  [GETUSER](state, userlist ) {
    state.roleData = userlist
    localStorage.setItem(`roleData`, JSON.stringify(userlist))
  },
  [NEWSCOUNT](state, newsCount ) {
    state.newsCount = newsCount
  },
  [HEADIMGURL](state, headImgUrl ) {
    state.headImgUrl = headImgUrl.data
  }
}
