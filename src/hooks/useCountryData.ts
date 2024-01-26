import { useEffect, useState } from "react"

export interface Country{
    name: {
        common: string;
    };
    flags: {
        svg: string;
    };
    region:string;
}

export const useCountryData = (regionFilter: string | null, searchQuery: string | null): Country[] => {

    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        const fetchData = async() => { 
            const response = await fetch('https://restcountries.com/v3.1/all');
            const result:Country[] = await response.json();
            let filteredCountries = result;

            // Aplicar filtros si existen
            if (regionFilter) {
              filteredCountries = filteredCountries.filter((country: Country) => country.region === regionFilter);
            }
    
            if (searchQuery) {
              filteredCountries = filteredCountries.filter((country: Country) =>
                country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
              );
            }     
            console.log(result[0].name.common);
            setCountries(filteredCountries);//guardamos en el estado los resultados
          }
          fetchData();
          console.log(countries);
    },[regionFilter, searchQuery]) 

    return countries;
}

