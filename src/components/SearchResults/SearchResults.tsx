import React, { FC } from 'react'
import { JsxElement } from 'typescript'
import { IPData } from '../../types/ipData';

type Props = {
  ipData: IPData
}

const SearchResults: FC<Props> = ({ ipData }) => {

  const mockIP = ipData;

  const jsxResults = Object.entries(mockIP).map(([key, val], index) => {
    if (key != "lat" && key != "lng") {
      return (
        <React.Fragment key={key}>
          <div className="flex-1 flex flex-col items-start relative px-5">
            <p className='uppercase text-gray-500 text-xs font-semibold w-max'>{key}</p>
            <p className='text-black font-bold text-base'>{val}</p>
          </div>
  
          <div className='h-14 w-[1px] bg-gray-300 last:hidden'></div>
        </React.Fragment>
      );
    }
  })

  return (
    <div className='bg-white w-[80%] py-6 px-1 shadow-lg rounded-lg absolute -bottom-[3.5rem] flex z-20'>
      {jsxResults}
    </div>
  )
}

export default SearchResults