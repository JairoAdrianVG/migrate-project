import {Country} from '../../hooks/useCountryData'

interface iCountryProps {
    country: Country,
    key: number
}

export const Card:React.FC<iCountryProps> = ({country,key}) => {
  return (
    <div style={{display: 'inline-block'}} >
    <div key={key} className='card m-3 align-items-center p-3' style={{backgroundColor: 'lightgrey',boxShadow: '10px 10px 5px grey',width:'15rem',height:'16rem'}}>
        <div className='card-header' style={{textShadow: '1px 1px 2px black',backgroundColor:"lightgray"}}>{country.name.common}</div>
        <div className='card-body'>
        <img src={country.flags.svg}  style={{width: '9rem'}}/>
        <p className='card-text p-2'>Region: {country.region}</p>
        </div>
    </div>
    </div>
  )
}
