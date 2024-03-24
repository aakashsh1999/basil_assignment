import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { ExclamationTriangleIcon, XMarkIcon } from '@heroicons/react/24/outline'
import MachineTable from '../Table/MachineTable'
import { machineStatus } from '../../../constants/machineStatus'
import { DateRangePicker } from 'react-date-range';
import { calculateNumberOfDays } from '../../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { resetState, setDate, setStatusFilter } from '../../../redux/slices/filterSlice'

interface FitlterModaProps {
  open: boolean,
  setOpen: any
}

export default function FilterModal({ open, setOpen }: FitlterModaProps) {

  const dispatch = useDispatch()

  const data = useSelector((state: any) => state.data.dateObject)
  const statusData = useSelector((state: any) => state.data.statusFilter)

  

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setOpen(true)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed  inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-6 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-red-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                </div>
                <h2 className="flex justify-center font-bold text-lg uppercase">Filter</h2>
                <div className="sm:flex flex-col px-4">
                  <input
                    type="text"
                    name="search"
                    id="email"
                    className="block w-full rounded-xl border-0 my-4 py-2 px-6 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Search"
                  />

                  <MachineTable />
                  <h2 className="text-xs font-semibold mt-8 uppercase">status</h2>
                  <div className='flex flex-wrap justify-between gap-x-8'>
                    {
                      machineStatus.map(el => {
                        return <div className={`ring-1 ring-[#CED4DA] mt-4 p-4 rounded-xl w-28 h-24 cursor-pointer hover:text-black hover:bg-[#ced4da] ${statusData.includes(el.status) ? "text-black bg-[#ced4da]" : ""}`}
                          onClick={() => dispatch(setStatusFilter(el.status))}>
                          <img src={el.icon_url} w-6 h-6 alt="" />
                          <h3 className='text-sm mt-1'>{el.status}</h3>
                        </div>
                      })
                    }
                  </div>
                </div>
                <h2 className="text-xs font-semibold my-8 uppercase px-4">Date Range</h2>
                <div className='ring-1 ring-gray-400 py-8 rounded-xl'>
                  <DateRangePicker
                    onChange={(item: any) => dispatch(setDate(item.selection))}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={data}
                    direction="horizontal"
                  />

                  <div className='flex justify-center'>
                    <h2 className='text-sm font-medium'>Range: &nbsp;</h2> <h2 className='text-sm font-semibold'> {calculateNumberOfDays(data[0]?.startDate, data[0]?.endDate)} Days</h2>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse justify-between items-center">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-[#377DFF]  text-sm font-medium text-white shadow-sm hover:bg-blue-400 sm:ml-3 sm:w-auto px-12 py-1 items-center"
                    onClick={() => setOpen(false)}
                  >
                    Apply
                  </button>
                  <div className={
                    'underline font-medium ml-3 text-xs cursor-pointer  text-[#5d6679]'}
                    onClick={() => {dispatch(resetState()); setOpen(false)}}
                  >
                    Clear All
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
