import React, { Component } from 'react';
import { DetailWrapper, Header, Content } from './style';

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header> Newest trailer:Ironman dies in averger 4</Header>
                <Content>
                    <img src={require('../../statics/ironman2.jpg')} alt='' />
                    <p>Yes TONY STARK(iron man)DIES!! in Avengers :ENDGAME</p>
                    <p>Avengers endgame is actually a roller coaster ride for everyone from time travel (Time heist) to the death of our favourite characters.</p>
                    <p>Endgame starts off with Tony and nebula floating in the space, then captain marvel finding them and bringing them back to earth. Tony meets cap and he was angry as they lost. Captain marvel and other decide to go and get thanos but as tony was not in the condition he couldn’t join them. They find thanos on the planet alone and then kill him off(Thor goes for the head).</p>
                </Content>
            </DetailWrapper>
        )
    }
}

export default Detail;
