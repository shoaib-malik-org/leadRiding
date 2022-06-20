import { useState } from "react"


const publicinfo = [
    { show: "name", name: 'name' },
    { show: "About Me", name: 'about' },
    { show: "My Website", value: "", name: 'websitelink' },
    { show: 'address', name: 'address', type: 'button' },
    { show: "Profile Photo", type: 'file', name: 'profilephoto' },
]
const privateinfo = [
    { show: "Email", name: 'email' },
    { show: "Number", name: 'number' },
    { show: "Gender", name: 'gender' },
    { show: "Date of birth", name: 'DOB', type: "date" },
    { show: "Adhaar number", name: 'adhaarNo' },
    { show: "Pan number", name: 'panNo' },
    { show: "Adhaar photo", type: 'file', name: 'adhaarPhoto' },
    { show: "Pan photo", type: 'file', name: 'panPhoto' },
    { show: "Gst number", name: 'gstNo' },
]


export function EditProf() {
    var [vendorData, setVendorData] = useState({})
    var [files, setfiles] = useState({})
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        setVendorData((prev) => {
            return {
                ...prev,
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }
        })
    }
    function takeInput(e) {
        const value = e.target.value;
        const name = e.target.name;
        setVendorData((prev) => {
            return { ...prev, [name]: value }
        })
    }
    function fileInput(e) {
        const name = e.target.name
        setfiles((prev) => {
            return {
                ...prev,
                [name]: e.target.files[0]
            }
        })
    }
    async function submit(e) {
        e.preventDefault();
        var form = new FormData();
        form.append("profilePhoto", files.profilephoto);
        form.append("adhaarPhoto", files.adhaarPhoto);
        form.append("panPhoto", files.panPhoto);
        form.append('name', vendorData.name)
        form.append('about', vendorData.about)
        form.append('websiteurl', vendorData.websitelink)
        form.append('latitude', vendorData.latitude)
        form.append('longitude', vendorData.longitude)
        form.append('email', vendorData.email)
        form.append('number', vendorData.number)
        form.append('gender', vendorData.dender)
        form.append('DOB', vendorData.DOB)
        form.append('adhaarNo', vendorData.adhaarNo)
        form.append('panNo', vendorData.panNo)
        form.append('gstNo', vendorData.gstNo)
        const p = await fetch('http://localhost:8000/vendorInfo', {
            method: "POST",
            body: form
        })
        const res = await p.json();
        console.log(res)
    }
    return (
        <div className="container mb-5">
            <h1 className="mt-3 text-dorange">
                Edit Setting
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
                                        var change = takeInput
                                        var cls = 'form-control'
                                        var click = () => { }
                                        if (value.type === 'button') {
                                            type = value.type
                                            cls = 'btn btn-dorange w-100'
                                            value.value = 'current location'
                                            click = getLocation
                                        }
                                        else if (value.type !== undefined) {
                                            type = value.type

                                            change = fileInput

                                        }
                                        return (
                                            <div className="container-fluid ps-0 py-2" key={value.show}>
                                                <div className="row border-bottom py-2">
                                                    <div className="col">
                                                        {value.show}:
                                                    </div>
                                                    <div className="col">
                                                        <input onClick={click} name={value.name} onChange={change} type={type} defaultValue={value.value} className={cls} />
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
                                    {
                                        privateinfo.map(value => {
                                            var type = 'text';
                                            var change = takeInput
                                            if (value.type !== undefined) {
                                                type = value.type
                                                if (value.type !== 'date') {
                                                    change = fileInput
                                                }
                                            }
                                            return (
                                                <div className="container-fluid ps-0 py-2" key={value.show}>
                                                    <div className="row border-bottom py-2">
                                                        <div className="col">
                                                            {value.show}:
                                                        </div>
                                                        <div className="col">
                                                            <input name={value.name} onChange={change} type={type} defaultValue={value.value} className={"form-control"} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
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
