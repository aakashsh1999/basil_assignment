/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import documentImage from '../assets/images/document.png'
import gridImage from '../assets/images/grid.png';
import Stats from '../components/Common/Stats/Stats';
import Table from '../components/Common/Table/Table';
import Chip from '../components/Common/Status/Chip';
import FilterModal from '../components/Common/FiltersModal/FilterModal';
import { resetState, setMachineFilterData, setStatusFilter } from '../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';



function Orders() {
    const [open, setOpen] = useState(false)
    const data = useSelector((state:any) => state.data)
    console.log(data)
    const dispatch = useDispatch()
    return (
        <div className='h-auto max-w-full'>
            <div className='flex justify-between items-center my-6'>
                <div className="relative mr-4 rounded-lg shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Search"
                    />
                </div>

                <div className="flex flex-row mr-6">
                    <div className='w-10 h-10 mr-4'>
                        <img src={gridImage} className="p-1 bg-white  border-2 border-gray-200 rounded-md " />
                    </div>
                    <div className='w-10 h-10'>
                        <img src={documentImage} className="p-1 bg-white  border-2 border-gray-200 rounded-md" />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-x-4'>
                <div className='col-span-4'>
                    <Stats />
                    <Table></Table>
                </div>
                <div className='px-4 sm:px-6 lg:px-10 rounded-bl-xl bg-white rounded-xl shadow-lg py-8 h-[50vh]'>
                    <div className='text-center font-semibold mx-auto'>FILTER</div>
                    <div className='flex my-6 items-center'>
                        <div
                         onClick={() =>setOpen(!open)}
                         className={
                            
                            'text-[#5d6679] ring-[#5d6679] rounded-md py-2 px-2 text-xs font-bold ring-1 ring-inset hover:bg-[#5d6679] hover:text-white cursor-pointer'}>
                            Select Filters
                        </div>
                    
                        <div 
                         onClick={() => { setOpen(false)}}
                         className={
                            'underline font-medium ml-24 text-xs cursor-pointer  text-[#5d6679]'}>
                            Clear All
                        </div>
                    </div>
                    <div className='flex items-center justify-start'>
                    <div className={
                        'text-[#5d6679] py-2 px-2 text-md font-bold '}>
                        Date From: 
                    </div>
                    {data?.dateObject[0]?.startDate && <Chip status={new Date(data?.dateObject[0].startDate).toLocaleString().split(",")[0]}/>}
                    </div>
                    <div className='flex items-center justify-start mt-2'>
                    <div className={
                        'text-[#5d6679] py-2 px-2 text-md font-bold'}>
                        Date To: 
                    </div>
                    {data?.dateObject[0]?.endDate && <Chip status={new Date(data?.dateObject[0].endDate).toLocaleString().split(",")[0]}/>}
                    </div>
                    <div className='flex items-center justify-start mt-2 flex-wrap'>
                     <div className={
                        'text-[#5d6679] py-2 px-2 text-md font-bold'}>
                        Status: 
                    </div>
                {data.statusFilter.length>0  ? data.statusFilter.map(el=><Chip status={el} onClick={() =>{}}/>) : "N/a"}
                    </div>
                    <div className='flex items-center justify-start mt-2 flex-wrap'>
                    <div className={
                        'text-[#5d6679] py-2 px-2 text-md font-bold'}>
                        Machines: 
                    </div>
                    {data.machineFilterData.length > 0  ? data.machineFilterData.map(el=><Chip status={el} onClick={dispatch(setMachineFilterData(el))}/>) : "N/a"}
                    </div>
                    <div className={
                            'underline font-medium ml-24 text-xs cursor-pointer mt-4 text-[#5d6679]'}>
                            See more
                        </div>
                </div>

            </div>
            <FilterModal open={open} setOpen={setOpen}/>
        </div>
    )
}

export default Orders