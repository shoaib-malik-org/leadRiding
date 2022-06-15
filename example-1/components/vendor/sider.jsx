

import Image from "next/image"
import profile from '../../img/vendor/man.png'
import style from '../../styles/common.module.css'
import first from '../../img/vendor/split-ac-repair1.jpg'
import sec from '../../img/vendor/plumber.webp'



export function Sider() {
    return (
        <div className={`col`} >
            <Image
                src={profile.src}
                height={"350px"}
                width={'300px'}
                className={"mt-5 mh-200"}
            />
            <span className="d-flex justify-content-center mt-2">
                &#11088;
                &#11088;
                &#11088;
                &#11088;
                &#11088;
            </span>
            <div className="d-flex justify-content-center mt-4">
                <button className="btn btn-orange w-100">
                    Get Quote
                </button>
            </div>
            <span className="my-5 d-flex justify-content-center">
                <i class="fa-brands fa-facebook-square fa-lg pointer" style={{color:'rgb(66,103,178)'}}></i>
                <i class="fa-brands fa-twitter ms-3 fa-lg pointer" style={{color:'#00acee'}}></i>
                <i class="fa-brands fa-instagram ms-3 fa-lg pointer" style={{color:'red'}}></i>
                <i class="fa-brands fa-pinterest ms-3 fa-lg pointer" style={{color:'#E60023'}}></i>
            </span>
            <p className="mb-0 mt-3 text-center">
                More Listing by
            </p>
            <p className="mt-1 text-center">
                * Asian Electical Service *
            </p>
            <Image
                src={first.src}
                height={"170px"}
                width={'260px'}
                className={`${style.borderImage}`}
            />
            <p className="text-center">
                Asian AC Services
            </p>
            <Image
                src={sec.src}
                height={"170px"}
                width={'260px'}
                className={`${style.borderImage}`}
            />
            <p className="text-center mb-5">
                Asian Plumbing Services
            </p>
        </div>
    )
}