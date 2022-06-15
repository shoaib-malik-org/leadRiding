import { Navbar } from "../../../components/common/navbar"
import { DetailSider } from "../../../components/vendor/detailSide"




export default function Images() {
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