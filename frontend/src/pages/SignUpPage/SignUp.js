import React, { useEffect, useState } from 'react'
import { UserAuth } from '../../context/AuthContext'
import { GoogleButton } from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { DataStore } from '../../context/DataContext';
import Navbar from '../../components/Navbar/Navbar';
import './styles.css'
function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    const { googleSignIn, user, logOut, createUserWithEmail, signInWithEmail, changeTheDisplayName } = UserAuth();
    const { addCustomerData } = DataStore()
    const navigate = useNavigate();
    const handleSignin = async () => {
        try {
            setLoading(true)
            await googleSignIn();
            // if (user) {
            //     const res = await axios.post('http://localhost:8282/login', {
            //         name: user.displayName,
            //         email: user.email,
            //         desc: 'google'
            //     })
            //     console.log(res.json())
            setLoading(false)
            // }
            // navigate('/billing')
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        if (user && loading === false) {
            navigate('/billing')
        }

    }, [user])

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            console.log(email, password)
            const x = await createUserWithEmail(email, password);
            console.log(x)
            const y = await changeTheDisplayName(name);
            console.log(y)
            console.log('User Created', user.displayName)
            // const res = await axios.post('http://localhost:8282/login', {
            //     name: user.displayName,
            //     email: user.email,
            //     desc: 'google'
            // })
            // console.log(res.data)
            // await addCustomerData({ name: name, email: email, stripeID: res.data.id });

            setLoading(false)
            // navigate('/billing')
        } catch (error) {
            setError(error.message);
            console.log(error)
            setLoading(false);
        }
    }

    return (
        <div className='body2'>
            <Navbar />
            <div className='max-w-[700px] mx-auto my-16 p-4'>
                <div>
                    <h1 className='text-2xl font-bold py-2'>Sign up for a free account</h1>
                    <p className='py-2'>
                        Already have an account?{' '}
                        <Link to='/login' className='underline'>
                            Sign in.
                        </Link>
                    </p>
                </div>
                <form >
                    <div className='flex flex-col py-2'>
                        <label className='py-2 font-medium'>Your Name</label>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            className='border p-3'
                            type='text'
                        />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='py-2 font-medium'>Email Address</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            className='border p-3'
                            type='email'
                        />
                    </div>
                    <div className='flex flex-col py-2'>
                        <label className='py-2 font-medium'>Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            className='border p-3'
                            type='password'
                        />
                    </div>
                    <div>
                        <button onClick={handleFormSubmit} className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
                            Sign Up
                        </button>
                        <GoogleButton onClick={handleSignin} />
                    </div>

                </form>
            </div>


        </div>
    )
}

export default SignUp