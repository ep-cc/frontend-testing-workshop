/* eslint-disable react/prop-types */
export default function CountryInfo({countryData}) {
  

  return (
    <div className='country-info'>
      <div> Capital: {countryData.capitals[0]}</div>
      <div> Currencies: {
        Object.values(countryData.currencies).map(
          curr => <span key={curr.name}>{curr.name}</span>
        )
        }
      </div>
    </div>
  );
}