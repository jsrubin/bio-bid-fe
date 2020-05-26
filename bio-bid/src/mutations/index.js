import { gql } from 'apollo-boost';

export const ADD_COMPANY = gql`
    mutation addCompany(
        $name: String!
        $logoURL: String,
        $website: String,
        $linkedin: String,
        $overview: String,
        $headquarters: String,
        $companySize: CompanySize,
        $regions: [RegionInput],
        $therapeutics: [TherapeuticInput],
        $services: [ServiceInput],
        $specialties: [SpecialtyInput]
    ){
        createCompany(
            name: $name
            logoURL: $logoURL
            website: $website
            linkedin: $linkedin
            overview: $overview
            headquarters: $headquarters
            companySize: $companySize
            regions: $regions
            therapeutics: $therapeutics
            services: $services
            specialties: $specialties
        ){
            id
        }
    }
`;

// export const EDIT_COMPANY = gql`
//     mutation editCompany(

//     ){

//     }
// `;

