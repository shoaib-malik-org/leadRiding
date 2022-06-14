

import { Navbar } from "../../components/common/navbar"
import { Cate } from "../../components/category/subCatery"
import { Contact } from "../../components/common/contact"
import style from '../../styles/category.module.css'




export default function homeApp() {
    return (
        <>
            <Navbar />
            <div className={`container-fluid ${style.bgAppTop} position-relative ${style.htLg}`}>
                <div className="overlay position-relative d-inline-block position-absolute" style={{ top: '350px', right: '50px' }}>
                    <h1 className={`text-light text-sans position-relative text-center op-1 z-10 px-3 pt-1`}>
                        Home Appliances Categories
                    </h1>
                </div>
            </div>
            <Cate />
            <Contact />
        </>
    )
}