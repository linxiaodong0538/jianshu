import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
    width:100%;
    height:56px;
    border-bottom:1px solid #f0f0f0;
    position:relative;
    
` 
export const Logo = styled.a.attrs({
    herf:'/'
})`
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
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width:160px;
    height:38px;
    border:none;
    border-radius:19px;
    margin-top:9px;
    background:#eee;
    padding:0 20px;
    
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
