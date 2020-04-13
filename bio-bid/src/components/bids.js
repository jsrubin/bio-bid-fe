import React from "react";
import styled from "styled-components";
import MaterialTable from "material-table";

export default function Table() {
  const [state, setState] = React.useState({
    columns: [
      { title: "NAME", field: "name" },
      { title: "THERAPEUTIC AREA", field: "Therapeutic" },
      { title: "PROTOCOL NO./TITLE", field: "protocol", type: "numeric" },
      { title: "PHASE", field: "Phase"},
      { title: "SERVICE LIST" , field: "Serverlist", type: "numeric" },
      { title: "MODIFIED LIST", field: "modify", type: "numeric" },
      {
        title: "",
        field: "",
        lookup: { }
      }
    ],
    data: [
      {
        name: "Second study",
        Therapeutic: "Inflammation",
        protocol: "ABZ-123",
        Phase: "I",
        Serverlist: 1,
        modify: "April 19 ,2019"
      },
    ]
  });

  return (
    <MaterialTable
       title="Current Projects"
      columns={state.columns}
      data={state.data}
     
    />
  );
}



