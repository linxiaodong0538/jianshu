
import {fromJS} from 'immutable'; 
import axios from 'axios'

export const getMoreList =(page)=>{
    return(dispatch)=>{
      axios.get('/api/homeList.json?page='+page+'').then(res=>{
          dispatch({
              type:'change_home',
              topicList: fromJS(res.data.topicList),
              page:page +1
          })
      })
    }
}