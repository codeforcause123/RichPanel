import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../context/AuthContext';
import { DataStore } from '../../context/DataContext';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import './styles.css'
import Navbar from '../../components/Navbar/Navbar';
function PlanDetails() {
    const { user } = UserAuth();
    const { updatePlan, getCustomerData } = DataStore();
    const [cancelTime, setCancelTime] = useState("")
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();
    useEffect(() => {

        const res = getCustomerData()
        console.log(res)
        setUserData(res)


    }, [])

    const cancelSub = async () => {
        const res = await axios.post('https://richpanel-backend-test.herokuapp.com/cancel', {
            custID: userData.stripeID
        })
        console.log(res.data)
        const unixTimestamp = res.data.canceled_at

        const milliseconds = unixTimestamp * 1000 // 1575909015000

        const dateObject = new Date(milliseconds)

        const humanDateFormat = dateObject.toLocaleString()
        updatePlan(userData.email)
        setCancelTime(humanDateFormat);
        setUserData({ ...userData, plan: "None", cancelTime: res.data.canceled_at, isActive: false })
    }

    return (
        < div className='body4'>
            <Navbar />

            <div className='grid h-screen place-items-center '>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">

                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{cancelTime && <>Sorry {user.displayName} your plan is cancelled</> || <>Welcome to your plan {user.displayName}</>}</div>
                        <p class="text-gray-700 text-base">
                            {cancelTime && <p>Your subscription was canceled at {cancelTime}</p> || <> You have opted for the plan, {userData.plan} and thus will get benifits accordingly. </>}
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <button onClick={async () => {
                            const s = await getCustomerData(user.email)
                            setUserData(s)
                            console.log(s)
                        }} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Re-Fetch Your Details</button>
                        {!cancelTime && <button onClick={cancelSub} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Cancel You Plan?</button> ||
                            <button onClick={() => {
                                navigate('/billing')
                            }} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Resubscribe?</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlanDetails
