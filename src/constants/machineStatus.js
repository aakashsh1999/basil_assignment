import sucess from '../assets/images/status/succes.png'
import pending from '../assets/images/status/pending.png'
import sent from '../assets/images/status/sent.png'
import failure from '../assets/images/status/failure.png'
import refund from '../assets/images/status/refund.png'
import completed from '../assets/images/status/completed.png'

export const machineStatus = [
    {
        status: 'Success',
        icon_url: sucess
    },
    {
        status: 'Pending',
        icon_url: pending
    },
    {
        status: 'Sent',
        icon_url: sent
    },
    {
        status: 'Failure',
        icon_url: failure
    },
    
    {
        status: 'Refund Initiated',
        icon_url: refund
    },
    {
        status: 'Refund Completed',
        icon_url: completed
    }
];