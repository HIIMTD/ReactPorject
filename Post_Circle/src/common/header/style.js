import styled from 'styled-components'
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div` 
    height:56px;
    border-bottom:1px solid #f0f0f0;
    position:relative;
    background:white;

` ;

export const Logo = styled.div` 
height:56px;
// border-bottom:1px solid #f0f0f0;
position:absolute;
top:0;
left:0;
display:block;
margin-left:20px;
width:100px;
height:56px;
background:url(${logoPic});
background-size:contain;
` ;

export const Nav = styled.div` 
    width:960px;
    height:100%;
    margin:0 auto ;
    padding-right:70px;
    box-sizing:border-box;
` ;

export const NavItem = styled.div` 

line-height:56px;
padding:0 15px;
font-siez:17px;
color:#333;
&.left {
    float:left;
}

&.right{
    float: right;
    color:#969696;
}

&.active{
    color:#0099ff;
}

` ;

export const SearchWrapper = styled.div`
    position:relative;
  
    float:left;

` ;

export const NavSearch = styled.input.attrs({
    placeholder:'name/city...'
})` 
    width:160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    margin-top:9px;
    margin-left:0;
    padding:0 30px 0 20px;
    box-sizing:border-box;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:200px;
    }
    &.slide-enter{
   
        transition:all .2s ease-out
    }
    &.slide-enter-active{
        width:200px;
    }

    &.slide-exit{
        transition:all .2s ease-out
    }
    
    &.slide-exit-active{
        width:160px;
    }
` ;


export const Addition = styled.div` 
position:absolute;
right:0;
top:0;
height:56px;
` ;


export const Button = styled.div` 
float:right;
line-height:38px;
border-radius:19px;
margin-top:9px;
border:1px solid #0099ff;
margin-right:20px;
padding:0 20px;
font-size:14px;
&.reg{
    color:#0099ff;
}

&.writting{
    color:#fff;
    background:#0099ff;
}
` ;

export const SearchInfo = styled.div` 
    z-index:1;
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    background:white;
    box-shadow:0 0 8px rgba(0,0,0, .2);
` ;

export const SearchInfoTitle = styled.div` 
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
` ;


export const SearchInfoSwitch = styled.span` 
    float:right;
    font-size:13px;
    cursor:pointer;
` ;


export const SearchInfoList = styled.div` 
    overflow:hidden;
` ;

export const SearchInfoItem = styled.a` 
    display:block;
    float:left;
    margin-right:10px;
    margin-bottom:15px;
    padding:0 5px;
    font-size:12px;
    line-height:20px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
` ;

