import { useState, useEffect } from "react";
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import { ColDef, GridReadyEvent } from 'ag-grid-community'; // Importing ColDef and GridReadyEvent from ag-grid-community
import { tableData } from "../../../userdata";
import Status from "../Status/Status";
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import customerdata from '../../../constants/customerdata.json'

const CustomerTable = () => {


    return (
        <div className="col-span-5 bg-white rounded-xl shadow-lg 
     h-[42vh]
         ">
    
            <h2 className="text-md pt-6 pb-4 text-[#5d6679] uppercase flex px-8">Order Details</h2>
            <div className="inline-block min-w-full py-2  sm:px-6 
            h-auto lg:px-8">
                <table className="min-w-full ">
                    <thead>
                        <tr>
                            {
                                Object.keys(customerdata[0]).map(el =>
                                    el === 'drink_image_url' ? null : <th scope="col" key={el} className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-primary sm:pl-0 cursor-pointer "
                                    >
                                        <div className="flex items-start">
                                            <div>
                                                <div className=" font-semibold">
                                                    {el.toUpperCase().split("_").join(" ")}
                                                </div>
                                            </div>
                                        </div>


                                    </th>)
                            }
                        </tr>
                    </thead>
                    <tbody className="">
                        {customerdata.map((el: any, index:number) => (
                            <tr key={el.id}>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                    <div className="flex items-start gap-x-3">
                                        {el.id}
                                    </div>
                                </td>
                                <td className="whitespace-nowrap py-4  pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                    <div className="flex items-center">
                                    <img className="h-8 w-8 mr-3 flex-none rounded-full bg-gray-50" src={   'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'} alt="" />
                                        <div className="flex items-start gap-x-3">
                                            <div className="text-sm font-medium leading-6 text-gray-900">{el.drink_name}</div>
                                        </div>

                                    </div>
                                </td>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                    <div className="flex items-start">
                                        {el.customization}
                                    </div>
                                </td>
                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                    <div className="flex flex-col">
                                        <div className="flex items-start gap-x-3">
                                            <div className="text-sm font-medium leading-6 text-gray-900"> ₹ {parseInt(el.amount)}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4">
                                    <Link to={`#`} className="flex items-start cursor-pointer"
                                    >
                                        <Status status={el.drink_status} />
                                    </Link>
                                </td>
                                <td className="py-4">
                                    <div className="flex items-start">
                                    <button
                                        type="button"
                                        className={`inline-flex justify-center rounded-md px-3 py-2 text-sm font-medium shadow-sm sm:col-start-2 mr-4 ${
                                            index % 2 === 0 ? 'bg-gray-300  text-white cursor-not-allowed' : 'bg-[#377Ddf] text-white hover:bg-blue-400'
                                        }`}
                                        disabled={index % 2 === 0} // Disable if index is divisible by 2
                                    >
                                        Refund
                                    </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default CustomerTable;
