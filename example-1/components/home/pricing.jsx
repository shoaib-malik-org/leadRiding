


const arr = [
    {
        head: 'Free',
        lead: '0',
        price: '0',
        get: [
            'Own Cover Image',
            'Gallery with more Image',
            'Mutiple Categories'
        ]
    },
    {
        head: 'Silver',
        lead: '20',
        price: "999",
        get: [
            'Own Cover Image',
            'Gallery with more Image',
            'Mutiple Categories'
        ]
    },
    {
        head: 'Gold',
        lead: '30',
        price: "1499",
        get: [
            'Own Cover Image',
            'Gallery with more Image',
            'Mutiple Categories'
        ]
    }
]




export function Pricing() {
    return (
        <div className="container my-5 pt-5">
            <h1 className="text-sans text-center">
                Ready to get started
            </h1>
            <p className="text-center text-secondary">
                Choose a plan tailored to your needs
            </p>
            <div className="row mt-5">
                {arr.map(Cols)}
                <Diamond />
            </div>
        </div>
    )
}

function Cols(value) {
    return (
        <div className="col-3 p-4 text-center">
            <h5 className="text-sans fw-bold">
                {value.head}
            </h5>
            <h1 className="display-4 text-sans mt-3">
                <span className="text-lgrey fw-normal   ">₹</span>{value.price}
            </h1>
            <div className="d-flex justify-content-center">
                <button className="btn btn-orange w-75 ms-3">
                    Get started
                </button>
            </div>
            {value.get.map(Features)}
        </div>
    )
}

function Diamond() {
    const get = [
        'Own Cover Image',
        'Gallery with more Image',
        'Mutiple Categories'
    ]
    return (
        <div className="col-3 p-4 rounded-3 text-center bg-orange">
            <h5 className="text-sans fw-bold">
                Diamond
            </h5>
            <h1 className="display-4 text-sans mt-3 text-dark">
                <span className="text-lgrey fw-normal">₹</span>1999
            </h1>
            <div className="d-flex justify-content-center">
                <button className="btn btn-orange w-75">
                    Get started
                </button>
            </div>
            {get.map(Features)}
        </div>
    )
}
function Features(value) {
    return (
        <div key={value} className={'text-start ms-4 mt-4'}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {value}
        </div>
    )
}