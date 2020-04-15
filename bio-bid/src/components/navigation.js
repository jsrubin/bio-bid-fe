import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {PieChartOutlined}from "@ant-design/icons";
import {TeamOutlined} from "@ant-design/icons";
import {FileSearchOutlined} from "@ant-design/icons";
import {QrcodeOutlined} from "@ant-design/icons";
import {SettingOutlined} from "@ant-design/icons";
import {StarFilled} from "@ant-design/icons";

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
                    <StyledLink to="/projects" style={{margin:'15%'}}>
                    <QrcodeOutlined/>
                        Current Projects
                    </StyledLink>
                </div>

                <div className="navWrapperDiv">
                    <StyledLink to="/bids" style={{margin:'17%'}}>
                    <PieChartOutlined/>
                        Manage Bids
                    </StyledLink>
                </div>

                <div className="navWrapperDiv">
                    <StyledLink to="/recommendations" style={{margin:'14%', padding:'2%'}}>
                    <TeamOutlined/>
                    Recommendations
                    </StyledLink>
                </div>

                <div className="navWrapperDiv">
                    <StyledLink to="/search" style={{margin:'17%'}}>
                    <FileSearchOutlined />
                        Search studies
                    </StyledLink>
                </div>

                <div className="navWrapperDiv">
                    <StyledLink to="/search" style={{margin:'25%'}}>
                    <StarFilled />
                        Reviews
                    </StyledLink>
                </div>

                <div className="navWrapperDiv2">
                    <StyledLink2 to="/settings" style={{margin:'17%'}}>
                    <SettingOutlined/>
                        Settings
                    </StyledLink2>
                </div>
                <div className="navWrapperDiv2">
                    <StyledLink2 to="/logout" style={{margin:'17%'}}>
                        Log out
                    </StyledLink2>
                </div>
            </div>     

           
           
        </NavWrapper>
    )
};

const NavWrapper = styled.div
`

background: white;
width: 20%;
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
margin: 5% 0 0 5%;
&: hover{
    background: #C4C4C4;
    border-left: 10%;
    
    


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

const StyledLink2 =styled.div
`
font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 22px;
color: #595959;
border-top: 1 px solid gray;





`


export default Nav;

