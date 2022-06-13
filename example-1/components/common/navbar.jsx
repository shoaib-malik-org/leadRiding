
import style from '../../styles/common.module.css'
import Link from 'next/link'





export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light py-3 pb-4">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand" >
                        Navbar
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-sans" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-dark me-5" aria-current="page" href="#">Category</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark me-5" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark me-5">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark me-5">List yourself</a>
                        </li>
                    </ul>
                </div>
                <div className='d-flex justify-content-end'>
                    <a href="#" className='me-4 py-2 text-sans'>Sign in</a>
                    <button className='btn btn-orange text-sans'>
                        Sign up
                    </button>
                </div>
            </div>
        </nav>
    )
}