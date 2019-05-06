import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './component/Topic'
import Writer from './component/Writer'
import Recommend from './component/Recommend'
import List from './component/List'
import {BackTop} from './style'

class Home extends PureComponent {



    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-image' src={require('../../statics/Homeleft.png')} alt="" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                <BackTop onClick = {this.handleScrollTop}>GO TOP</BackTop>
            </HomeWrapper>
        )
    }
}



export default Home;
