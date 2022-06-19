

import Link from "next/link"




export function VendorNav() {
    return (
        <div className="d-flex justify-content-start mt-3">
            <div className="d-flex justify-content-start ms-5 border-bottom">
                <Link href="#">
                    <a>
                        <button className="btn">
                            Account Setting
                        </button>
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        <button className="btn">
                            Pricing
                        </button>
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        <button className="btn">
                            Profile View
                        </button>
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        <button className="btn">
                            Edit Settings
                        </button>
                    </a>
                </Link>
            </div>
        </div>
    )
}