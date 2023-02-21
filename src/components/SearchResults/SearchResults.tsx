import React, { FC } from 'react'
import { JsxElement } from 'typescript'
import { IPData } from '../../types/ipData';
import { IPProps } from '@/types/IPProps';

const SearchResults: FC<IPProps> = ({ ipData }) => {

  const jsxResults = Object.entries(ipData).map(([key, val], index) => {
    if (key != "lat" && key != "lng") {
      return (
        <React.Fragment key={key}>
          <div className="flex-1 flex flex-col items-center tablet:items-start relative px-5 py-3 tablet:py-0">
            <p className='uppercase text-gray-500 text-xs font-semibold w-max'>{key}</p>
            <p className='text-black font-bold text-base'>{val}</p>
          </div>


          <div className='h-14 w-[1px] bg-gray-300 last:hidden hidden tablet:block'></div>
        </React.Fragment>
      );
    }
  })

  return (
    <div className='bg-white w-[85vw] py-2 tablet:py-6 px-1 shadow-lg rounded-lg absolute -bottom-[0] translate-y-[55%] flex flex-col items-center z-20 tablet:flex-row'>
      {jsxResults}
    </div>
  )
}

export default SearchResults