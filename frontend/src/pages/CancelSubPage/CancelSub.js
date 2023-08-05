import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { UserAuth } from '../../context/AuthContext';
import './styles.css'

function CancelSub() {
    const { user } = UserAuth();
    const navigate = useNavigate();
    return (
        <div className='body1'>
            <Navbar />
            <div className='grid h-screen place-items-center '>
                <div class="max-w-sm rounded overflow-hidden shadow-lg">

                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Sorry {user.displayName} We were not able to process your payment</div>
                        <p class="text-gray-700 text-base">
                            You can try again with a different card or contact your bank for more information.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <button onClick={() => {
                            navigate('/billing')
                        }} class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Would you like to Re-Try?</button>

                    </div>
                </div>
            </div></div>
    )
}

export default CancelSub