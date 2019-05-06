import React,{PureComponent} from 'react';
import {RecommendWrapper,RecommendItem} from '../style'
import {connect} from 'react-redux';

class Recommend extends PureComponent{
    render(){
        const {list} = this.props;
        return (
            <RecommendWrapper>
                <p className = 'p'>Suggested friends:</p>
                {
                    list.map((item) => (
                            <RecommendItem key = {item.get('id')}>
                                <img className='pic' 
                                src={item.get('imgUrl')} alt=''
                                />
                            </RecommendItem>
                        )
                    )
                }
               
               

            </RecommendWrapper>
        )
    }
}

const mapState=(state)=>({
    list:state.getIn(['home','recommendList'])
})

export default connect(mapState,null)(Recommend);