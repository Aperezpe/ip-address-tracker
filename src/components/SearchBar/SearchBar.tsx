import { isIPAddress } from 'ip-address-validator'
import React, { FC, useState } from 'react'

interface Props {
  onSearch: (ip: string) => Promise<void>
}

const SearchBar: FC<Props> = ({ onSearch }) => {
  const [input, setInput] = useState("")
  const [validIP, setValidIP] = useState(true)

  const handleSubmit = () => {
    if (isIPAddress(input)) {
      onSearch(input);
      setValidIP(true)
    } else {
      setValidIP(false)
    }
  }
  
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)

  }

  return (
    <div className='flex flex-col'>
      <div className='flex h-12'>
        <input
          className='w-[70vw] tablet:max-w-md px-3 rounded-lg rounded-r-none'
          type="text" 
          name="input" 
          placeholder='Search for any IP address or domain'
          onChange={handleOnChange}
          value={input}
        />
        <button className='bg-black w-12 rounded-lg rounded-l-none inline-flex items-center justify-center' onClick={handleSubmit}>
          <img className='w-2' src="icon-arrow.svg" alt="ChevronIcon" />
        </button>
      </div>
      {!validIP && <p className='text-red-500 font-semibold'>Invalid IP address</p>}
    </div>
  )
}

export default SearchBar