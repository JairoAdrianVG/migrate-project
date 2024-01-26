import { useState } from "react";
import { useCountryData } from "../hooks/useCountryData"
import { ListCountries } from "./components/ListCountries";

export const Countries:React.FC = () => {
  const [regionFilter, setRegionFilter] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string | null>(null);

    const countries  = useCountryData(regionFilter,searchQuery);

  return (
    <div>
      <div>
            <label className="form-label me-5">
              Filter by Region:
              <select  className="form-select" onChange={(e) => setRegionFilter(e.target.value)}>
                <option value="">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
              </select>
            </label>
            <label className="form-label ms-5">
              Search by Name:
              <input className="form-control"  placeholder="Country Name" type="text" onChange={(e) => setSearchQuery(e.target.value)} />
            </label>
          </div>

        {countries.length > 0 ? <ListCountries countries={countries}/> : <div className="mt-5"><h1>Loading</h1></div>   }
    </div>
  )
}

//CONDICION ? CASO TRUE : CASO FALSE

//IF(CONDICION){CASO TRUE}ELSE{CASO FALSE}