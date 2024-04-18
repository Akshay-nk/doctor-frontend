import React, { useEffect, useState } from 'react';
// import './Checkout.css';
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useNavigate, useParams } from 'react-router-dom';
import { bookingAPI } from '../../services/allApi';

const Checkout = ({ doctor }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);
    //const [token, setToken] = useState()

    const navigate = useNavigate()

    const token=sessionStorage.getItem("token")
   
       



    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    }

    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: doctor.ticketPrice.toString(),
                        currency_code: currency
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;

            //booking  the ticket 

            handleBooking()

           //alert(`Transaction completed by ${name}`);
            navigate('/success')




        });
}



    let params = useParams()
    const id = params.id;


    const handleBooking = async () => {
        try {
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            };
           
            const result = await bookingAPI(id,reqHeader);
    
            if (result.status === 200) {
                console.log(result.data);
            } else {
                console.error("Unexpected status code:", result.status);
                console.error("Response data:", result.data);
            }
        } catch (error) {
            console.error("An error occurred during the booking request:", error);
        }
    };
    



    return (
        <div className="checkout">
            {isPending ? <p>LOADING...</p> : (
                <>
                    <select value={currency} onChange={onCurrencyChange}>
                        <option value="USD">💵 USD</option>
                        <option value="EUR">💶 Euro</option>
                        <option value="INR">RUPEES</option>
                    </select>
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                    />
                </>
            )}
        </div>
    );
}

export default Checkout;