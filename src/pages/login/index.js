import React from 'react'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store'



class Login extends React.PureComponent {
    render() {
        if (!this.props.login1) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) => { this.account = input }} />
                        <Input placeholder="密码" type="password" ref={(input) => { this.password = input }} />
                        <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/'/>
        }
    }


    componentDidMount() {

    }
}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        login1: state.getIn(['loginReducer', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login(accountEl, passwordEl) {
            dispatch(actionCreators.login(accountEl.value, passwordEl.value))
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

