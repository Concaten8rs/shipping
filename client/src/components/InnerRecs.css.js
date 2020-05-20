import styled from "styled-components"


const InnerRecs = styled.div`
display: flex;
position: relative;
flex-direction: row;
transition: all 0.5s ease-in;
margin-left: ${props => props.offset}px;
`;

export default InnerRecs;
