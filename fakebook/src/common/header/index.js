import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList } from './style';
import { connect } from 'react-redux';
import { actionCreators } from './store';


class Header extends Component {

    getListArea() {
        const {focused,list, page,totalPage,mouseIn,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props;
        const pageList=[];
        const newList = list.toJS();

        if (newList.length) {
            for (let i = (page-1)*5; i < page*5; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
                
            }
        }

        if (focused||mouseIn) {
            return (
                <SearchInfo 
                onMouseEnter = {handleMouseEnter}
                onMouseLeave = {handleMouseLeave}
                >
                    <SearchInfoTitle>
                        What's popular
                    <SearchInfoSwitch onClick = {()=>handleChangePage(page,totalPage)}>
                            switch
                    </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                       {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }


    render() {
        const {focused,handleInputFocus,handleInputBlur,list} = this.props;
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
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={()=>handleInputFocus(list)}
                                onBlur={handleInputBlur}
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
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if (list.size===0) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },

        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },

        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },

        handleChangePage(page,totalPage){
            if (page<totalPage) {
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);