import React from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwith, SearchInfoItem } from '../header/style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';
import { actionCreators } from './store'
console.log(actionCreators)




class Header extends React.Component{
    getListArea(show){
        if (show) {
            return <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                <SearchInfoSwith>换一换</SearchInfoSwith>
                </SearchInfoTitle>
                <div className="searchList">
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </div>
            </SearchInfo>
        } else {
            return null;
        }
    
    }

    render(){
        return(
            <HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <i className="iconfont">&#xe6a3;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition timeout={400} in={this.props.focused} classNames="slide">
                        <NavSearch className={this.props.focused ? 'focused' : ''}
                            onFocus={this.props.handleInputFocus}
                            onBlur={this.props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={this.props.focused ? 'focused iconfont' : 'iconfont'}>&#xe6a3;</i>
                    {this.getListArea(this.props.focused)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="reg">注册{console.log(this)}</Button>
                <Button className="writting">写文章</Button>
            </Addition>
        </HeaderWrapper>
        )
    }
}
// const Header = (this.props) => {
//     return (

//     )
// }


const mapStateToProps = (state /*, ownProps*/) => {
    console.log(state)
    return {
        focused: state.get('headerReducer').get('focused')
        // focused: state.getIn(['headerReducer'],['focused'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = actionCreators.searchFocus()
            dispatch(action)
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
