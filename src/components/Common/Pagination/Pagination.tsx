import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/react/20/solid';

interface PaginationProps {
    totalPages: number,
    currentPage: number,
    rowPerPage: number,
    setRowPerPage: Function,
    setCurrentPage: Function,
    className:string,
}

const numberOfRows = [10, 20, 50, 100];

export default function Pagination({totalPages, currentPage, rowPerPage, setRowPerPage, setCurrentPage, className }: PaginationProps) {
    let pageNumber =currentPage;
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }
    return (
        <div className={`flex items-center justify-between min-w-full mt-4 mb-20 ${className}`}>
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{Number(currentPage)}</span> to <span className="font-medium">{Number(totalPages)}</span> of{' '}
                        <span className="font-medium">{Number(rowPerPage)}</span> results
                    </p>
                </div>
                <div className=''>
                    <p className="text-sm text-gray-700">
                        Rows per page:{" "}
                        <select
                            value={String(rowPerPage)}
                            onChange={(e) => setRowPerPage(e.target.value)}
                            className="mt-2 bg-white shadow-lg rounded-md border-0 py-1.5 pl-2 text-gray-900 ring-1 ring-inset ring-gray-300  sm:text-sm sm:leading-6"
                        >
                            {numberOfRows.map(el => <option value={el}>{el}</option>)}
                        </select>
                    </p>
                </div>
                <div>
                    <nav className="flex items-center justify-between border-t border-gray-200 py-4 px-4 sm:px-0 w-full">
                        <div className="flex">
                            <button
                                onClick={() => handlePageChange(pageNumber - 1)}
                                className={`flex items-center text-xs md:text-sm lg:text-base font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 ${pageNumber <= 1 ? 'opacity-0 pointer-events-none' : ''
                                    }`}
                            >
                                <ChevronLeftIcon
                                    className="mr-3 h-5 w-5 text-gray-600"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                   
                        <div className="hidden md:flex space-x-2 items-center">
                            {[...Array(totalPages)].map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handlePageChange(idx + 1)}
                                    className={`text-xs md:text-sm lg:text-base font-medium ${pageNumber === idx + 1
                                            ? 'bg-blue-700 text-white px-3'
                                            : 'text-gray-500 hover:text-gray-700'
                                        }  p-1 rounded-md`}
                                >
                                    {idx + 1}
                                </button>
                            ))}
                        </div>
                        <div className="flex">
                            <button
                                onClick={() => handlePageChange(pageNumber + 1)}
                                className={`flex items-center text-xs md:text-sm lg:text-base font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300 ${pageNumber >= totalPages ? 'opacity-0 pointer-events-none' : ''
                                    }`}
                            >
                                <ChevronRightIcon
                                    className="ml-3 h-5 w-5 text-gray-600"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
