
import homeCleaning from '../../img/category/home/cleaning-transformed.jpeg'
import painter from '../../img/category/home/painter-transformed.jpeg'
import acRepair from '../../img/category/home/acRepair-transformed.jpeg'
import carpenter from '../../img/category/home/carpenter-transformed.jpeg'
import electrician from '../../img/category/home/electrician-transformed.jpeg'
import plumber from '../../img/category/home/plumber-transformed.jpeg'
import MassageService from '../../img/category/home/massage-transformed.jpeg'

import Image from 'next/image'
import style from '../../styles/category.module.css'
import Link from 'next/link'


const subCate = [
    { src: homeCleaning.src, title: 'Home Cleaning', para: 'you can find the vendors for your house cleaning' },
    { src: painter.src, title: 'Painter', para: 'you can find the best painters near by' },
    { src: acRepair.src, title: 'AC Repair', para: 'you are going to use a passage of Lorem Ipsum' },
    { src: carpenter.src, title: 'Carpenters', para: 'you are going to use a passage of Lorem Ipsum' },
    { src: electrician.src, title: 'Electrician', para: 'you are going to use a passage of Lorem Ipsum' },
    { src: plumber.src, title: 'Plumber', para: 'you are going to use a passage of Lorem Ipsum' },
    { src: MassageService.src, title: 'Massage Service', para: 'you are going to use a passage of Lorem Ipsum' },
]






export function Cate() {
    return (
        <div className="container position-relative">
            <h1 className="display-5 fw-bold mt-10 text-blue">
                Explore by category
            </h1>
            <div className={`${style.bglBlue} position-absolute ${style.manage}`}>

            </div>
            <div className='row mt-5'>
                {subCate.map(Cols)}
            </div>
        </div>
    )
}

function Cols(value) {
    return (
        <div className={`col-3 mb-5`} key={value.title}>
            <Link href={'#'}>
                <a>
                    <div className={`col-12 ${style.cateHover} rounded-3 ${style.bgCate} p-4  bg-white position-relative`} style={{ height: "200px", backgroundImage: `url(${value.src})` }}>
                        <div className='z-10 overlay position-relative p-2 d-inline-block'>
                            <h3 className='text-white position-relative mb-0'>
                                {value.title}
                            </h3>
                        </div>
                        <div className='d-flex justify-content-end'>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`text-blue ${style.textIcon}`} height={'25px'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}