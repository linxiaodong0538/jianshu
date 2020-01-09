import { fromJS } from 'immutable';
const defaultState = fromJS({
  login:true
})


export default (state = defaultState, action) => {
  if(action.type === 'login'  && action.code === 200){
    return state.set('login',true)
  }
  if(action.type === 'logout'){
    return state.set('login',action.login)
  }
  return state
}