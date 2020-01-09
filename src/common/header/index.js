import React from 'react'
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition,
    Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwith, SearchInfoItem
} from '../header/style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
// import {toJS} from 'immutable'; 
// console.log(actionCreators)




class Header extends React.Component {

    getListArea() {
        const { focused, list, pageNum, handleMouseEnter, mouseIn, handleMouseLeave, handleChangePage, totalPage } = this.props;
        const newList = list.toJS()
        let listPage = []
        // console.log(pageNum)
        for (let i = (pageNum * 10); i < (pageNum + 1) * 10; i++) {

            listPage.push(
                <SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>
            )
        }


        if (focused || mouseIn) {
            return <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <SearchInfoTitle>
                    热门搜索

                <SearchInfoSwith onClick={() => handleChangePage(pageNum, totalPage, this.spinIcon)}>
                        <i className="iconfont spin" ref={(icon) => { this.spinIcon = icon }}>&#xe600;</i>
                        换一换
                    </SearchInfoSwith>
                </SearchInfoTitle>
                <div>
                    {listPage}
                </div>
            </SearchInfo>
        } else {
            return null;
        }
    }

    render() {
        const { focused, handleInputFocus, handleInputBlur, list, login } = this.props;
        console.log(login)
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载</NavItem>

                    {login ? <NavItem className="right" onClick={this.props.logout}>退出</NavItem> : <Link to="./login"><NavItem className="right">登录</NavItem></Link>}
                    <NavItem className="right">
                        <i className="iconfont">&#xe6a3;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition timeout={400} in={focused} classNames="slide">
                            <NavSearch className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6a3;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Link to="/write">
                        <Button className="writting">写文章</Button>
                    </Link>
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
    // console.log(state)
    return {
        focused: state.get('headerReducer').get('focused'),
        list: state.getIn(['headerReducer', 'list']),
        pageNum: state.getIn(['headerReducer', 'pageNum']),
        mouseIn: state.getIn(['headerReducer', 'mouseIn']),
        totalPage: state.getIn(['headerReducer', 'totalPage']),
        login: state.getIn(['loginReducer', 'login']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            const action = actionCreators.searchFocus()
            console.log(list)
            list.size === 0 && dispatch(actionCreators.getList())
            dispatch(action)
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(pageNum, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            originAngle ? originAngle = parseInt(originAngle) : originAngle = 0
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
            if (pageNum < totalPage - 1) {
                // console.log(pageNum)
                dispatch(actionCreators.changePage(pageNum + 1))
            } else {
                dispatch(actionCreators.changePage(0))
            }
        },
        logout() {
            dispatch({ type: 'logout', login: false })
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
