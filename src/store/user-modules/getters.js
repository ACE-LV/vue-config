/*
 通过mutation间接更新state的多个方法的对象
 */
import {
    GETUSER
} from './getters-type'

export default {
    [GETUSER](state) {
        console.log(state)
    },
}