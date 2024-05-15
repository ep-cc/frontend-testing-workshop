import { useParams } from 'react-router-dom';
import CountryCard from './CountryCard';

export default function Country() {
  const { cca3 } = useParams();
  
  return (
    <div>
    <h1>Country info</h1>
    <CountryCard cca3={cca3}/>
    </div>
  );
}
