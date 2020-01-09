import { fromJS } from 'immutable';
const defaultState = fromJS({
  showScroll:false,
  topicList: [
    {
      id: 1,
      title: '社会热点',
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565682946&di=5f954640c07b3c06f26ce2b542f10c9f&imgtype=jpg&er=1&src=http%3A%2F%2Fpic25.nipic.com%2F20121201%2F11501528_124108168130_2.jp'
    },
    {
      id: 2,
      title: '社会热点',
      img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565682946&di=5f954640c07b3c06f26ce2b542f10c9f&imgtype=jpg&er=1&src=http%3A%2F%2Fpic25.nipic.com%2F20121201%2F11501528_124108168130_2.jp'
    }
  ],
  topicPage:1,
  articleList:[{
    id:1,
    title:'关于女孩子的10条情感建议',
    desc:'1.记住：口红可以自己努力挣钱买，没必要指望别人送。 不要为了一点小便宜，就和别人暧昧不清。如果有男人给你买东西，只是为了睡你，那么请叫他滚。 ..',
    img:'https://upload-images.jianshu.io/upload_images/2713003-5c2deb78c9a5caa6.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp'
  },
  {
    id:2,
    title:'关于女孩子的10条情感建议',
    desc:'1.记住：口红可以自己努力挣钱买，没必要指望别人送。 不要为了一点小便宜，就和别人暧昧不清。如果有男人给你买东西，只是为了睡你，那么请叫他滚。 ..',
    img:'https://upload-images.jianshu.io/upload_images/2713003-5c2deb78c9a5caa6.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp'
  }]
})


export default (state = defaultState, action) => {

  if(action.type === 'change_home'){
    console.log(action.page)
    return state.set('topicList',state.get('topicList').concat(action.topicList)).set('topicPage',action.page)
  }
  if(action.type === 'toggle_show'){
    return state.set('showScroll',action.show)
  }
  return state
}