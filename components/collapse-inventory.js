import React, { useState } from 'react'

const ProductInfo = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <prod className=''>
      <header>
        <h4 onClick={() => setExpanded(!expanded)} className='mx-auto text-left pl-7 text-white bg-purple-800'>
          ID : {title}
        </h4>
        {/* <button className='' onClick={() => setExpanded(!expanded)}>
        </button> */}
      </header>
        <div className="bg-green-600">
            <div className='text-black'>
            <span className=''>{expanded && <p className='p-4'>{info}</p>}</span>
            </div>
        </div>
    </prod>
  )
}

export default ProductInfo