import { Navbar } from "../../../components/common/navbar"
import { DetailSider } from "../../../components/vendor/detailSide"
import Link from "next/link"







export default function Listing() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <DetailSider className={['', 'profileActive', '', '']} />
                    </div>
                    <div className="col">
                        <AddProfile />
                    </div>
                </div>
            </div>
        </>
    )
}

function AddProfile() {
    return (
        <div className="container mt-5 px-5">
            <h2 className="ms-5">
                Add Profile
            </h2>
            <div className="row mt-3 px-5">
                <div className="col">
                    <div className="row mt-4 mb-5">
                        <div className="col">
                            <div className="form-floating mt-2">
                                <input name="name" type="text" className="form-control text-sans" id="floatingInput" placeholder="body" />
                                <label htmlFor="floatingInput">Adhaar no:</label>
                            </div>
                            <label htmlFor="" className="mt-3">Adhaar photo</label>
                            <input type="file" className="form-control" />
                        </div>
                        <div className="col">
                            <div className="form-floating mt-2">
                                <input name="name" type="text" className="form-control text-sans" id="floatingInput" placeholder="body" />
                                <label htmlFor="floatingInput">Pan no:</label>
                            </div>
                            <label htmlFor="" className="mt-3">Pan photo</label>
                            <input type="file" className="form-control" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link href={"/vendor/add/subscription"}>
                            <a>
                                <button className="btn btn-orange py-2 px-5">
                                    Next
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}