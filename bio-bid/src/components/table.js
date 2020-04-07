import React ,{Component}from "react";
import styled from "styled-components";


class Table extends Component {
    render() {
  
      const headings = [
        'CRO',
        'Bids',
        'Reject',
        'Approve',
       
      ];
  
      const rows = [
        [
          'Cool Bio',
          '$5,000.00',
          'X',
          ''
          
        ],
        [
          'Cool Biz',
          '$6,000.00',
          'X',
          '',
          
          
        ],
        [
          'Great Guy',
          '$7,000.00',
          'X',
        ],
        [
          'Bio Team',
          '$7,500.00',
          'X',
        ],
        [
            'Pharms Biz',
            '$8,500.00',
            'X',
          ],
          [
            'Cool Pharma',
            '$9,000.00',
            'X',
          ],
      ];
  
      return (
        <Provider>
          <Page title="Ready study">
            <DataTable headings={headings} rows={rows} />
          </Page>
        </Provider>
      );
    }
  }
  
  export default Table;

  const DataTable = styled.div
  `
  border-spacing: 0px;
    background: #fff;
    box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
    border: 1px solid #f4f6f8;
    padding: 4px;
    text-align: left;
  `

  const Provider = styled.div
  `
  width:100%;
  padding: 10%;
  margin:1%;
  
  `

  const Page = styled.h3
  `
  font-family: Lato;
font-style: normal;
font-weight: normal;
font-size: 24px;
color: #262626;
  
  `
