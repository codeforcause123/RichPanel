import React from 'react'
import axios from 'axios'
import { DataStore } from '../../context/DataContext'
function BillCard({ planName, monthlyPrice, yearlyPrice, isMonthly, user }) {
    const baseUrl = "https://richpanel-one.vercel.app/checkout"
    const { addCustomerData } = DataStore();
    var tabletOpacity = "opacity-100"
    var mobileOpacity = "opacity-100"
    var desktopOpacity = "opacity-100"
    var tvOpacity = "opacity-100"
    var videoQuality = "4K"

    var resolution = "1080p"

    var star3 = "opacity-100"
    var star4 = "opacity-100"
    var activeScreens = ""
    var descText = ""
    var resoDescText = ""
    switch (planName) {
        case "Mobile":
            tabletOpacity = "opacity-20"
            mobileOpacity = "opacity-100"
            desktopOpacity = "opacity-20"
            tvOpacity = "opacity-20"
            videoQuality = "Good"
            resolution = "480p"
            activeScreens = "One"
            star3 = "opacity-20"
            star4 = "opacity-20"
            descText = "Perfect for the people who want to watch their favorite shows, on the go"
            resoDescText = "(great for mobile devices)"
            break;
        case "Basic":
            mobileOpacity = "opacity-100"
            desktopOpacity = "opacity-20"
            tvOpacity = "opacity-20"
            tabletOpacity = "opacity-100"
            videoQuality = "Good"
            resolution = "480p"
            activeScreens = "One"
            star3 = "opacity-20"
            star4 = "opacity-20"
            descText = "Perfect for the people who want share their significant others"
            resoDescText = "(great for tablet devices)"
            break;
        case "Standard":
            mobileOpacity = "opacity-100"
            desktopOpacity = "opacity-100"
            tvOpacity = "opacity-20"
            tabletOpacity = "opacity-100"
            videoQuality = "Better"
            resolution = "1080p"
            activeScreens = "Two"
            star3 = "opacity-100"
            star4 = "opacity-20"
            descText = "Perfect for the people who want to watch their favorite shows with thier family"
            resoDescText = "(great for desktop devices)"
            break;
        case "Premium":
            mobileOpacity = "opacity-100"
            desktopOpacity = "opacity-100"
            tvOpacity = "opacity-100"
            tabletOpacity = "opacity-100"
            videoQuality = "Best"
            resolution = "4K+HDR"
            activeScreens = "Four"
            star3 = "opacity-100"
            star4 = "opacity-100"
            descText = "Perfect for the power users who want best of everything"
            resoDescText = "(great for TV devices)"
            break;
        default:
            break;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post('https://richpanel-one.vercel.app/checkout', {
            name: user.displayName,
            email: user.email,
            desc: 'test customer',
            product: planName.toLowerCase(),
            isMonthly: isMonthly

        })
        console.log(res.data)
        const customerData = {
            name: user.displayName,
            email: user.email,
            isActive: true,
            plan: planName.toLowerCase() + (isMonthly ? " Monthly" : " Yearly"),
            stripeID: res.data.stripeID,
            subID: res.data.subID,

        }
        await addCustomerData(customerData)
        window.location.replace(res.data.url)
    }

    return (

        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div
                className="relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 shadow-pricing sm:p-12 lg:py-10 lg:px-6 xl:p-12"
            >
                <span className="mb-4 ml-1 block text-2xl font-bold text-primary">
                    {planName}
                </span>
                <h2 className="mb-5 text-[42px] font-bold text-dark">
                    {isMonthly ? monthlyPrice : yearlyPrice}
                    <span className="text-base font-medium text-body-color">
                        /{isMonthly ? '/month' : '/year'}
                    </span>
                </h2>
                <p
                    className="mb-8 border-b border-[#F2F2F2] pb-8 text-base text-body-color"
                >
                    {descText}
                </p>
                <div className="mb-7">
                    <div className="mb-1 text-base leading-loose bg-blue inline-flex">
                        <p className='border-red-200 mr-10 text-2xl font-bold p-1'> Video Quality</p>
                        <div className='p-2 text-lg'>
                            {videoQuality}

                        </div>
                        <div className='inline-flex'>

                            <p className='pt-3 pl-1 opacity-100'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>

                            </p>      <p className='pt-3 pl-1 opacity-100'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>

                            </p>
                            <p className={'pt-3 pl-1 ' + star3}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>

                            </p>
                            <p className={'pt-3 pl-1 ' + star4}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                                </svg>

                            </p>



                        </div>

                    </div>
                    <div className="mb-1 text-base leading-loose bg-blue inline-flex">
                        <p className='border-red-200 mr-10 text-2xl font-bold p-1'> Resolution</p>
                        <div className='p-2 ml-8 text-lg inline-flex'>
                            {resolution}  <p className='ml-2 mt-1 text-xs'>{resoDescText}</p>

                        </div>
                    </div>
                    <div className="mb-1 text-base leading-loose bg-blue inline-flex">
                        <p className='border-red-200 mr-10 text-2xl font-bold p-1'> Active Screens</p>
                        <div className='p-2 ml-8 text-lg inline-flex'>
                            {activeScreens}

                        </div>
                    </div>
                    <div className="mb-1 text-base leading-loose bg-blue inline-flex">
                        <p className='border-red-200 mr-10 text-2xl font-bold p-1'> Supported Devices</p>
                        <div className='p-2 mr-5 mt-4 text-lg inline-flex'>
                            <p className='ml-2 mt-1 text-xs'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>
                            </p>
                            <p className={'mt-2 ml-2 ' + tabletOpacity}><span className="material-symbols-outlined">
                                tablet
                            </span></p>
                            <p className={'mt-2 ml-2 ' + desktopOpacity}>
                                <span className="material-symbols-outlined">
                                    laptop_mac
                                </span>
                            </p>
                            <p className={'mt-2 ml-2 ' + tvOpacity}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
                            </svg>
                            </p>
                        </div>
                    </div>


                </div>
                <button
                    onClick={handleSubmit}

                    className="block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-white"
                >
                    Choose {planName}
                </button>

                <div>
                    <span className="absolute right-0 top-7 z-[-1]">
                        <svg
                            width="77"
                            height="172"
                            viewBox="0 0 77 172"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                            <defs>
                                <linearGradient
                                    id="paint0_linear"
                                    x1="86"
                                    y1="0"
                                    x2="86"
                                    y2="172"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stop-color="#3056D3" stop-opacity="0.09" />
                                    <stop
                                        offset="1"
                                        stop-color="#C4C4C4"
                                        stop-opacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </span>
                    <span className="absolute right-4 top-4 z-[-1]">
                        <svg
                            width="41"
                            height="89"
                            viewBox="0 0 41 89"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <circle
                                cx="38.9138"
                                cy="87.4849"
                                r="1.42021"
                                transform="rotate(180 38.9138 87.4849)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.9138"
                                cy="74.9871"
                                r="1.42021"
                                transform="rotate(180 38.9138 74.9871)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.9138"
                                cy="62.4892"
                                r="1.42021"
                                transform="rotate(180 38.9138 62.4892)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.9138"
                                cy="38.3457"
                                r="1.42021"
                                transform="rotate(180 38.9138 38.3457)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.9138"
                                cy="13.634"
                                r="1.42021"
                                transform="rotate(180 38.9138 13.634)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.9138"
                                cy="50.2754"
                                r="1.42021"
                                transform="rotate(180 38.9138 50.2754)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.9138"
                                cy="26.1319"
                                r="1.42021"
                                transform="rotate(180 38.9138 26.1319)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="38.9138"
                                cy="1.42021"
                                r="1.42021"
                                transform="rotate(180 38.9138 1.42021)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.4157"
                                cy="87.4849"
                                r="1.42021"
                                transform="rotate(180 26.4157 87.4849)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.4157"
                                cy="74.9871"
                                r="1.42021"
                                transform="rotate(180 26.4157 74.9871)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.4157"
                                cy="62.4892"
                                r="1.42021"
                                transform="rotate(180 26.4157 62.4892)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.4157"
                                cy="38.3457"
                                r="1.42021"
                                transform="rotate(180 26.4157 38.3457)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.4157"
                                cy="13.634"
                                r="1.42021"
                                transform="rotate(180 26.4157 13.634)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.4157"
                                cy="50.2754"
                                r="1.42021"
                                transform="rotate(180 26.4157 50.2754)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.4157"
                                cy="26.1319"
                                r="1.42021"
                                transform="rotate(180 26.4157 26.1319)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="26.4157"
                                cy="1.4202"
                                r="1.42021"
                                transform="rotate(180 26.4157 1.4202)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="13.9177"
                                cy="87.4849"
                                r="1.42021"
                                transform="rotate(180 13.9177 87.4849)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="13.9177"
                                cy="74.9871"
                                r="1.42021"
                                transform="rotate(180 13.9177 74.9871)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="13.9177"
                                cy="62.4892"
                                r="1.42021"
                                transform="rotate(180 13.9177 62.4892)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="13.9177"
                                cy="38.3457"
                                r="1.42021"
                                transform="rotate(180 13.9177 38.3457)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="13.9177"
                                cy="13.634"
                                r="1.42021"
                                transform="rotate(180 13.9177 13.634)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="13.9177"
                                cy="50.2754"
                                r="1.42021"
                                transform="rotate(180 13.9177 50.2754)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="13.9177"
                                cy="26.1319"
                                r="1.42021"
                                transform="rotate(180 13.9177 26.1319)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="13.9177"
                                cy="1.42019"
                                r="1.42021"
                                transform="rotate(180 13.9177 1.42019)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.41963"
                                cy="87.4849"
                                r="1.42021"
                                transform="rotate(180 1.41963 87.4849)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.41963"
                                cy="74.9871"
                                r="1.42021"
                                transform="rotate(180 1.41963 74.9871)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.41963"
                                cy="62.4892"
                                r="1.42021"
                                transform="rotate(180 1.41963 62.4892)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.41963"
                                cy="38.3457"
                                r="1.42021"
                                transform="rotate(180 1.41963 38.3457)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.41963"
                                cy="13.634"
                                r="1.42021"
                                transform="rotate(180 1.41963 13.634)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.41963"
                                cy="50.2754"
                                r="1.42021"
                                transform="rotate(180 1.41963 50.2754)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.41963"
                                cy="26.1319"
                                r="1.42021"
                                transform="rotate(180 1.41963 26.1319)"
                                fill="#3056D3"
                            />
                            <circle
                                cx="1.41963"
                                cy="1.4202"
                                r="1.42021"
                                transform="rotate(180 1.41963 1.4202)"
                                fill="#3056D3"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </div >
    )
}

export default BillCard
