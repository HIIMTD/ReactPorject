import React, { PureComponent } from 'react';
import { LoginWrapper,LoginBox,Input,Button } from './style';

class Detail extends PureComponent {
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                <Input placeholder='username' />
                <Input placeholder='password' />
                <Button>login</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}

export default Detail;
