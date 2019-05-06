import React, { PureComponent } from 'react';
import { LoginWrapper,LoginBox,Input,Button } from './style';
import { connect } from 'react-redux';
import {actionCreators} from './store'
import {Redirect} from 'react-router-dom'
class Login extends PureComponent {
    render() {
        const {loginState} = this.props;
        if (!loginState) {
            return (
                <LoginWrapper>
                    <LoginBox>
                    <Input placeholder='username' ref = {(input)=>{this.account = input}}/>
                    <Input placeholder='password' type = 'password' ref = {(input)=>{this.password = input}} />
                    <Button onClick = {()=>this.props.login(this.account,this.password)}>login</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to = '/' />
        }
    }
}

const mapState = (state)=>({
    loginState:state.getIn(['login','login'])
})

const mapDispatch = (dispatch)=>({
    login(accountElem,passwordElem){
        dispatch(actionCreators.login(accountElem.value,passwordElem.value))
        // console.log(accountElem.value,passwordElem.value);

    }
})

export default connect(mapState,mapDispatch)(Login);
