import { useState, useEffect } from 'react';
import CountryName from './CountryName';
import CountryInfo from './CountryInfo';
import { API_URL } from './api';

// eslint-disable-next-line react/prop-types
export default function CountryCard({ cca3 }) {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/by-cca3/${cca3}`)
    .then(res=>res.json())
    .then(data=>setCountryData(data))
    .catch(err=>console.error(err));
  }, [cca3]);

  

  return (
    <div className='country-card'>
      {
        countryData && <>
          <CountryName countryData={countryData}/>
          <CountryInfo countryData={countryData}/>
        </>
      }
    </div>
  );
}
