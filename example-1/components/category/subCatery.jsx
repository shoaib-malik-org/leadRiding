
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
import { Sider } from '../common/sider'


const subCate = [
    { src: homeCleaning.src, title: 'Home Cleaning', para: 'you can find the vendors for your house cleaning' },
    { src: painter.src, title: 'Painter', para: 'you can find the best painters near by' },
    { src: acRepair.src, title: 'AC Repair', para: 'you are going to use a passage of Lorem Ipsum' },
    { src: carpenter.src, title: 'Carpenters', para: 'you are going to use a passage of Lorem Ipsum' },
    { src: electrician.src, title: 'Electrician', para: 'you are going to use a passage of Lorem Ipsum' },
    { src: plumber.src, title: 'Plumber', para: 'you are going to use a passage of Lorem Ipsum' },
    // { src: MassageService.src, title: 'Massage Service', para: 'you are going to use a passage of Lorem Ipsum' },
]


export function Cate() {
    return (
        <>
            <div className="container position-relative">
                <div className='row position-relative mt-5'>
                    <div className='col-8 d-flex me-auto ms-auto mt-5 border px-0 rounded-5 bg-light py-1'>
                        <button className={`btn bg-white text-dark pt-1 btnnot rounded-left ms-1`} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <input type="search" className={`form-control rounded-0 ${style.borderNone}`} placeholder='Search any category' />
                        <button className='btn btn-orange rounded-pill me-1 px-4'>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${style.bglBlue} container-fluid mt-5`}>
                <div className='row px-5'>
                    <div className='col px-5'>
                        <h1 className="display-5 fw-bold mt-5 text-blue">
                            Explore by category
                        </h1>
                        <div className='row mt-5'>
                            <div className='col-3'>
                                <Sider />
                            </div>
                            <div className='col px-0'>
                                <div className='row'>
                                    {subCate.map(Cols)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Cols(value) {
    return (
        <div className={`col-4 mb-5`} key={value.title}>
            <Link href={'#'}>
                <a>
                    <div className={`col-12 rounded-3 ${style.bgCate} py-4  bg-white position-relative`} style={{ height: "200px", backgroundImage: `url(${value.src})` }}>
                        <div className='z-10 overlay-lg position-absolute p-2 d-inline-block' style={{ top: "140px", left: "10px" }}>
                            <h4 className='text-white position-relative mb-0 text-sans'>
                                {value.title}
                            </h4>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}