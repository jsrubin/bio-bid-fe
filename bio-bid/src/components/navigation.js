import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Nav =() =>{
    return(
        <NavWrapper>
            <div className="nav-section">
                    <div className="profile-image">
                        <img 
                        style={{margin:"5% 0 0 15%"}}
                        width="55%"
                        src={require(`../images/profile-avatar.png`)}
                        alt="profile image"
                        />
                    </div>
                    <LinkProfile to="/profile">
                        Profile
                    </LinkProfile>
                

                <div className="navWrapperDiv">
                    <StyledLink to="/projects">
                        Current Projects
                    </StyledLink>
                </div>

                <div className="navWrapperDiv">
                    <StyledLink to="/bids">
                        Manage Bids
                    </StyledLink>
                </div>

                <div className="navWrapperDiv">
                    <StyledLink to="/recommendations">
                    Recommendations
                    </StyledLink>
                </div>

                <div className="navWrapperDiv">
                    <StyledLink to="/search">
                        Search studies
                    </StyledLink>
                </div>

                <div className="navWrapperDiv">
                    <StyledLink to="/settings">
                        Settings
                    </StyledLink>
                </div>
                <div className="navWrapperDiv">
                    <StyledLink to="/logout">
                        Log out
                    </StyledLink>
                </div>
            </div>     

           
           
        </NavWrapper>
    )
};

const NavWrapper = styled.div
`

background: white;
width: 17%;
height:100vh;
`
const StyledLink =styled.div
`
display:flex;
justify-content: space-between;
color: #595959;
font-size: 22px;
height:10%;
text-decoration:none;
margin: 10% 5%;
&: hover{
    background: #C4C4C4;
    border-radius: 0px 20px 20px 0px;
    
    


}

`
const LinkProfile =styled.div
`
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 22px;
color: #21242C;
margin: 15% 5% 20% 5%;
line-height: 45%;
`

const StyledOut =styled.div
`
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 22px;
line-height: 60%;
color: #21242C;
margin:600px 0 10% 5%;

`

export default Nav;

