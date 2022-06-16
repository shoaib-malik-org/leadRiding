import { VendorNav } from "../../../components/vendor/vendorNav"
import { Navbar } from "../../../components/common/navbar"





export default function Images() {
    return (
        <>
            <Navbar />
            <div className="container">
                <VendorNav className={['', '', '', 'profileActive']} />
                <div className="row">

                    <div className="col">
                        {/* <AddProfile /> */}
                    </div>
                </div>
            </div>
        </>
    )
}