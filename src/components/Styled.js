import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
font-family: "Plus Jakarta Sans", sans-serif;
width:100vw;
//height:100vh;
margin:0;
padding:0;
display:flex;
border:5px dotted crimson;
background-color:#050608;
`;

export const MainWrapper = styled.div`
  display:flex;
  flex-direction:column;
  //width:70vw;
  border:1px solid orange;
  color:#D0D8E1;
`;

export const NavWrapper = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:30vw;
  color:white;
  border:2px solid blue;
  border-radius:12px;
  background-image: linear-gradient(to right top, #0e1116, #14171b, #181c20, #1d2126, #21262b);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  `;

export const Logo = styled.h3`
  size:12px;
  color: white;
  margin-top:20px;
  `;

export const Span = styled.span`
  font-size:12px;
  `;

export const InputWrapper = styled.input`
  height:30px;
  margin-top:20px;
  background: #F6F6F6;
  width:80%;
  border-radius:8px;
  `;

export const UnorderedList = styled.ul`
  list-style:none;
  display:flex;
  flex-direction:${props => props.col ? 'column' : 'row'};
  gap:20px;
  padding:20px 0;
  margin:0;
  `;

export const CurrentLocationCont = styled.div`
display:flex;
color:white;
border:1px solid #33383D;
padding:4px;
border-radius:8px;
box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;

export const FlagCont = styled.div`
margin-left:5px;
 `;

export const LocationTextCont = styled.div`
 display:flex;
 flex-direction:column;
 align-items:flex-start;
 ${Span}{
   font-size:10px;
 };
 margin-left:10px;
 `;

export const Span = styled.span`
 font-size:${(props) => (props.big ? '17px' : '10px')};
 font-style: ${(props) => (props.italic ? 'italic' : 'normal')};
 font-weight: 400;
 `;

export const Img = styled.img`
width: ${(props) => (props.small ? '25px' : '40px')};
height : ${(props) => (props.small ? '25px' : '40px')};
margin-right:${(props) => (props.marginRight ? 'auto' : '')}
 padding:5px;
 `;

export const LocationHeader = styled.h3`
 margin:0;
 `;

export const ListItem = styled.li`
  display:flex;
  justify-content:center;
  gap:20px;
  align-items:center;
  width:100%;
 `;

export const Button = styled.button`
border:none;
border-radius:4px;
cursor:pointer;
color:#000;
transition: opacity 0.3s ease;
width:${(props) => (props.small ? '30px' : '100px')};
height:${(props) => (props.small ? '30px' : '30px')};
margin-top:${(props) => (props.toggle ? '20px' : '')};
${(props) => {
  props.hover &&
    css`
&:hover {
  background-color: #c1121f;
}
`;
  props.padding &&
    css`
{
  padding: 2px 10px;
}
`;
}}`;

export const ButtonWrap = styled.div`
  display:flex;
`;

export const LinkCont = styled.div`
  display:flex;
  align-items:center;
`;

export const HeadingWrapper = styled.div`
display:flex;
color:#D0D8E1;
z-index:2;
margin:20px;
padding:20px;
border-radius:12px;
background-image: linear-gradient(to right top, #0e1116, #14171b, #181c20, #1d2126, #21262b);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
transition: all 2s ease-in;
`;

export const Title = styled.h3`
flex:1;
color:white;
font-size:${(props) => (props.small ? '10px' : '32px')};
width:${(props) => (props.percentage ? '50%' : '')};
flex:${(props) => (props.flex ? '1' : '')};
`;

export const Text = styled.h5`
flex:1;
margin:0;
`;

export const NumberCont = styled.span`
font-family: "xenera", sans-serif;
font-weight: 400;
font-style: normal;
font-size:${(props) => (props.small ? '14px' : '26px')};
margin:auto;
width:${(props) => (props.percentage ? '30%' : '')};
text-align:${(props) => (props.right ? 'right' : '')};
`;

export const LocationContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
border-radius:12px;
padding:20px;
color:white;
flex:1;
`;

export const DataContainer = styled.div`
display:flex;
justify-content:center;
margin-bottom:20px;
gap:12px;
`;

export const SecondaryInfo = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
`;

export const WeatherIcon = styled.img`
  width:60px;
  height:60px;
  margin:auto;
`;

export const WeatherContainer = styled.div`
  display:flex;
  // height:80vh;
  border:1px solid red;
  padding:20px 0;
`;

export const ForecastContainer = styled.div`
 display:flex;
 flex-direction:column;
 align-content:space-between;
 flex:1;
 padding:0 20px;
 margin:0 20px;
 background-image: linear-gradient(to right top, #0e1116, #14171b, #181c20, #1d2126, #21262b);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
transition: all 2s ease-in;
border-radius:12px;
`;

export const ForecastItem = styled.div`
display:flex;
justify-content:center;
padding:0 30px;
gap:30px;
margin-bottom:10px;
`;

export const DivWrapper = styled.div`
flex:1;
padding:30px;
flex-direction:${props => props.col ? 'column' : 'row'};
border:2px dashed white;
//height:100%;
`;

export const ForecastLi = styled.li`
 display:flex;
 flex-direction:column;
 border-radius:12px;
 padding:6px;
 background-image: linear-gradient(to right top, #0e1116, #14171b, #181c20, #1d2126, #21262b);
 box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const Carousel = styled.div`

`;