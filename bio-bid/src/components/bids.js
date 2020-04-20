import React, { useEffect, useState } from "react";
import { Table } from 'reactstrap';
import { EllipsisOutlined } from "@ant-design/icons";
import { Button } from "reactstrap";

import { GET_STUDIES } from '../queries';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';
import * as JsSearch from 'js-search';

/* STYLE IMPORT */
import '../alt-dash/styles/current-projects.css';

/* IMAGE IMPORTS */
import { ReactComponent as AddIcon } from '../images/add-button-1.svg';
import { ReactComponent as SearchIcon } from '../images/search.svg';

const Bids = (props) => {

  const { loading, data, error } = useQuery(GET_STUDIES);

  const [studies, setStudies] = useState([]);
  const [value, setValue] = useState('');

  const search = new JsSearch.Search('name');

  search.addIndex('name');
  search.addIndex('area');
  search.addIndex('protocol_number');
  search.addIndex('title');

  const createStudy = () => {

      // Placeholder for the create button.

      console.log('Creating new study...');

  }

  const handleSearch = (event) => {

      event.preventDefault();

      if (value.length <= 0)
          setStudies(data.studies);
      else
          setStudies(search.search(value));

  }

  const processSearch = (event) => {

      event.preventDefault();

      setValue(event.target.value);

      if (value.length <= 0)
          setStudies(data.studies);
      else
          setStudies(search.search(value));

  }

  useEffect(() => {

      if (data !== undefined) {

          search.addDocuments(data.studies);

          if (studies.length <= 0 && value.length <= 0)
              setStudies(data.studies);

      }

  });

  return (
    <div className="tableheader">
      <div id='current-projects-header' style={{ marginBottom: '20px' }}>
        <p id='current-projects-header-text-1'>Current Projects</p>
        <div id='input-container'>
          <form onSubmit={event => handleSearch(event)} style={{ display: 'flex' }}>
            <SearchIcon id='search-icon' />
            <input onChange={event => processSearch(event)} id='search-input' placeholder='Enter Keyword' />
            <button id='search-button'>Search</button>
          </form>
        </div>
        <div id='current-projects-header-2'>
          <AddIcon style={{ width: '16px', height: '16px', margin: '8px 8px 8px 12px' }} />
          <p id='current-projects-header-text-2' onClick={() => { createStudy() }} >Create new study</p>
        </div>
      </div>
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
          {data && (studies.map(study => <tr key={study.id}>
              <th scope="row"> <Button style={{ width: '70px', height: '35px' }} color="secondary">{study.status}</Button></th>
              <td> {study.name}</td>
              <td> {study.area}<br>
              </br> Indication: Back pain<br>
                </br> Molecule type: Chemical</td>
              <td> {study.protocol_number}<br>
              </br> Title: {study.title} </td>
              <td> {study.phase}</td>
              <td> {study.services}</td>
              <td> {moment(study.modified_date).format('LL')} <br>
            </br> {moment(study.modified_date).format('LTS')}</td>
              <td> <EllipsisOutlined style={{ fontSize: '25px' }} /></td>
            </tr>)
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default Bids;