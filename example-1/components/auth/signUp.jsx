
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import profile from '../../img/vendor/profile.png'
import randomId from 'random-id'


const arr = [
    { name: 'username', type: 'text', show: 'Username' },
    { name: 'password', type: 'text', show: 'Password' },
    { name: 'email', type: 'email', show: 'Email' },
    { name: 'number', type: 'number', show: 'Phone' },
    { name: 'city', type: 'text', show: 'City' },
    { name: 'pincode', type: 'number', show: 'Pincode' },
    { name: 'address', type: 'text', show: 'Address' },
    { name: 'state', type: 'text', show: 'State' },
    { name: "adhaarNo", type: 'text', show: 'Adhaar Number' },
    { name: "adhaarPhoto", type: 'file', show: 'Adhaar Photo' },
    { name: "panNo", type: 'text', show: 'Pan Number' },
    { name: "panPhoto", type: 'file', show: 'Pan Photo' },
    { name: "gstNo", type: 'text', show: 'GST Number' },
]
const Benefit = [
    'Leads',
    'Own Cover Image on Provider Page',
    'Gallery with more Images',
    'Multiple Categories',
    'Apply for Job',
    'Job Alerts',
    'More Locations (Branches)',
    'Google Calendar',
    'Crop Profile Image',
    'Contact Numbers',
    'INVOICE',
    'AVAILABILITY',
    'STAFF MEMBERS',
]
const free = [
    '0',
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    'no',
    'no',
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    '',
    '',
    '',
    '',
    '',
    '',
    ''
]
const silver = [
    '20',
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    'yes',
    'no',
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    '',
    '',
    '',
    '',
    ''
]
const gold = [
    '30',
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    'yes',
    'yes',
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    '',
    '',
    ''
]
const diamond = [
    '50',
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    'yes',
    'yes',
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
]



export function SignUp1() {
    return (
        <>
            {/* <form action="http://localhost:8000/auth/login" method="post">
                <input type="text" name="username" />
                <input type="text" name="password" />
                <input type="submit" />
            </form>
            <Link href={'/test/forget'}>
                <a>
                    Forgot password
                </a>
            </Link> */}
            <FirstPage />
        </>
    )
}

function SecondPage() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Plan />
                    </div>
                </div>
            </div>
        </>
    )
}

function Plan() {
    return (
        <div className="container-fluid z-10 position-fixed top-0 start-0 end-0 overlay vh-100">
            <div className="container pt-5 bg-white position-relative vh-100 overflow-auto">
                <div className="row mt-5 text-sans">
                    <div className="col-5 pe-0">
                        <h3>Features</h3>
                        {Benefit.map(About)}
                    </div>
                    <div className="col px-0">
                        <h3 className="text-center">Free</h3>
                        {free.map(Same)}

                    </div>
                    <div className="col px-0">
                        <h3 className="text-center">Silver</h3>
                        {silver.map(Same)}

                    </div>
                    <div className="col px-0">
                        <h3 className="text-center">Gold</h3>
                        {gold.map(Same)}

                    </div>
                    <div className="col ps-0">
                        <h3 className="text-center">Diamond</h3>
                        {diamond.map(Same)}

                    </div>
                </div>
            </div>
        </div>
    )
}

function About(value) {
    return (
        <p className="border-bottom" style={{ height: '25px' }} key={randomId(30, 'number')}>
            {value}
        </p>
    )
}

function Same(value) {
    return (
        <p className="border-bottom text-center" style={{ height: '25px' }} key={randomId(30, 'number')}>
            {
                value
            }
        </p>
    )
}

function FirstPage() {
    var [data, setData] = useState({})
    function storeData(e) {
        const value = e.target.value;
        const name = e.target.name;
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    async function submit(e) {
        e.preventDefault();
        const p = await fetch('http://localhost:8000/auth/register', { method: 'post', body: JSON.stringify(data) })
        const res = await p.json();
        console.log(res)
        // Pricing(true)
    }
    return (
        <div className="container-fluid">
            <div className="container bg-white position-relative">
                
                <div className="row ">
                    <form onSubmit={submit}>
                        <div className="col">
                            <div className="d-flex justify-content-center">
                                <Image
                                    src={profile.src}
                                    height={'150px'}
                                    width={'150px'}
                                    className={'rounded-circle border'}
                                />
                            </div>
                            <h4 className="text-center mt-2 position-relative">
                                
                                Change Profile Photo
                            </h4>
                            <div className="row mt-4 mb-5">
                                {
                                    arr.map(value =>
                                        <div className="col-6" key={value.show}>
                                            <div className="form-floating mt-2">
                                                <input onChange={storeData} name={value.name} type={value.type} className="form-control text-sans" id="floatingInput" placeholder="body" />
                                                <label htmlFor="floatingInput">{value.show}:</label>
                                            </div>
                                        </div>
                                    )
                                }
                                <div className='col-6 position-relative'>
                                    <button type='submit' className="btn btn-dorange mt-2 py-2 px-5">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div >
            </div>
        </div >
    )
}