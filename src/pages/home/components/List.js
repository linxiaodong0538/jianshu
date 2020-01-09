import React from 'react'
import { ListItem, ListInfo, LoadMore } from '../style'
import { connect } from 'react-redux';
import { actionCreators } from '../store'
import {Link} from 'react-router-dom'

class List extends React.Component {
    render() {
        const { list, getMoreList, page } = this.props
        console.log(list)
        return (
            <div>
                {
                    list.map((i) => {
                        return (
                            <Link to={'/detail/' + i.get('id')} key={i.get('id')}>
                            <ListItem>
                                <img className="pic" src={i.get('img')} />
                                <ListInfo>
                                    <h3 className="title">{i.get('title')}</h3>
                                    <p className="desc">{i.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        list: state.get('homeReducer').get('articleList'),
        page: state.getIn(['homeReducer', 'topicPage'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getMoreList(page) {
            dispatch(actionCreators.getMoreList(page))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List)
