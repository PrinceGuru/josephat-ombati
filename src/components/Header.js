import React from 'react';
import Typed from 'react-typed';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

const Header = () => {
    return (
    <div className="header-wrapper">
        <div className="main-info">
           <h1>Web Development and Web Production</h1> 
           
           <Typed
                 className="typed-text"
                 strings={["Web Development and Web Production","Web Designer","Photographer","UX/UI Designer"]}   
                 typeSpeed={40}
                 backSpeed={60}
                 loop

                />
`
                 <a className="btn-main-offer" href="#home">
                    <ButtonGroup className="btn-group">
                    <Button> Contact Me</Button> &nbsp;
                    <Button> Download CV </Button>
                   </ButtonGroup>
                 </a>
               
        </div>    
    </div>    
    )
}


export default Header
