import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchInfoList } from './style';
import { connect } from 'react-redux';
import {actionCreators} from './store';

const getListArea = (show)=>{
    if(show){
        return (
            <SearchInfo>
            <SearchInfoTitle>
                What's popular
                <SearchInfoSwitch>
                    switch
                </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
                <SearchInfoItem>Ottawa</SearchInfoItem>
                <SearchInfoItem>Ottawa</SearchInfoItem>
                <SearchInfoItem>Ottawa</SearchInfoItem>
                <SearchInfoItem>Ottawa</SearchInfoItem>
            </SearchInfoList>
        </SearchInfo>
        )
    }else{
        return null;
    }
}


const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo href='/' />
            <Nav>
                <NavItem className='left active'>Home</NavItem>
                <NavItem className='left'>Search friend:</NavItem>
                <NavItem className='right'>Log in</NavItem>
                <NavItem className='right'>French</NavItem>
                <SearchWrapper>
                    <CSSTransition
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        >
                        </NavSearch>
                    </CSSTransition>
                    {getListArea(props.focused)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='writting'>write</Button>
                <Button className='reg'>Register</Button>
            </Addition>
        </HeaderWrapper>
    )
}




const mapStateToProps = (state) => {
    return {
        focused:  state.getIn(['header','focused'])
        // state.get('header').get('focused')
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);