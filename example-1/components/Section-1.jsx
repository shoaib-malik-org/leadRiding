import { useEffect } from "react";

import AOS from 'aos'
import Popular from "./popular";
export default function Section()
{
    useEffect(()=>{
        AOS.init()
    },[])
    return(<>
    <section className="sec-1   bg-fixed">
    {/* <h1 className="text-6xl font-bold pt-32 text-center  heading-1">
      LeadRiding
    </h1> */}
    <div className="jumbotron bg-transparent jumbotron-fluid mb-5">
        <div className="container text-center " data-aos="zoom-in">
            <h1 className="text-primary mb-4 fw-normal">You can Buy, Rent, Book anything from here</h1>
            <h1 className="text-white text-xl fw-light mb-5 w-75 mx-auto">Buy and sell everything from used cars to mobile phones and computer or search for property.Jobs and more</h1>
            <div className="mx-auto w-75" >
                <div className="input-group">
                <div className="input-group-append">
                        <button className="btn btn-primary ">Location</button>
                    </div>
                    <input type="text" className="form-control border-light" style={{padding: '22px'}} placeholder="Search"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary ">Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    <Popular />
    </>)
}