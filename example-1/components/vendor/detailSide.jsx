






export function DetailSider({ className }) {
    return (
        <div className="container mt-5">
            <div className="row text-sans">
                <div className="col">
                    <p className={`text-secondary ${className[0]} row`}>
                        <div className="col-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                        </div>
                        <div className="col">
                            Edit Profile
                        </div>
                    </p>
                    <p className={`text-secondary ${className[1]} row`}>
                        <div className="col-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                        </div>
                        <div className="col">
                            Listings
                        </div>
                    </p>
                    <p className={`text-secondary ${className[2]} row`}>
                        <div className="col-2">
                            <i className="fa-solid fa-barcode"></i>
                        </div>
                        <div className="col">
                            Choose Plan
                        </div>
                    </p>
                    <p className={`text-secondary ${className[3]} row`}>
                        <div className="col-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                        </div>
                        <div className="col">
                            Images
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}