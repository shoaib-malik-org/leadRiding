import react from "react";
import Image from "next/image";
import Link from "next/link";


export default function Navbar(){
  return(<>
  
  <div className="container-fluid bg-dark">
        <div className="row py-2 px-lg-5">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center text-white">
                    <small><i className="fa fa-phone-alt mr-2"></i>+012 345 6789</small>
                    <small className="px-3">|</small>
                    <small><i className="fa fa-envelope mr-2"></i>info@example.com</small>
                </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
                <div className="d-inline-flex align-items-center">
                    <a className="text-white px-2" href="">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="text-white px-2" href="">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="text-white px-2" href="">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a className="text-white px-2" href="">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="text-white pl-2" href="">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>


  <div className="container-fluid p">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
            <Link href={'/'}>
            <a className="navbar-brand ml-lg-3">
                <h1 className="m-0 display-5 text-uppercase text-primary">
                <Image src={'/img/logo.png'} height={60} width={100} alt="logo"/>
                </h1>
            </a>
            </Link>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon">

                </span>
            </button>
            <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                <div className="navbar-nav m-auto py-0">
                    <a href="#" className="nav-item nav-link active rounded-3 me-1">Home</a>
                    <a href="#" className="nav-item nav-link rounded-3  me-1">About</a>
                    <a href="#" className="nav-item nav-link rounded-3  me-1">Service</a>
                    <a href="#" className="nav-item nav-link rounded-3  me-1">Contact</a>
                </div>
                <a href="" className="btn btn-primary py-2 px-4 d-none d-lg-block me-1 rounded-3">SIGN-UP</a>
                <a href="" className="btn btn-primary py-2 px-4 d-none d-lg-block rounded-3">SIGN-IN</a>
            </div>
        </nav>
    </div>
  
  </>)
}