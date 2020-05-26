import { gql } from 'apollo-boost';

export const GET_STUDIES = gql`
{
  studies{
    id
    name
    area
    protocol_number
    title
    phase
    services
    modified_date
    status
  }
}
`;

export const GET_COMPANIES = gql`
{
  companies{
    name
    logoURL
    website
    linkedin
    overview
  }
}
`

export const GET_COMPANY_BY_ID = gql`
  query Company($id: ID){
    company(id: $id){
      name
      logoURL
      website
      linkedin
      overview
      headquarters
      companySize
    }
  }
`