
import {fromJS} from 'immutable'; 
import axios from 'axios'
export const searchFocus = ()=>({
    type:'search_focus'
})

export const searchBlur = ()=>({
    type:'search_blur'
})

const changeList = (data)=>{
  return {
    type:'change_list',
    data:fromJS(data)
  }
}

export const getList = ()=>{
  return (dispatch)=>{
    axios.get('/api/headerList.json').then((res)=>{

      const {data} = res
      dispatch(changeList(data))

    }).catch((err)=>{
      console.log(err)
    })
  }
}
