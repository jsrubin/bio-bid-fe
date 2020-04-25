import React from "react";
import styled from "styled-components";
import {PlusOutlined} from "@ant-design/icons";




const Search = () => {
    return (
        <BidHeaderWrapper>
            <Title>Current Projects</Title>
            <div className="btn-newstudy">
                <button> <PlusOutlined />Create new study</button>
            </div>
        </BidHeaderWrapper>
    )
}

export default Search;


const BidHeaderWrapper =styled.div
`
max-width:100%;

`


const Title= styled.div
`
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 24px;
color: #595959;


`