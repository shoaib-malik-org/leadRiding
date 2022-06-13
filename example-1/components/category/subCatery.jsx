
import homeCleaning from '../../img/category/home/icons8-home-cleaning-50.png'
import painter from '../../img/category/home/icons8-painter-64.png'
import acRepair from '../../img/category/home/icons8-air-conditioner-100.png'
import carpenter from '../../img/category/home/icons8-carpenter-64.png'
import electrician from '../../img/category/home/icons8-electrician-64.png'
import plumber from '../../img/category/home/icons8-plumber-64.png'
import MassageService from '../../img/category/home/icons8-massage-64.png'

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
                    <div className={`col-12 ${style.cateHover} p-4  bg-white `}>
                        <Image
                            src={value.src}
                            height={'70px'}
                            width={'70px'}
                        />
                        <h3 className='text-blue'>
                            {value.title}
                        </h3>
                        <p className='text-secondary'>
                            {value.para}
                        </p>
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