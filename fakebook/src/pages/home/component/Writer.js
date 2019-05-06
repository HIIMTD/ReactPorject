import React,{Component} from 'react';
import {WriterWrapper,WriterItem} from '../style';
class Writer extends Component{
    render(){
        return (
            <WriterWrapper>
            <WriterItem>
            <p className = 'p'>Write your story here:</p>
            <textarea className='text' placeholder="What's on your mind?"></textarea>
            </WriterItem>
            </WriterWrapper>
        )
    }
}

export default Writer;