
import style from '../../styles/common.module.css'
import Link from 'next/link'
import logo from '../../img/logo.png'
import Image from 'next/image'
import { SignUp, SignUp1 } from '../auth/signUp'
import { useState } from 'react'





export function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
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
                                <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalToggleLabel">SIGN IN</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <main class="form-signin w-100 m-auto">
                                                    <form className='px-5' onSubmit={(e) => { e.preventDefault() }}>
                                                        <div className='d-flex justify-content-center'>
                                                            <Image
                                                                src={logo.src}
                                                                alt=""
                                                                width={"72"}
                                                                height={"57"}
                                                                priority={'false'}
                                                            />
                                                        </div>
                                                        <div class="form-floating mt-4">
                                                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                                            <label for="floatingInput">Email address</label>
                                                        </div>
                                                        <div class="form-floating mt-2">
                                                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                                            <label for="floatingPassword">Password</label>
                                                        </div>

                                                        <div className='row'>
                                                            <div className='col'>
                                                                <div class="checkbox mb-3 mt-3">
                                                                    <label>
                                                                        <input type="checkbox" value="remember-me" /> Remember me
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className='col mt-3 text-end text-primary'>
                                                                forget password
                                                            </div>
                                                        </div>

                                                        <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                                                        <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                                                    </form>
                                                </main>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a class="nav-link px-3 btn-outline-dorange me-3 rounded-3" data-bs-toggle="modal" href="#exampleModalToggle" role="button">SIGN IN</a>
                            </li>
                            {/* sign up */}
                            <li className="nav-item">
                                <div class="modal fade" id="SignUp" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalToggleLabel">Registration</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body overflow-visible">
                                                <SignUp1 />
                                            </div>
                                            <div class="modal-footer">
                                                <button class="btn btn-dorange" data-bs-target="#SignUp2" data-bs-toggle="modal">Pricing List</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal fade" id="SignUp2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalToggleLabel2">Modal 2</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">

                                            </div>
                                            <div class="modal-footer">
                                                <button class="btn btn-primary" data-bs-target="#SignUp" data-bs-toggle="modal">Back to first</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a class="nav-link px-3 btn-outline-dorange me-3 rounded-3" data-bs-toggle="modal" href="#SignUp" role="button">SIGN UP</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-3 btn-outline-dorange me-3 rounded-3" href="#">
                                    POST AD
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <Link href={'#'}>
                            <a className='hover-grey text-dark py-2 px-3 border rounded-4 me-2'>
                                <i class="fa-brands fa-apple me-2 fa-lg"></i>
                                App Store
                            </a>
                        </Link>
                        <Link href={'#'}>
                            <a className='hover-grey text-dark py-2 px-3 border rounded-4'>
                                <i class="fa-brands fa-google-play me-2 fa-lg"></i>
                                Play Store
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}






