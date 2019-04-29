import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'
import { connect } from 'react-redux'

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo href='/' />
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载APP</NavItem>
                <NavItem className='right'>登录</NavItem>
                <NavItem className='right'>Aa</NavItem>
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
        focused: state.focused
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = {
                type: 'search_focus'
            };
            dispatch(action);
        },

        handleInputBlur() {
            const action = {
                type: 'search_blur'
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);