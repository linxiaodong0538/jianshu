import React from 'react'
import {TopicWrapper,TopicItem} from '../style'
import { connect } from 'react-redux';

class Topic extends React.Component {
    render(){
        return(
            <TopicWrapper>
                {this.props.topicList.map((i,index)=>{
                    return (
                        <TopicItem key={index}>
                        <img src={i.get('img')}/>
                        {i.get('title')}
                    </TopicItem>
                    )
                })}

            </TopicWrapper>
        )
    }
}


const mapStateToProps = (state /*, ownProps*/) => {
    // console.log(state)
    return {
        topicList:state.getIn(['homeReducer','topicList']),

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Topic)
