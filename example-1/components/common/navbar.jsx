
import style from '../../styles/common.module.css'
import Link from 'next/link'
import logo from '../../img/logo.png'
import Image from 'next/image'
import { Plans, SignUp, SignUp1 } from '../auth/signUp'
import profile from '../../img/vendor/profile.png'
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { firebase } from '../auth/firebase'
import { RecaptchaVerifier } from "firebase/auth";
import { useEffect, useState } from "react";
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


export function Navbar() {
    var [data, setData] = useState({})
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
    async function submit(e) {
        e.preventDefault();
        const auth = getAuth();
        console.log(formData)
        const phoneNumber = "+91" + data.number;
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log(window.confirmationResult);
                // ...
            }).catch((error) => {
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
        confirmationResult.confirm(formData.otp).then(async (result) => {
            // User signed in successfully.
            const user = result.user;

            const p = await fetch('http://localhost:8000/auth/register', { method: 'post', body: JSON.stringify(data) })
            const res = await p.json();
            console.log(res)
            // console.log(user)
            // ...
            console.log(isOtpVerified)
            setOtpVerified({ tru: true, fal: false })

            // setOtpVerified({ tru: true, fal: false })
        }).catch((error) => {
            console.log(isOtpVerified)
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
                                <a className="nav-link px-3 btn-outline-dorange me-3 rounded-3" aria-current="page" href="#">
                                    HOME
                                </a>
                            </li>
                            {/* sign in */}
                            <li className="nav-item">
                                <div className={`modal fade`} id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalToggleLabel">SIGN IN</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <main className="form-signin w-100 m-auto">
                                                    <form action='http://localhost:8000/auth/login' method='POST' className='px-5'>
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
                                                            <input type="text" name='username' className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                            <label htmlFor="floatingInput">Email address</label>
                                                        </div>
                                                        <div className="form-floating mt-2">
                                                            <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" />
                                                            <label htmlFor="floatingPassword">Password</label>
                                                        </div>

                                                        <div className='row'>
                                                            <div className='col'>
                                                                <div className="checkbox mb-3 mt-3">
                                                                    <label>
                                                                        <input type="checkbox" value="remember-me" /> Remember me
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col mt-3 text-end text-primary pointer'>
                                                                forget password
                                                            </div>
                                                        </div>
                                                        <input type="submit" value={'Sign in'} className='w-100 btn btn-lg btn-dorange' />

                                                        <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                                                    </form>
                                                </main>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="nav-link px-3 btn-outline-dorange me-3 rounded-3" data-bs-toggle="modal" href="#exampleModalToggle" role="button">SIGN IN</a>
                            </li>
                            {/* sign up */}
                            <li className="nav-item">
                                <div className="modal fade" id="SignUp" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title text-uppercase" id="exampleModalToggleLabel">Registration</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body overflow-visible">
                                                <form onSubmit={submit}>
                                                    <div className="container-fluid">
                                                        <div className="container bg-white position-relative">
                                                            <div className="row ">
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
                                                                            <button data-bs-target="#SignUp2" data-bs-toggle="modal" type='submit' className="btn btn-dorange mt-2 py-2 px-5">
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
                                            <div className="modal-footer">
                                                {/* <button className="btn btn-dorange" data-bs-target="#SignUp2" data-bs-toggle="modal">Pricing List</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* otp verification */}
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
                                                        {/* {
                                                            (isOtpVerified.tru) &&
                                                            <>
                                                                You otp is correct now go back and sign in
                                                            </>
                                                        } */}
                                                        {
                                                            (isOtpVerified.fal) &&
                                                            <>
                                                                You otp is incorrect please try again
                                                            </>
                                                        }
                                                        {
                                                            // (isOtpVerified.tru) ?
                                                            <input type="submit" value={'Sign Up'} className='mt-3 w-100 btn btn-lg btn-dorange' data-bs-toggle="modal" href="#exampleModalToggle" role="button" />
                                                            //     :
                                                            // <input type="button" value={'Sign Up'} className='mt-3 w-100 btn btn-lg btn-dorange' />
                                                        }
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
                                <a className="nav-link px-3 btn-outline-dorange me-3 rounded-3" data-bs-toggle="modal" href="#SignUp" role="button">SIGN UP</a>
                            </li>
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






