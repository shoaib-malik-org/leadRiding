import { Cate } from "../../components/category/subCatery";
import { Navbar } from "../../components/common/navbar";
import style from '../../styles/category.module.css'

const citys = [
    'Delhi',
    'Mumbai',
    'Gujrat',
    'Faridabad',
    'Noida',
    'Meerut'
]



export default function Home() {
    return (
        <>
            <Navbar />
            <div className={`container-fluid ${style.bgTop} position-relative ${style.htLg} `}>
                <h1 className={`text-light pt-5 text-sans position-relative text-center display-3 op-1 z-10fw-bold`}>
                    Home Categories
                </h1>
                <p className="text-light text-center position-relative h3 mt-4">
                    40+ categories from thousands of inspirational work
                </p>
                <div className='row position-relative mt-5'>
                    <div className='col-8 d-flex me-auto ms-auto mt-5 border px-0 rounded-5 bg-light py-1'>
                        <button className={`btn bg-white text-dark pt-1 btnnot rounded-left`} >
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <input type="search" className={`form-control rounded-0 ${style.borderNone}`} placeholder='Search any category' />
                        <select name="city" id="" className={`form-select me-3 rounded-0 ${style.borderNone} w-25`}>
                            {citys.map(value => <option name={value} key={value}>{value}</option>)}
                        </select>
                        <button className='btn btn-orange rounded-pill me-1 px-4'>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <Cate />
        </>
    )
}