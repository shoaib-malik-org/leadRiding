import style from '../../styles/Home.module.css'


const citys = [
    'Delhi',
    'Mumbai',
    'Gujrat',
    'Faridabad',
    'Noida',
    'Meerut'
]


export function Top() {
    return (
        <div className={`container-fluid ${style.HomeBg} h-mdpx mt-3`}>
            <div className="row">
                <div className="col-6">
                    <h1 className='text-light ms-5 mt-5 display-5 fw-bold'>
                        Experts can be contacted quickly and for no cost.
                    </h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-8 d-flex ms-5 mt-5 border px-0 rounded-5 bg-light py-1'>
                    <button className={`btn bg-white text-dark pt-1 btnnot rounded-left`} >
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                    <input type="search" className={`form-control rounded-0 ${style.borderNone}`} placeholder='Search any category' />
                    <select name="city" id="" className={`form-select me-3 rounded-0 ${style.borderNone} w-25`}>
                        {citys.map(value => <option name={value} key={value}>{value}</option>)}
                    </select>
                    <button className='btn btn-lgreen rounded-pill me-1 px-4'>
                        Search
                    </button>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <p className='text-lgrey ms-5 mt-5 text-sans'>
                        It is a long established fact that a reader will be distracted by the readable
                        content of a page when looking at its layout.The point of using Lorem Ipsum is
                        that it has a more
                    </p>
                </div>
            </div>
        </div>
    )
}