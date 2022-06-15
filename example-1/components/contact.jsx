import { useEffect } from "react";

import AOS from 'aos'

export default function Contact()
{useEffect(()=>{
    AOS.init()
},[])
    return(<>
<section className="btn1 pt-16 p-16" data-aos="fade-right">
        <div >
            <h1 className="text-white text-center text-5xl">Need Our Help in Choosing a vendor ?</h1>
            <p className="text-center text-white text-xl">Call us @ 9810098100 or Click on the contact button here...</p>
            <div className="text-center pt-8"><button className="text-center btn1 btn border text-white">Contact us</button></div>
        </div>
    </section>
</>)
    
}