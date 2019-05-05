
import {fromJS} from 'immutable';
import twitter from '../../../statics/twitter.png'
import youtube from '../../../statics/youtube.png'
import ins from '../../../statics/ins.png'
import line from '../../../statics/line.png'
import skype from '../../../statics/skype.png'
import trumble from '../../../statics/trumble.png'
import google from '../../../statics/google.png'
import linkin from '../../../statics/linkin.png'
import ironman from '../../../statics/ironman.png'
import avengers from '../../../statics/avengers.png'
import timeloop from '../../../statics/timeloop.png'

const defaultState = fromJS({
    topicList:[{
        id:1,
        title:'Youtube',
        imgUrl:youtube
    },{
        id:2,
        title:'Twitter',
        imgUrl:twitter
    },{
        id:3,
        title:'Ins',
        imgUrl:ins
    }
    ,{
        id:4,
        title:'Skype',
        imgUrl:skype
    }
    ,{
        id:5,
        title:'Trumble',
        imgUrl:trumble
    }
    ,{
        id:6,
        title:'Line',
        imgUrl:line
    },{
        id:7,
        title:'Google',
        imgUrl:google
    },{
        id:8,
        title:'Linkedin',
        imgUrl:linkin
    }],
    articleList:[{
       id:1,
       title: "Ironman's DEATH",
       desc: "While Marvel protects the secrets of Avengers 4 with actual Tony Stark-level security (no joke, it has been rumoured that they have facial recognition on the doors of their offices), a new video theorises that Iron Man ‘will absolutely die’ in the upcoming Marvel movie.",
       imgUrl:ironman
    },{
        id:2,
        title: "AVENGERS ENDGAME is now showing",
        desc: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
        imgUrl:avengers
    },{
        id:3,
        title: "Does time loop exist?",
        desc: "A time loop or temporal loop is a plot device in which periods of time are repeated and re-experienced by the characters, and there is often some hope of breaking out of the cycle of repetition...",
        imgUrl:timeloop
    }]
    
});

export default(state = defaultState, action)=>{
    switch(action.type){

        default:
            return state;

    }

}