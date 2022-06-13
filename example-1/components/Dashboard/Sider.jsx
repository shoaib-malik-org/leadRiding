

import style from '../../styles/dashboard.module.css'





export function Sider() {
    return (
        <div className={`container-fluid ${style.dashboard}`}>
            <div className="row">
                <div className="col ps-3 pe-5">
                    <button className={`btn mt-5 ${style.btnDash} w-100 text-start`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`icon me-2 ${style.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        Dashboard
                    </button>
                </div>
            </div>
        </div>
    )
}