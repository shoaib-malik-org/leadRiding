
import style from '../../styles/common.module.css'
import Link from 'next/link'
import logo from '../../img/logo.png'
import Image from 'next/image'




export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand" >
                        <Image
                            src={logo.src}
                            height={'48px'}
                            width={'68px'}
                        />
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-sans" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-4 mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-dark me-3 rounded-5 border hover-grey" aria-current="page" href="#">
                                <i className="fa-brands fa-apple fa-xl me-2 ms-1"></i>
                                App Store
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark me-5 border rounded-5 hover-grey" href="#">
                                <i className="fa-brands fa-google-play fa-lg me-2 ms-1"></i>
                                Play Store
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div className='d-flex justify-content-end'>
                    <p href="#" className='me-4 py-2 text-sans mb-0 pointer'>Sign in</p>
                    <p href="#" className='me-4 py-2 text-sans mb-0 pointer'>Sign Up</p>
                    <button className='btn btn-orange text-sans'>
                        List Your Business
                    </button>
                </div>
            </div>
            <SignIn />
        </nav>
    )
}

function SignIn(){

    return (
        <></>
    )
}