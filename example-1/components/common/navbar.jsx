

import Link from 'next/link'
import logo from '../../img/logo.png'
import Image from 'next/image'
import { SignIn } from '../auth/signIn';
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { firebase } from '../auth/firebase'
import { RecaptchaVerifier } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { store } from '../../redux/store'
import { vendorInfo } from '../../redux/reducers/vendor';


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


export function Navbar() {
    // checking the person is authenticated or not
    var [isAuth, setIsAuth] = useState(false)
    useEffect(() => {
        checkIsAuthenticatedOrnot()
        async function checkIsAuthenticatedOrnot() {
            const p = await fetch('http://localhost:8000/auth/check', {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "http://localhost:3000/",
                },
                credentials: "include"
            })
            const res = await p.json();
            setIsAuth(res.isAuthenticated)
            store.dispatch(vendorInfo({ user: res.user }))
        }
    }, [])
    var [signUp, setData] = useState({})
    var [isOtpVerified, setOtpVerified] = useState({ tru: false, fal: false })
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
    function submit(e) {
        e.preventDefault();

        const auth = getAuth();
        console.log(formData)
        const phoneNumber = "+91" + signUp.number;
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log(window.confirmationResult);
                // ...
            }).catch((error) => {
                console.log(error)
                grecaptcha.reset(window.recaptchaWidgetId);
                console.log("Error; SMS not sent");
                // ...
            });

        // Pricing(true)
    }
    const [formData, setFormData] = useState({
        phoneNumber: "",
        otp: ""
    })
    useEffect(() => {
        const auth = getAuth();
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                onSignInSubmit();
            }
        }, auth);
    }, [])

    function submitOtp(e) {
        e.preventDefault();
        console.log(signUp)
        confirmationResult.confirm(formData.otp).then(async (result) => {
            // User signed in successfully.
            const user = result.user;

            const p = await fetch('http://localhost:8000/auth/register', { method: 'post', body: JSON.stringify(signUp) })
            const res = await p.json();
            console.log(res)
            // console.log(user)
            // ...
            setOtpVerified({ tru: true, fal: false })
            // setOtpVerified({ tru: true, fal: false })
        }).catch((error) => {
            setOtpVerified({ tru: false, fal: true })
            // console.log(error)
            // User couldn't sign in (bad verification code?)
            // ...
        })
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div id='sign-in-button' style={{}}></div>
                <div className="container">
                    <Link href="/">
                        <a className="navbar-brand" >
                            <Image
                                src={logo.src}
                                height={'48px'}
                                width={'68px'}
                                priority={'false'}
                            />
                        </a>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-sans" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto ms-auto ms-4 mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link px-3 btn-outline-dorange me-3 rounded-3" aria-current="page">
                                        HOME
                                    </a>
                                </Link>
                            </li>
                            {/* sign in */}
                            {
                                (!isAuth) &&
                                <SignIn />
                            }
                            {/* sign up */}
                            {
                                (!isAuth) &&
                                <li className="nav-item">
                                    <div className="modal fade" id="SignUp" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title text-uppercase" id="exampleModalToggleLabel">Sign Up for Vendors</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body overflow-visible">
                                                    <form onSubmit={submit}>
                                                        <div className="container-fluid">
                                                            <div className="container bg-white position-relative">
                                                                <div className="row ">
                                                                    <div className="col">

                                                                        <div className="row mb-5">
                                                                            <div className='d-flex justify-content-center mb-2'>
                                                                                <Image
                                                                                    src={logo.src}
                                                                                    alt=""
                                                                                    width={"100"}
                                                                                    height={"100"}
                                                                                    priority={'false'}
                                                                                />
                                                                            </div>
                                                                            <div className="col-12">
                                                                                <div className="form-floating mt-2">
                                                                                    <input name='username' onChange={storeData} type={'text'} className="form-control text-sans" id="floatingInputname" placeholder="name" />
                                                                                    <label htmlFor="floatingInput">Name:</label>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12">
                                                                                <div className="form-floating mt-2">
                                                                                    <input name='number' onChange={storeData} type={'text'} className="form-control text-sans" id="floatingInputphone" placeholder="phone" />
                                                                                    <label htmlFor="floatingInput">Phone:</label>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12">
                                                                                <div className="form-floating mt-2">
                                                                                    <input name='password' onChange={storeData} type={'password'} className="form-control text-sans" id="floatingInputpassword" placeholder="password" />
                                                                                    <label htmlFor="floatingInput">Password:</label>
                                                                                </div>
                                                                            </div>
                                                                            <div className='col-12'>
                                                                                <button data-bs-target="#SignUp2" data-bs-toggle="modal" type='submit' className="btn btn-dorange mt-4 py-2 px-5">
                                                                                    Submit
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div >
                                                            </div>
                                                        </div >
                                                    </form>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* otp verification */}
                                    {
                                        (!isOtpVerified.tru) ?
                                            <div className="modal fade" id="SignUp2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="exampleModalToggleLabel2">VERIFICATION</h5>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <main className="form-signin w-100 m-auto">
                                                                <form onSubmit={submitOtp} className='px-5'>
                                                                    <div className='d-flex justify-content-center'>
                                                                        <Image
                                                                            src={logo.src}
                                                                            alt=""
                                                                            width={"72"}
                                                                            height={"57"}
                                                                            priority={'false'}
                                                                        />
                                                                    </div>
                                                                    <div className="form-floating mt-4">
                                                                        <input type={"text"} name={"otp"} className="form-control" onChange={(e) => setFormData({ ...formData, otp: e.target.value })} value={formData.otp} />
                                                                        <label htmlFor="floatingInput">Enter otp</label>
                                                                    </div>
                                                                    {
                                                                        (isOtpVerified.fal) &&
                                                                        <p className='text-danger'>
                                                                            You otp is incorrect please try again
                                                                        </p>
                                                                    }
                                                                    <input type="submit" value={'Sign Up'} className='mt-3 w-100 btn btn-lg btn-dorange' />
                                                                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                                                                </form>
                                                            </main>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button className="btn btn-dorange" data-bs-target="#SignUp" data-bs-toggle="modal">Back to Sign up</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <SignIn css={{ class: 'show', style: { display: 'block' } }} />
                                    }
                                    <a className="nav-link px-3 btn-outline-dorange me-3 rounded-3" data-bs-toggle="modal" href="#SignUp" role="button">SIGN UP</a>
                                </li>
                            }
                            <li className="nav-item">
                                <Link href="#">
                                    <a className="nav-link px-3 btn-outline-dorange me-3 rounded-3">
                                        POST AD
                                    </a>
                                </Link>
                            </li>

                        </ul>
                    </div>
                    <div className='d-flex justify-content-end'>
                        {
                            (isAuth) &&
                            <div className="dropdown me-4">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    shoaib
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <Link href="/vendor/setting">
                                            <a className="dropdown-item">Settings</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="dropdown-item">Profile view</a>
                                        </Link>
                                    </li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <form action="http://localhost:8000/auth/logout" method="get">
                                        <li><button className="dropdown-item" type='submit' href="#">Logout</button></li>
                                    </form>
                                </ul>
                            </div>
                        }
                        <Link href={'#'}>
                            <a className='hover-grey text-dark py-2 px-3 border rounded-4 me-2'>
                                <i className="fa-brands fa-apple me-2 fa-lg"></i>
                                App Store
                            </a>
                        </Link>
                        <Link href={'#'}>
                            <a className='hover-grey text-dark py-2 px-3 border rounded-4'>
                                <i className="fa-brands fa-google-play me-2 fa-lg"></i>
                                Play Store
                            </a>
                        </Link>

                    </div>
                </div>
            </nav>
        </>
    )
}


