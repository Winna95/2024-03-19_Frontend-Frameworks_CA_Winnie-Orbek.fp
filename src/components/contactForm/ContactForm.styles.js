import styled from 'styled-components';

export const StyledForm = styled.form`
    background-color: #CDDFD3; 
    padding: 20px 50px; 
    width: 200px;
    margin: auto;
  
  
  @media screen and (min-width: 600px) {
    margin: 130px 0 200px 220px;
  }
  @media screen and (min-width: 1000px) {
      padding: 30px 100px;
    }
  
`;

export const StyledInput = styled.input`
    background-color: white; 
    border: none; 
    padding: 5px; 
    margin-bottom: 10px;
    margin-top: 5px;
    
`;

export const StyledTextDiv = styled.div`
background-color: #FFD9A3;
padding: 20px;
width: 200px;
font-weight: bolder;
margin: auto;
line-height: 22px;  
`
