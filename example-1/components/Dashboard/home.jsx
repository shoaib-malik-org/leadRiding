
import style from '../../styles/dashboard.module.css'




export function Home() {
    return (
        <div className={`container-fluid border-start pt-4 bg-blue ${style.bglBlue}`}>
            <div className='container'>
                <h2 className={`fw-normal text-sans ${style.textBlue}`}>Dashboard</h2>
                <div className='container'>
                    <div className='row'>
                        <Sales />
                        <Revenue />
                        <Customers />
                        <Vendors />
                    </div>
                </div>
            </div>
        </div>
    )
}

function Sales() {
    return (
        <div className='col-6 mt-4'>
            <div className='cl-12 rounded-2 bg-white p-4'>
                <span className={`border-end pe-2 h4 text-sans ${style.textBlue}`}>Sales</span>
                <span className='ms-2 h5 text-sans text-secondary'>Today</span>
                <div className='row mt-4'>
                    <div className='col-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" height={'50px'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <div className='col'>
                        <h2 className={`${style.textBlue} text-sans`}>145</h2>
                        <span className='text-success'>12%</span>
                        <span className='text-secondary ms-2'>increase</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Revenue() {
    return (
        <div className='col-6  mt-4'>
            <div className='col-12 rounded-2 bg-white p-4'>
                <span className={`border-end pe-2 h4 text-sans ${style.textBlue}`}>Revenue</span>
                <span className='ms-2 h5 text-sans text-secondary'>Today</span>
                <div className='row mt-4'>
                    <div className='col-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" height={'50px'} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div className='col'>
                        <h2 className={`${style.textBlue} text-sans`}>3,264</h2>
                        <span className='text-success'>8%</span>
                        <span className='text-secondary ms-2'>increase</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Customers() {
    return (
        <div className='col-6  mt-4'>
            <div className='col-12 rounded-2 bg-white p-4'>
                <span className={`border-end pe-2 h4 text-sans ${style.textBlue}`}>Customers</span>
                <span className='ms-2 h5 text-sans text-secondary'>Today</span>
                <div className='row mt-4'>
                    <div className='col-3'>
                        <i class="fa-solid fa-user-group fa-3x"></i>
                    </div>
                    <div className='col'>
                        <h2 className={`${style.textBlue} text-sans`}>3,264</h2>
                        <span className='text-success'>8%</span>
                        <span className='text-secondary ms-2'>increase</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
function Vendors() {
    return (
        <div className='col-6  mt-4'>
            <div className='col-12 rounded-2 bg-white p-4'>
                <span className={`border-end pe-2 h4 text-sans ${style.textBlue}`}>Vendors</span>
                <span className='ms-2 h5 text-sans text-secondary'>Today</span>
                <div className='row mt-4'>
                    <div className='col-3'>
                        <i class="fa-solid fa-user-check fa-3x"></i>
                    </div>
                    <div className='col'>
                        <h2 className={`${style.textBlue} text-sans`}>940</h2>
                        <span className='text-success'>5%</span>
                        <span className='text-secondary ms-2'>increase</span>
                    </div>
                </div>
            </div>
        </div>
    )
}