
import style from '../../styles/common.module.css'





export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light py-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
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
                    </ul>
                </div>
                <div className='d-flex justify-content-end'>
                    <a href="#" className='me-4 py-2 text-sans'>Sign in</a>
                    <a href='#' className='py-2 me-4 text-sans'>
                        Sign up
                    </a>
                    <button className='btn btn-orange'>
                        List your business
                    </button>
                </div>
            </div>
        </nav>
    )
}