import React from "react";
import styled from "styled-components";
import Table from "./table";

function Overview (){
    return(
        <OverviewWrapper>
            <ViewTitle> Overview</ViewTitle>
            <div className="category-search">
            <form>
                <input
                id="name"
                type="text"
                name="text"
                placeholder="Search..."
                />
            </form>
            </div>
            <div className="new-study">
                <button>Create new study</button>
            </div>
            <ListWrapper>
                <ul>
                    <li>Current studies</li>
                    <li>Draft studies</li>
                    <li>Open bids</li>
                    <li>Active bids</li>
                    <li>Active bids</li>
                    <li>Closed bids</li>
                
                    
                </ul>
            </ListWrapper>
            <Table/>
        </OverviewWrapper>
    )
};

const  OverviewWrapper =styled.div
`

background:white;
width:50%;
`

const ViewTitle= styled.div
`
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 38px;
color: #2F2F2F;
`
const ListWrapper= styled.div
`
width: 100%;
height: 50%;

ul {
    list-style-type: none;
     margin: 5%;
     height:40%; 
    
  }
  
  ul li {
    border: 1px solid #D9D9D9; 
    margin-top: 1px%; 
    background-color: white
    padding: 10%; 
    height:30%;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 45px;
    border-radius: 6px;
    

`
export default Overview;