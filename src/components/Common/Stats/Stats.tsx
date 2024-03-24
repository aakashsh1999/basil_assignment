import React from 'react'

function Stats() {
  return (
    <div className='bg-white rounded-xl shadow-lg py-8 flex justify-between '>
    <p className="flex-auto py-0.5 text-md leading-5 text-gray-500">
        <span className="text-gray-900 font-semibold">Machines:</span> <span className=' text-black'>6</span></p>
    <p className="flex-auto py-0.5 text-md leading-5 text-gray-500">
        <span className=" text-gray-900 font-semibold">Customers:</span> <span className=' text-black'>28</span></p>
    <p className="flex-auto py-0.5 text-md leading-5 text-gray-500">
        <span className=" text-gray-900 font-semibold">Drinks: </span> <span className=' text-black'> 28</span></p>
    <p className="flex-auto py-0.5 text-md leading-5 text-gray-500">
        <span className=" text-gray-900 font-semibold">Customers:</span> <span className=' text-black'>&nbsp;28</span></p>
    <p className="flex-auto py-0.5 text-md leading-5 text-gray-500">
        <span className=" text-gray-900 font-semibold">Total Amount:</span> <span className=' text-black'>&nbsp;₹  25999</span></p>
    <p className="flex-auto py-0.5 text-md leading-5 text-gray-500">
        <span className=" text-gray-900 font-semibold">Refunds Initiated:</span> <span className=' text-black'>3</span></p>
</div>
  )
}

export default Stats