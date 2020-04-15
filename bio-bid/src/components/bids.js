import React from "react";
import Search from "./search";
import { Table } from 'reactstrap';
import { EllipsisOutlined } from "@ant-design/icons";
import { Button } from "reactstrap";

import { GET_STUDIES } from '../queries';
import { useQuery } from '@apollo/react-hooks';

const Bids = (props) => {
  const { loading, data, error } = useQuery(GET_STUDIES);
  return (
    <div className="tableheader">
      <Search />
      <Table striped>
        <thead>
          <tr >
            <th>BIDS</th>
            <th>NAME</th>
            <th>THERAPEUTIC AREA</th>
            <th>PROTOCOL NO./TITLE</th>
            <th>PHASE</th>
            <th>SERVICE LIST</th>
            <th>MODIFIED DATE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {data && (
            data.studies.map(study => <tr key={study.id}>
              <th scope="row"> <Button style={{ width: '70px', height: '35px' }} color="secondary">Open</Button></th>
              <td> {study.name}</td>
              <td> {study.area}<br>
              </br> Indication: Back pain<br>
                </br> Molecule type: Chemical</td>
              <td> {study.protocol_number}<br>
              </br> Title: {study.title} </td>
              <td> {study.phase}</td>
              <td> {study.services}</td>
              <td> {study.modified_date}</td>
              <td> <EllipsisOutlined style={{ fontSize: '25px' }} /></td>
            </tr>)
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Bids;







