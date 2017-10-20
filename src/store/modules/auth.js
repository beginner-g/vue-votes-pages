const state={
    isAuthenticated:false,
    username:''
}
const mutations={
  username(state,{text}){
    state.username=text
    state.isAuthenticated=true
    console.log(text)
  },
  logout(state){
    state.isAuthenticated=false
  }
}
export default {
  state,
  mutations
}
