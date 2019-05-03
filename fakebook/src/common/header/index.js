import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';


class Header extends Component {

    getListArea() {
        if (this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        What's popular
                    <SearchInfoSwitch>
                            switch
                    </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                       {
                           this.props.list.map((item)=>{
                               return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                           })
                       }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }


    render() {
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
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>write</Button>
                    <Button className='reg'>Register</Button>
                </Addition>
            </HeaderWrapper>
        )

    }
}




const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        // state.get('header').get('focused')
        list:state.getIn(['header','list'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);