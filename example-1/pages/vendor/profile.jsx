import { Navbar } from "../../components/common/navbar";
import { Main } from "../../components/vendor/main";
import { Sider } from "../../components/vendor/sider";
import style from '../../styles/common.module.css'







export default function Profile() {
    return (
        <>
            <Navbar />
            <div className="container">
                <h1 className="text-sans mt-5">
                    Asian Electical Service
                </h1>
                <div className="row mt-5">
                    <div className={`col-3 ${style.bgGrey} rounded-3`}>
                        <Sider />
                    </div>
                    <div className="col">
                        <Main />
                    </div>
                </div>
                <h1 className="mt-5 text-center">
                    Popular vendors in this category
                </h1>
            </div>
        </>
    )
}