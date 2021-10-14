import styled from 'styled-components';

//this file is responsible for the donate button located in Donate.js

//CSS for the button component
const Button = styled.button`
background-color: #FFC107;
padding: 15px 30px;
border-radius: 5px;
box-shadow: 0px 2px 2px lightgray;
cursor: pointer;
font-weight: bold;
transition: ease background-color 250ms;
&:hover {
    background-color: #283593;
}
`;


function DonateButton() {
  //function that reacts to the click of the button. Opens a new window with the website www.wfp.org
    const handleClick = () => { 
        window.open("http://wfp.org");
      };

      return (
        <Button onClick={handleClick}>Donate</Button>

      );
    

}

export default DonateButton;


 