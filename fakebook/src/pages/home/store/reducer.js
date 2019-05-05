
import {fromJS} from 'immutable';
import twitter from '../../../statics/twitter.png'
import youtube from '../../../statics/youtube.png'

const defaultState = fromJS({
    topicList:[{
        id:1,
        title:'youtube',
        imgUrl:youtube
    },{
        id:2,
        title:'twitter',
        imgUrl:twitter
    }]
});

export default(state = defaultState, action)=>{
    switch(action.type){

        default:
            return state;

    }

}