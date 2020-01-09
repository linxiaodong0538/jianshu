
import {fromJS} from 'immutable'; 
import axios from 'axios'

export const login = (accout,password)=>{
  return (dispatch)=>{
      axios.get('/api/login.json?accout='+ accout +'&password='+ password +'').then(res=>{
        console.log(res)
          dispatch({
            type:'login',
            code:res.data.code
          })
        
      })
  }
}