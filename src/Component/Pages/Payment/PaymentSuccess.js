import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
    const location = useLocation()
    const transactionId = new URLSearchParams(location.search).get("transactionId")
    console.log(transactionId)

    const {data: order = [], refetch} = useQuery({
        queryKey: ["order", transactionId],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:5000/payment/transaction/${transactionId}`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='px-10'>
        <div className="overflow-x-auto w-full lg:my-44">
            <table className="table w-full ">
                <thead>
                    <tr>

                        <th>My order</th>
                        <th>TransactionID</th>
                        <th>Time</th>
                        <th>Amount</th>
                        <th>Paid</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{}</td>
                        <td>{order.transactionId}</td>
                        <td>{}</td>
                    </tr>
                </tbody>


            </table>
        </div>
    </div>
    );
};

export default PaymentSuccess;