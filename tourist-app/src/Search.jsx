import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from './api';


export default function Search() {
  const navigate = useNavigate();
  const [countries, setCountries] = useState(null);
  const [query, setQuery] = useState('');
  const filteredCountries = query === '' || countries === null ? countries : countries.filter(c => {
    return c.name.official.toUpperCase().includes(query.toUpperCase())
  })

  useEffect(() => {
    fetch(`${API_URL}/all`)
    .then(res=>res.json())
    .then(data=>setCountries(data))
    .catch(err=>console.error(err));
  }, []);

  return (
    <>
      <input value={query} type='text' placeholder='Filter by name' onChange={e => setQuery(e.target.value)}></input>
      <div id='country-selector'>
        {
          countries
          ? filteredCountries.map(c => {
            return <div
              onClick={() => navigate(`/country/${c.cca3}`)}
              className='card' key={c.cca3}>{c.name.official}</div>
          })
          : <p>Loading list of countries...</p>
        }

      </div>
    </>
  );
}
