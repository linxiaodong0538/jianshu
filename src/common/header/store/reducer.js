import {fromJS} from 'immutable'; 
const defaultState = fromJS({
    focused: false,
    list:[],
    mouseIn:false,
    pageNum:0,
    totalPage:1
})


export default (state = defaultState, action) => {
    if (action.type === 'search_focus') {
        return  state.set('focused', true)
        
    }
    if (action.type === 'search_blur') {
        return  state.set('focused', false)
    }
    if(action.type === 'change_list'){
      return state.set('list',action.data).set('totalPage',action.totalPage)
    }
    if(action.type === 'mouse_enter'){
        return state.set('mouseIn',true)
      }
    if(action.type === 'mouse_leave'){
        return state.set('mouseIn',false)
      } 
    if(action.type === 'change_page'){
      return state.set('pageNum',action.pageNum)
    }
 
    return state
}