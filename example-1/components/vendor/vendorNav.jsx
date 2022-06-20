

import Link from "next/link"




export function VendorNav() {
    return (
        <div className="d-flex justify-content-start border-top py-2 bg-light">
            <div className="d-flex justify-content-start ms-5 text-sans">
                <Link href="/vendor/setting">
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
                <Link href="/vendor/EditProfile">
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