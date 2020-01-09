import styled from 'styled-components'
export const HomeWrapper = styled.div`
width:960px;
margin:0 auto;
overflow:hieedn;
`

export const HomeLeft  = styled.div`
width:625px;
margin-left:15px;
padding-top:30px;
float:left;
.banner-img{
    width:625px;
    height:240px;
}
`

export const HomeRight  = styled.div`
width:240px;
float:right;
`


export const TopicWrapper  = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`

export const TopicItem  = styled.div`
    float:left;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    padding-right:10px;
    margin-left:10px;
    margin-top:10px;
    img{
        float:left;
        width:32px;
        height:32px;
        padding-right:10px;
    }
`

export const ListItem = styled.div`
    overflow:hidden
    padding:20px 0;
    border-bottom:1px solid #cdcdcd;
    .pic{
        width:150px;
        height:100px;
        display:block;
        float:right;
        border-radius:10px;
    }

`

export const ListInfo = styled.div`
    width:450px;
    float:left;
    .title{
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:18px;
        font-size:13px;
    }
`

export const LoadMore = styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    text-align:center;
    background:#a5a5a5;
    border-radius:20px;
    color:#fff;
`

export const BackTop = styled.div`
position:fixed;
width:70px;
height:60px;
line-height:60px;
text-align:centet;
border:1px solid #ddd;
right:0;
bottom:30px;
`