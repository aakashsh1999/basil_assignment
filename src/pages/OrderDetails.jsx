import React from 'react'
import { useParams } from 'react-router-dom';
import documentImage from '../assets/images/document.png'
import gridImage from '../assets/images/grid.png';
import skipIcon from '../assets/images/skip.png'
import { tableData } from '../userdata';
import Status from '../components/Common/Status/Status';
import CustomerTable from '../components/Common/Table/CustomerTable';

function OrderDetails() {
    const { order_id } = useParams();
    const orderItem = tableData.find(el => el.order_id === order_id)
    return (
        <div className='h-auto max-w-full'>
            <div className='flex justify-end items-center my-6'>
                <button
                    type="button"
                    className="inline-flex  justify-center rounded-md bg-[#377Ddf] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400 sm:col-start-2 mr-4"
                >
                    <img src={skipIcon} className="w-4 w-4 mr-2" />
                    Refund complete order
                </button>
                <div className="flex flex-row mr-6">
                    <div className='w-10 h-10 mr-4 cursor-pointer'>
                        <img src={gridImage} className="p-1 bg-white  border-2 border-gray-200 rounded-md " />
                    </div>
                    <div className='w-10 h-10 cursor-pointer'>
                        <img src={documentImage} className="p-1 bg-white  border-2 border-gray-200 rounded-md" />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-7  gap-x-8 px-12 '>
                <div className="col-span-2 inline-block min-w-full py-4 sm:px-6 lg:px-8 bg-white rounded-xl shadow-lg ">
                    <div className='flex justify-between'>
                        <a
                            href={
                                '#'
                            }
                            className="text-xl font-bold text-blue-700 hover:text-gray-700"

                        >
                            {order_id}
                        </a>
                        <div className='mr-12'>
                        <Status status={orderItem?.status || ''} />
                        </div>
                    </div>
                    <div className='w-full flex items-start mt-6 mb-2'>
                        <span className="text-md font-medium text-gray-500 uppercase">Basic Information</span>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className="min-w-0 items-start flex flex-col mb-4">
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Date and Time</p>
                            <p className="text-sm font-semibold leading-6 text-gray-900">{orderItem.date}</p>
                        </div>
                        <div className="min-w-0 items-start flex flex-col mb-4">
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Machine</p>
                            <p className="text-sm font-semibold leading-6 text-gray-900">{orderItem.machine_name.split(" ")[0] +" "+ orderItem.machine_name.split(" ")[1] +" "+orderItem.machine_name.split(" ")[2]}  <span className="text-[#B0A6A6]"> {orderItem.machine_name.split(" ")[3]}</span></p>
                        </div>
                    </div>
                    <div className='w-full flex items-start mt-6 mb-2'>
                        <div className="text-md font-medium text-gray-500 uppercase">Order Summary</div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className="min-w-0 items-start flex flex-col mb-4">
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Payment ID</p>
                            <p className="text-sm font-semibold leading-6 text-gray-900">TXI042480129480</p>
                        </div>
                        <div className="min-w-0 items-start flex flex-col mb-4">
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Amount</p>
                            <p className="text-sm font-semibold leading-6 text-gray-900">{parseInt(orderItem.total_amount)}</p>
                        </div>
                        
                    </div>
                     <div className='w-full flex items-start mt-6 mb-2'>
                        <div className="text-md font-medium text-gray-500 uppercase">Customer Information</div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className="min-w-0 items-start flex flex-col mb-4">
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Name</p>
                            <p className="text-sm font-semibold leading-6 text-gray-900">{orderItem.customer_name}</p>
                        </div>
                        <div className="min-w-0 items-start flex flex-col mb-4">
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Contact Number</p>
                            <p className="text-sm font-semibold leading-6 text-gray-900">{orderItem.contact_number}</p>
                        </div>
                        <div className="min-w-0 items-start flex flex-col mb-4">
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Email</p>
                            <p className="text-sm font-semibold leading-6 text-gray-900">{orderItem.customer_name}@basil.health</p>
                        </div>
                    </div>
                    <div className='w-full flex items-start mt-6 mb-2'>
                        <div className="text-md font-medium text-gray-500 uppercase">Refund Information</div>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className="min-w-0 items-start flex flex-col mb-4">
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">Refund Transaction ID</p>
                            <p className="text-sm font-semibold leading-6 text-gray-900">TXI042480129480</p>
                        </div>
                    </div>
                </div>
                <CustomerTable />
            </div>
        </div>

    )
}

export default OrderDetails