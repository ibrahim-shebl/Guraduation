import React from 'react'
import Card from './FactoriseCard';

const CompanyList = ({data}) => {
    return (
        <>
           {data?.map((item,index)=>(
            <Card item = {item} key={index} />
           ))}
        
        </>
    );
}

export default CompanyList