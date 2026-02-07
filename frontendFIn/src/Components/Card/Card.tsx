import React, { type JSX, type SyntheticEvent } from 'react'
import type { CompanySearch } from '../../company';
import AddPortofolio from '../Portofolio/AddPortofolio/AddPortofolio';
import { Link } from 'react-router-dom';

interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortofolioCreate: (e: SyntheticEvent) => void;
}

const Card : React.FC<Props> = ({id, searchResult, onPortofolioCreate}: Props) : JSX.Element => {
  return (
    <div
        className="flex flex-col items-center gap-6 justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
        id={id}
        key={id}
    >
        <Link 
            to={`/company/${searchResult.symbol}`} 
            className="font-bold text-center text-veryDarkViolet md:text-left"
        >
            {searchResult.name} ({searchResult.symbol})
        </Link>

        <p className='text-veryDarkBlue'>{searchResult.currency}</p>

        <p className='font-bold text-veryDarkBlue'>
           {searchResult.exchangeFullName} - {searchResult.exchange}
        </p>

        <AddPortofolio 
            onPortofolioCreate={onPortofolioCreate}
            symbol={searchResult.symbol}
        />
    </div>
  )
}

export default Card