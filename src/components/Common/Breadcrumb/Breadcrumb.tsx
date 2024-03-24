

import { HomeIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function Breadcrumb() {
    const [pages, setPages] =useState('')
    const { order_id } = useParams();
    
    console.log(order_id, 'workifgn')
    
    useEffect(() =>{
        if(order_id){
            setPages(order_id)
        }else{
            setPages('')
        }
    }, [])

    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-2">
                <li>
                    <div>
                        <a
                            href={
                                '#'
                            }
                            className="text-sm font-medium text-blue-700 hover:text-gray-700"

                        >
                            All Orders
                        </a>
                    </div>
                </li>
                   {pages && <li >
                        <div className="flex items-center">
                            <svg
                                className="h-5 w-5 flex-shrink-0 text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                            </svg>
                            <a
                                href={'#'}
                                className="text-sm font-medium text-blue-700 hover:text-gray-700"
                            >
                                {pages}
                            </a>
                        </div>
                    </li>}
            </ol>
        </nav>
    )
}
