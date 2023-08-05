import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { UserAuth } from '../../context/AuthContext'
import { DataStore } from '../../context/DataContext'
import BillCard from './BillCard';
import './style.css'

function BillingPage() {
    const { logOut, user } = UserAuth();
    const { plans, getData } = DataStore()
    // const [plans, setPlans] = useState([{}])
    const [isMonthly, setIsMonthly] = useState(true)
    const navigate = useNavigate();
    const i = 3;
    useEffect(() => {
        if (!user) {
            window.location.reload()
        }
    })
    const toggleButton = () => {
        setIsMonthly(!isMonthly)
        console.log(isMonthly);
    }


    return (
        <div className='body' >
            <Navbar />
            <section
                class="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] body "
            >
                <div class="-mx-4 flex flex-wrap">
                    <div class="w-full px-4">
                        <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                            <span class="mb-2 block text-lg font-semibold text-primary">
                                Pricing Table
                            </span>
                            <h2
                                class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]"
                            >
                                Our Pricing Plan
                            </h2>
                            <p class="text-base text-body-color">
                                There are many variations of Plans that are avaialble and can be used by anyone and everyone
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container">

                    <button onClick={toggleButton} type="button" class="inline-block ml-20 px-6 py-2.5 bg-purple-500 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">{isMonthly ? "Monthly" : "Yearly"}</button>


                    <div class="-mx-4 content-evenly ml-10 flex">

                        {plans && plans.map((plan, key) => {
                            console.log(plan['Monthly Price'])
                            return <BillCard planName={plan["name"]} monthlyPrice={plan["Monthly Price"]} yearlyPrice={plan["Yearly Price"]} user={user} isMonthly={isMonthly} />

                        })}


                    </div>
                </div>

            </section >

        </div >
    )

}

export default BillingPage