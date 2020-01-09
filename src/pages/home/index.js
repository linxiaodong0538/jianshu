import React from 'react'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'



class Home extends React.Component {

    handleScrollTop() {
        window.scrollTo(0, 0)
    }
    render() {
       console.log(this.props.login1)
        if (this.props.login1) {
            return (

                <HomeWrapper>
                    <HomeLeft>
                        <img className="banner-img" src="http://upload.jianshu.io/admin_banners/web_images/4686/b205842c3dd6736c233b052411fe1211f164fcaf.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                        <Topic />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <Writer />
                    </HomeRight>
                    {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
                </HomeWrapper>
            )
        } else {
            return <Redirect to="/login"/>
        }

    }
    componentDidMount() {
        this.bindEvents()
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.changeScroll)
    }
}



const mapStateToProps = (state /*, ownProps*/) => {
    return {
        showScroll: state.getIn(['homeReducer', 'showScroll']),
        login1: state.getIn(['loginReducer', 'login'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeScroll(e) {
            if (document.documentElement.scrollTop > 400) {
                dispatch({
                    type: 'toggle_show',
                    show: true
                })
            } else {
                dispatch({
                    type: 'toggle_show',
                    show: false
                })
            }
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
