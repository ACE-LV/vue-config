/**
 状态对象
 */
export default {
  roleData: JSON.parse(localStorage.getItem(`userlist`))||[], // 职位待审核数据
  headImgUrl: '',
  newsCount: 0
}
