
import {fromJS} from 'immutable'; 
import axios from 'axios'
export const searchFocus = ()=>({
    type:'search_focus'
})

export const searchBlur = ()=>({
    type:'search_blur'
})

export const mouseEnter = ()=>({
  type:'mouse_enter'
})

export const mouseLeave = ()=>({
  type:'mouse_leave'
})

export const changePage = (pageNum)=>{
  // console.log(pageNum)
  return {  type:'change_page',
  pageNum}
}


const changeList = (data)=>{
  // console.log(Math.ceil(data.length / 10) )
  return {
    type:'change_list',
    data:fromJS(data),
    totalPage:Math.ceil(data.length / 10) 
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
