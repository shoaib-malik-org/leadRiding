import { useState } from "react"


const publicinfo = [
    { show: "name", name: 'name' },
    { show: "About Me", name: 'about' },
    { show: "My Website", value: "", name: 'websitelink' },
    { show: 'address', name: 'address' },
    { show: "Profile Photo", type: 'file', name: 'profilephoto' },
]
const privateinfo = [
    { show: "Email", name: 'email' },
    { show: "Number", name: 'number' },
    { show: "Gender", name: 'gender' },
    { show: "Date of birth", name: 'DOB' },
]
const Photos = [

]




export function EditProf() {
    var [vendorData, setVendorData] = useState({})
    function takeInput(e) {
        const value = e.target.value;
        const name = e.target.name;
        setVendorData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    function submit(e) {
        e.preventDefault();
        console.log(vendorData)
    }
    return (
        <div className="container mb-5">
            <h1 className="mt-3 text-dorange">
                Account Setting
            </h1>
            <div className="container-fluid border mt-3">
                <form onSubmit={submit}>
                    <div className="row">
                        <div className="col-6">
                            <div className="col-12 border-end">
                                <h4 className="text-sans pt-3">
                                    Profile Info
                                </h4>
                                {

                                    publicinfo.map((value) => {
                                        var type = 'text';
                                        if (value.type !== undefined) {
                                            type = value.type
                                        }
                                        return (
                                            <div className="container-fluid ps-0 py-2" key={value.show}>
                                                <div className="row border-bottom py-2">
                                                    <div className="col">
                                                        {value.show}:
                                                    </div>
                                                    <div className="col">
                                                        <input name={value.name} onChange={takeInput} type={type} defaultValue={value.value} className={"form-control"} />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <div className="col-12 border-end">
                                    <h4 className="text-sans pt-3">
                                        Personel Info
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <Right inputTaker={takeInput} />
                        </div>
                    </div>
                    <div className="d-flex justify-content-end mb-3">
                        <button className="btn btn-dorange col-2">Save</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

function Right() {
    return (
        <div className="col-12">
            <h4 className="text-sans pt-3">
                Product or Service Photos
            </h4>
        </div>
    )
}
