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