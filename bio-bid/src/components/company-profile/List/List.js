import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_COMPANIES } from '../../../queries';

import CompanyCard from './CompanyCard';

import { CompanyList, Button } from './styles';

export default () => {        
    const {loading, error, data} = useQuery(GET_COMPANIES);

    if(loading) return <p>Loading...</p>
    if(error) return <p>{`Error: ${error.message}`}</p>

    return (
        <CompanyList>
            <header>
                <div className='header-container'>
                    <h2>List of Service Providers</h2>
                    <div className='search-container'>
                        <input type="text"/>
                        <Button>
                            <p>Search</p>
                        </Button>
                    </div>
                </div>
            </header>
            {data.companies.map(company => {
                return <CompanyCard company={company} key={company.id}/>
                // if (item){
                //     console.log("each item", item)
                //     return (
                //         <div>
                //             <span>
                //                 <h4>{item.name}</h4>
                //                 <img src={item.logoURL}></img>
                //             </span>
                //             <p>{item.overview}</p>
                //             <p>{item.website}</p>
                //             <p>{item.linkedin}</p>
                            
                //             <div >
                //                 <button>Claim this company</button>
                //                 <button>More Info</button>
                //                 <button>Reviews</button>
                //             </div>
                //         </div>
                //     )
                // } else {
                //     return (
                //         <p>Failed to load company info</p>
                //     )
                // }
            })}
            </CompanyList>
    )
};
