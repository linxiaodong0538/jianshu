import React from 'react'
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'



class Write extends React.PureComponent {
    render() {
        if (this.props.login1) {
            return (
              <div>写文章</div>
            )
        }else{
            return <Redirect to='/login'/>
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



export default connect(
    mapStateToProps,
    null
)(Write)

