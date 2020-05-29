import React from "react";
import { render } from "@testing-library/react";

// The unit we're testing
import Form from "../components/company-profile/Form/Form";

// Need to mock these queries to run the test
import {
  GET_REGIONS,
  GET_THERAPEUTICS,
  GET_SERVICES,
  GET_SPECIALTIES,
} from "../queries";

// Need to mock these mutations to run the test
import { ADD_COMPANY, EDIT_COMPANY } from "../mutations";

// A mock provider for testing the Apollo hooks
import { MockedProvider } from "@apollo/react-testing";

// We're going mock this whole module
import { Route, MemoryRouter } from "react-router-dom";
// jest.mock("react-router");

// Our mock Apollo hooks
const mocks = [
  {
    request: {
      query: GET_REGIONS,
    },
    result: {
      data: {
        name: "Region 1",
      },
    },
  },
  {
    request: {
      query: GET_THERAPEUTICS,
    },
    result: {
      data: {
        name: "Therapeutic 1",
      },
    },
  },
  {
    request: {
      query: GET_SERVICES,
    },
    result: {
      data: {
        name: "Service 1",
      },
    },
  },
  {
    request: {
      query: GET_SPECIALTIES,
    },
    result: {
      data: {
        name: "Specialty 1",
      },
    },
  },
  {
    request: {
      query: ADD_COMPANY,
    },
    result: {
      data: {
        name: "Company ID",
      },
    },
  },
  {
    request: {
      query: EDIT_COMPANY,
    },
    result: {
      data: {
        name: "Company ID",
      },
    },
  },
];

// Write test to ensure an error appears when no company name is provided
test("Error appears when no name is provided", () => {
  // Mock the return value for useParams()
  //   ReactRouter.useParams.mockReturnValue({ id: "123" });

  const { debug } = render(
    <MemoryRouter initialEntries={["/service-providers/edit/123"]}>
      <Route path="/service-providers/edit/:id">
        <MockedProvider mocks={mocks} addTypename={false}>
          <Form />
        </MockedProvider>
      </Route>
    </MemoryRouter>
  );

  debug();
});

// Write test to ensure add company button works with all data fields filled
