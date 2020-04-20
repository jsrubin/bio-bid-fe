import React from "react";
import styled from "styled-components";
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
                    <StyledLink to="/recommendations" style={{margin:'14%'}}>
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
                    <StyledLink to="/search" style={{margin:'18%'}}>
                    <StarFilled />
                        Reviews
                    </StyledLink>
                </div>

                <div className="navWrapperDiv2">
                    <StyledLink2 to="/settings" >
                    <SettingOutlined/>
                        Settings
                    </StyledLink2>
                    <StyledLink2 to="/logout">
                        Log out
                    </StyledLink2>
                </div>  
                </div>   
            </div>{/* nav section */}
           
           
        </NavWrapper>
    )
};

const NavWrapper = styled.div
`

background: white;
transition: transform 0.5s linear;
border-right: 1px solid #e5e5e5;
  width: 260px;
  height: 100%;
  


`
const StyledLink =styled.div
`
display: flex;
text-decoration: none;
font-size:20px;
color: #595959;
font-family:Lato;
overflow: hidden;
margin: 10px 0;
&:hover {
    background: #C4C4C4;
    text-decoration: none;


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





`


export default Nav;

