
import {fromJS} from 'immutable'; 
import axios from 'axios'




export const  getDetail =(id)=>{
    return (dispatch) =>{
        axios.get('/api/detail.json?id=' + id).then((res)=>{
            const {data} = res.data
            // console.log(data)
            dispatch({
                type:'detail',
                data,
            })
          }).catch((err)=>{
            console.log(err)
          })
    } 
}