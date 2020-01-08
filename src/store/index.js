/**
 * Created by Administrator on 2019\3\11 0011.
 */
/*
 vuex最核心的管理对象store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './user-modules'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  }
})
