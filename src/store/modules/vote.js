import axios from 'axios'
const state={
  all:[
    {
      "type": "addImg",
      "title": "宫保鸡丁",
      "id": 1
    },
    {
      "type": "addImg",
      "title": "鱼香肉丝",
      "id": 2
    },
    {
      "type": "addImg",
      "title": "酸辣土豆丝",
      "id": 3
    }
  ],
  votes:[
    {
      "name": "beginner",
      "optionId": 1,
      "id": 1
    },
    {
      "name": "beginner",
      "optionId": 1,
      "id": 2
    }
  ]
}
const mutations={
  addTitle(state,{topic ,title}){
    state.topic=topic
    state.all.push({title})
  },
  loadOptions(state,data){
    state.all=data.all
  },
  voteup(state,data){
    // console.log(vote);
    state.votes.push(data.vote)
  },
  loadVotes(state,voteres){
    state.votes=voteres
  },
  delete(state,id){
    console.log(id);
    state.votes=state.votes.filter(t=>t.id!==id.id)
  }
}
// const actions={
//   // addImg({commit},title){
//   //   axios.post('http://localhost:3008/options',title).then(
//   //     res=>{
//   //       commit('addTitle',title)
//   //     }
//   //   )
//   // },
//   loadOptions({commit}){
//     axios.get('http://localhost:3008/options').then(
//       res=>{
//         commit('loadOptions',{all:res.data})
//       }
//     )
//   },
//   voteup({commit},{vote}){
//     axios.post('http://localhost:3008/votes',vote).then(
//       res=>{
//         commit('voteup',res.data)
//       }
//     )
//   },
//   loadVotes({commit}){
//     axios.get('http://localhost:3008/votes').then(
//       res=>{
//         const voteres =res.data
//         commit('loadVotes',voteres)
//       }
//     )
//   },
//   delete({commit},{id}){
//     console.log(id);
//     axios.delete(`http://localhost:3008/votes/${id}`).then(
//       res=>{
//         // console.log(idres);
//         commit('delete',id)
//       }
//     )
//   }
// }
export default {
  state,
  mutations,
  // actions
}
