
import {fromJS} from 'immutable';
import twitter from '../../../statics/twitter.png'
import youtube from '../../../statics/youtube.png'
import ironman from '../../../statics/ironman.png'

const defaultState = fromJS({
    topicList:[{
        id:1,
        title:'youtube',
        imgUrl:youtube
    },{
        id:2,
        title:'twitter',
        imgUrl:twitter
    }],
    articleList:[{
       id:1,
       title: "Ironman's DEATH",
       desc: "While Marvel protects the secrets of Avengers 4 with actual Tony Stark-level security (no joke, it has been rumoured that they have facial recognition on the doors of their offices), a new video theorises that Iron Man ‘will absolutely die’ in the upcoming Marvel movie.",
       imgUrl:ironman
    },{
        id:2,
        title: "Ironman's DEATH",
        desc: "While Marvel protects the secrets of Avengers 4 with actual Tony Stark-level security (no joke, it has been rumoured that they have facial recognition on the doors of their offices), a new video theorises that Iron Man ‘will absolutely die’ in the upcoming Marvel movie.",
        imgUrl:ironman
    }]
    
});

export default(state = defaultState, action)=>{
    switch(action.type){

        default:
            return state;

    }

}