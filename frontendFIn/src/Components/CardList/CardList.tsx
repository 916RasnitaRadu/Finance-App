import type { SyntheticEvent } from 'react';
import type { CompanySearch } from '../../company'
import Card from '../Card/Card'
import {v4 as uuidv4} from 'uuid';

interface Props {
  searchResults: CompanySearch[]
  onPortofolioCreate: (e: SyntheticEvent) => void;
}

const CardList = ({
  searchResults,
  onPortofolioCreate
}: Props) => {
  return (
    <>
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return <Card 
          id={result.symbol} 
          key={uuidv4()} 
          searchResult={result}
          onPortofolioCreate={onPortofolioCreate}
          />
        })
      ): (
        <p className='mb-3 mt-3 text-xl font-semibold text-center md:text-xl'>
          No results
        </p>
      )}
    </>
  )
}

export default CardList