import { fromJS } from 'immutable';
const defaultState = fromJS({
    title: '标题',
    content: ''
})


export default (state = defaultState, action) => {

    switch(action.type){
      
            case "detail":
                // console.log(action.data)
                return state.merge({
                    title:action.data.title,
                    content:action.data.content,
                })
        
        default:
            return state
    }
}


