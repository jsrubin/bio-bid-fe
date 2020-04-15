import React from "react";
import styled from "styled-components";
import { Table } from 'reactstrap';
import {EllipsisOutlined} from "@ant-design/icons";
import {Button} from "reactstrap";

import '../styles/bids.css';

const Bids = (props) => {
  return (
    <Table striped style={{ width:'100%', display: 'flex', flexDirection: 'column', justifyContent: 'start'}}>
      <thead style ={{ margin:'0%', display: 'flex', justifyContent: 'space-between' }}>
        <tr style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <th style={{width: '80px', textAlign: 'center'}}>BIDS</th>
          <th style={{width: '110px', textAlign: 'center'}}>NAME</th>
          <th style={{width: '200px', textAlign: 'center'}}>THERAPEUTIC AREA</th>
          <th style={{width: '200px', textAlign: 'center'}}>PROTOCOL NO./TITLE</th>
          <th style={{width: '90px', textAlign: 'center'}}>PHASE</th>
          <th style={{width: '140px', textAlign: 'center'}}>SERVICE LIST</th>
          <th style={{width: '160px', textAlign: 'center'}}>MODIFIED DATE</th>
          <th style={{width: '100px', textAlign: 'center'}}>ACTIONS</th>
        </tr>
      </thead>
      <tbody class='table-body'>
        <tr class='table-row'>
          <th scope="row"> <Button class='open-item' color="secondary">Open</Button></th>
          <td class='row-item name-item'> Second study</td>
          <td class='row-item thera-item'> Inflammation<br>
          </br> Indication: Back pain<br>
          </br> Molecule type: Chemical</td>
          <td class='row-item proto-item'> ABZ-123<br>
          </br> Title: Atest </td>
          <td class='row-item phase-item'> I</td>
          <td class='row-item service-item'> 1</td>
          <td class='row-item mod-item'> April 19,2019<br>
          </br> 07:09:50am</td>
          <td class='row-item action-item'> <EllipsisOutlined style={{fontSize:'25px'}}/></td>
        </tr>

        <tr class='table-row'>
          <th scope="row"> <Button class='open-item' color="secondary">Open</Button></th>
          <td class='row-item name-item'> Second study</td>
          <td class='row-item thera-item'> Inflammation<br>
          </br> Indication: Back pain<br>
          </br> Molecule type: Chemical</td>
          <td class='row-item proto-item'> ABZ-123<br>
          </br> Title: Atest </td>
          <td class='row-item phase-item'> I</td>
          <td class='row-item service-item'> 1</td>
          <td class='row-item mod-item'> April 19,2019<br>
          </br> 07:09:50am</td>
          <td class='row-item action-item'> <EllipsisOutlined style={{fontSize:'25px'}}/></td>
        </tr>

        <tr class='table-row'>
          <th scope="row"> <Button class='open-item' color="secondary">Closed</Button></th>
          <td class='row-item name-item'> Second study</td>
          <td class='row-item thera-item'> Inflammation<br>
          </br> Indication: Back pain<br>
          </br> Molecule type: Chemical</td>
          <td class='row-item proto-item'> ABZ-123<br>
          </br> Title: Atest </td>
          <td class='row-item phase-item'> I</td>
          <td class='row-item service-item'> 1</td>
          <td class='row-item mod-item'> April 19,2019<br>
          </br> 07:09:50am</td>
          <td class='row-item action-item'> <EllipsisOutlined style={{fontSize:'25px'}}/></td>
        </tr>

        <tr class='table-row'>
          <th scope="row"> <Button class='open-item' color="secondary">Open</Button></th>
          <td class='row-item name-item'> Second study</td>
          <td class='row-item thera-item'> Inflammation<br>
          </br> Indication: Back pain<br>
          </br> Molecule type: Chemical</td>
          <td class='row-item proto-item'> ABZ-123<br>
          </br> Title: Atest </td>
          <td class='row-item phase-item'> II</td>
          <td class='row-item service-item'> 1</td>
          <td class='row-item mod-item'> April 19,2019<br>
          </br> 07:09:50am</td>
          <td class='row-item action-item'> <EllipsisOutlined style={{fontSize:'25px'}}/></td>
        </tr>

        <tr class='table-row'>
          <th scope="row"> <Button class='open-item' color="secondary">Active</Button></th>
          <td class='row-item name-item'> Second study</td>
          <td class='row-item thera-item'> Inflammation<br>
          </br> Indication: Back pain<br>
          </br> Molecule type: Chemical</td>
          <td class='row-item proto-item'> ABZ-123<br>
          </br> Title: Atest </td>
          <td class='row-item phase-item'> I</td>
          <td class='row-item service-item'> 1</td>
          <td class='row-item mod-item'> April 19,2019<br>
          </br> 07:09:50am</td>
          <td class='row-item action-item'> <EllipsisOutlined style={{fontSize:'25px'}}/></td>
        </tr>

        <tr class='table-row'>
          <th scope="row"> <Button class='open-item' color="secondary">Closed</Button></th>
          <td class='row-item name-item'> Second study</td>
          <td class='row-item thera-item'> Inflammation<br>
          </br> Indication: Back pain<br>
          </br> Molecule type: Chemical</td>
          <td class='row-item proto-item'> ABZ-123<br>
          </br> Title: Atest </td>
          <td class='row-item phase-item'> IV</td>
          <td class='row-item service-item'> 1</td>
          <td class='row-item mod-item'> April 19,2019<br>
          </br> 07:09:50am</td>
          <td class='row-item action-item'> <EllipsisOutlined style={{fontSize:'25px'}}/></td>
        </tr>

        <tr class='table-row'>
          <th scope="row"> <Button class='open-item' color="secondary">Open</Button></th>
          <td class='row-item name-item'> Second study</td>
          <td class='row-item thera-item'> Inflammation<br>
          </br> Indication: Back pain<br>
          </br> Molecule type: Chemical</td>
          <td class='row-item proto-item'> ABZ-123<br>
          </br> Title: Atest </td>
          <td class='row-item phase-item'> III</td>
          <td class='row-item service-item'> 1</td>
          <td class='row-item mod-item'> April 19,2019<br>
          </br> 07:09:50am</td>
          <td class='row-item action-item'> <EllipsisOutlined style={{fontSize:'25px'}}/></td>
        </tr>

        <tr class='table-row'>
          <th scope="row"> <Button class='open-item' color="secondary">Open</Button></th>
          <td class='row-item name-item'> Second study</td>
          <td class='row-item thera-item'> Inflammation<br>
          </br> Indication: Back pain<br>
          </br> Molecule type: Chemical</td>
          <td class='row-item proto-item'> ABZ-123<br>
          </br> Title: Atest </td>
          <td class='row-item phase-item'> II</td>
          <td class='row-item service-item'> 1</td>
          <td class='row-item mod-item'> April 19,2019<br>
          </br> 07:09:50am</td>
          <td class='row-item action-item'> <EllipsisOutlined style={{fontSize:'25px'}}/></td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export default Bids;


const Title= styled.div
`
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 24px;
color: #595959;


`




