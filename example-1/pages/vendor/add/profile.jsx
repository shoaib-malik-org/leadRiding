import { DetailSider } from "../../../components/vendor/detailSide";
import { Navbar } from '../../../components/common/navbar'
import Image from "next/image";
import profile from '../../../img/vendor/profile.png'
import Link from "next/link";






export default function Profile() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <DetailSider className={['profileActive', '', '', '']} />
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
                    <div className="d-flex justify-content-center">
                        <Image
                            src={profile.src}
                            height={'150px'}
                            width={'150px'}
                            className={'rounded-circle border'}
                        />
                    </div>
                    <h4 className="text-center mt-2">
                        Change Profile Photo
                    </h4>
                    <div className="row mt-4 mb-5">
                        <div className="col">
                            <div className="form-floating mt-2">
                                <input name="name" type="text" className="form-control text-sans" id="floatingInput" placeholder="body" />
                                <label htmlFor="floatingInput">Name:</label>
                            </div>
                            <div className="form-floating mt-2">
                                <input name="name" type="text" className="form-control text-sans" id="floatingInput" placeholder="body" />
                                <label htmlFor="floatingInput">Phone:</label>
                            </div>
                            <div className="form-floating mt-2">
                                <input name="name" type="text" className="form-control text-sans" id="floatingInput" placeholder="body" />
                                <label htmlFor="floatingInput">City:</label>
                            </div>
                            <div className="form-floating mt-2">
                                <input name="name" type="text" className="form-control text-sans" id="floatingInput" placeholder="body" />
                                <label htmlFor="floatingInput">Pincode:</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating mt-2">
                                <input name="name" type="text" className="form-control text-sans" id="floatingInput" placeholder="body" />
                                <label htmlFor="floatingInput">Email:</label>
                            </div>
                            <div className="form-floating mt-2">
                                <input name="name" type="text" className="form-control text-sans" id="floatingInput" placeholder="body" />
                                <label htmlFor="floatingInput">Address:</label>
                            </div>
                            <div className="form-floating mt-2">
                                <input name="name" type="text" className="form-control text-sans" id="floatingInput" placeholder="body" />
                                <label htmlFor="floatingInput">State:</label>
                            </div>
                            <Link href={"/vendor/add/listing"}>
                                <a>
                                    <button className="btn btn-orange mt-2 py-2 px-5">
                                        Next
                                    </button>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}