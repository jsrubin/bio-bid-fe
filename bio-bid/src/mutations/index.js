import { gql } from 'apollo-boost';

// export const ADD_COMPANY = gql`
//     mutation addCompany(
//         $name: String!,
//         $logoURL: String,
//         $website: String,
//         $linkedin: String,
//         $overview: String,
//         $headquarters: String,
//         $companySize: CompanySize,
//         $services: [Service],
//         $regionsCoverred: [Specialty],
//         $therapeuticAreas: [TherapeuticArea]
//     ){
//         createCompany(
//             name: $name
//             logoURL: $logoURL
//             website: $website
//             linkedin: $linkedin
//             overview: $overview
//             headquarters: $headquarters
//             companySize:
//             services:
//             specialties:
//         )
//     }
// `;

export const ADD_COMPANY = gql`
    mutation addCompany(
        $name: String!
        $logoURL: String,
        $website: String,
        $linkedin: String,
        $overview: String,
        $headquarters: String,
        $companySize: CompanySize
    ){
        createCompany(
            name: $name
            logoURL: $logoURL
            website: $website
            linkedin: $linkedin
            overview: $overview
            headquarters: $headquarters
            companySize: $companySize
        ){
            id
        }
    }
`;

