import React, { FC, useState } from 'react'

interface Props {
  onSearch: (ip: string) => Promise<void>
}

const SearchBar: FC<Props> = ({ onSearch }) => {

  const [input, setInput] = useState("")

  const handleSubmit = () => {
    onSearch(input);
    setInput("");
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  return (
    <div className='flex'>
      <input
        className='h-10 w-96 px-3 rounded-lg rounded-r-none'
        type="text" 
        name="input" 
        placeholder='Search for any IP address or domain'
        onChange={handleOnChange}
      />
      <button className='bg-black h-10 w-10 rounded-lg rounded-l-none inline-flex items-center justify-center' onClick={handleSubmit}>
        <img className='w-2' src="icon-arrow.svg" alt="ChevronIcon" />
      </button>
    </div>
  )
}

export default SearchBar