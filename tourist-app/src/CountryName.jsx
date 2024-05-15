/* eslint-disable react/prop-types */
import Star from './Star';


export default function CountryName({countryData}) {
  

  return (
    <div className='country-name'>
      <div>{countryData.flag}</div>
      <div>{countryData.name.official}</div>
      <Star/>
    </div>
  );
}
