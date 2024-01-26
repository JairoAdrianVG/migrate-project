import {Card } from './Card'
import { Country } from '../../hooks/useCountryData';
interface ICountryListProps{
    countries: Array<Country>
}

export const ListCountries:React.FC<ICountryListProps>= ({countries}) => {


  return (
    <div>
        {countries.map((country,index) => { return <Card country={country} key={index} />})}
    </div>
  )
}
