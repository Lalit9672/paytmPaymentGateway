import React, { useEffect, useState } from 'react'
import { db } from './firebase'

const PaymentStatus = ({match}) => {
const[values,setValues]=useState({
    success:false,
    error:false
})

useEffect(() => {
    getStatus();
}, [])
const{success,error}=values
const getStatus=()=>
{
    db.collection('payments').doc('mPDd5z0pNiInbSIIotfj').get().then(doc=>{
        if(doc)
        {
            doc.data().paymentHistory.map((data)=>{
                if(data.ORDERID===match.params.orderId)
                {
                    if(data.STATUS==='TXN_SUCCESS')
                    {
                        setValues({...values,success:true,error:false})
                    }
                    
                }
                else
                {
                    setValues({...values,success:false,error:"Payment Failed"})
                }
            })
        }
    })
}


    return (
        <div>
            {
                success && <h1>Payment Succesfully</h1>
            }
            {
                error && <h1>{error}</h1>
            }
        </div>
    )
}

export default PaymentStatus
