

import { XMarkIcon } from '@heroicons/react/24/outline';
import React from 'react';

interface StatusProps {
  status: string;
  onClick:any
}

function classNames(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(' ');
}

function Chip({ status, onClick }: StatusProps) {
  return (
    <div  className={classNames(
        'rounded-full py-1 px-2 text-xs text-[#5d6679] ring-1 ring-[#5d6679] flex items-center mr-3'
      )}>
      {status.toUpperCase()}
    <XMarkIcon className='ml-2 w-4 h-4 font-bold' cursor={'pointer'} onClick={onClick}/>
    </div>
  );
}

export default Chip;