import React from 'react';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51Jw8VHAH1cPW03O7EGWztDmhnkD8HTtvhtRuoHbSBegsAYP8FEYHzhfeiC9oOaZRBMvPA3vP3sKZYNhfK66ZrUKE00gtTI9Q1w')

const Payment = () => {
    const { appointmentId } = useParams()
    const [appointment, setAppointment] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])
    return (
        <div>
            <h2> {appointment.patientName} for {appointment.serviceName}</h2>
            <h4>Pay : ${appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payment;