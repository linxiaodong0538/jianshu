import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
    width:100%;
    height:56px;
    border-bottom:1px solid #f0f0f0;
    position:relative;
    
`
export const Logo = styled.div`

    position:absolute;
    top:0;
    left:0;
    width:100px;
    height:56px;
    display:block;
    background:url(${logoPic});
    background-size: 100% 100%;
`
export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
`

export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    &.left{
        float:left;
    }
    &.right{
        float:right
    }
    &.active{
        color:#333;
    }
`
export const SearchWrapper = styled.div`
position:relative;
    float:left;
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        height:30px;
        border-radius:50%;
        line-height:30px;
        text-align: center
    }
    .focused.zoom{
        background:#777;
    }
`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
&.slide-enter{
    transition:all .4s ease-out;
}
&.slide-enter-active{
    width:200px;
}
&.slide-exit{
    transition:all .4s ease-out; 
}

    width:160px;
    height:38px;
    border:none;
    border-radius:19px;
    margin-top:9px;
    background:#eee;
    padding:0 20px;
    &.focused{
        width:200px;
    }
`

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button = styled.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    margin-right:20px;
    border:1px solid #ccc;
    padding:0 20px;
    &.reg {
        color:#ec6149;
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`

export const SearchInfo = styled.div`
background:#fff;
position:absolute;
left:0;
top:56px;
width:240px;
padding:0 20px;
box-shadow:0 0 8px rgba(0,0,0,.2)
`
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
`
export const SearchInfoSwith = styled.span`
    float:right;
    font-size:12px;
    .spin{
        display:block;
        float:left;
        padding-right:4px;
        transition: all .5s ease-in;
   
        transform-origin:center center;
    }
`

export const SearchInfoItem = styled.a`
    font-size:12px;
    line-height:20px;
    padding:0 5px;
    border: 1px solid #ddd;
    color:#969696;
    border-radius:2px;
    display:block;
    float:left;
    margin-right:10px;
    margin-bottom:15px;
`