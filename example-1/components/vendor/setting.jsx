


const publicinfo = [
    { name: "name", value: 'shoaib' },
    { name: "About Me", value: 'shoaib' },
    { name: "My Website", value: <a href="https://www.youtube.com/" target="_blank">https://www.youtube.com/</a> },
    { name: 'address', value: 'current' },
    { name: "Profile Photo", value: <input type="file" className="form-control" /> },
]
const privateinfo = [
    { name: "Email", value: 'someh' },
    { name: "Number", value: '23' },
    { name: "Gender", value: 'shoaib' },
    { name: "Date of birth", value: 'shoaib' },
]
const Photos = [
    
]





export function AccSetting() {
    return (
        <div className="container mb-5">
            <h1 className="mt-3 text-dorange">
                Account Setting
            </h1>
            <div className="container-fluid border mt-3">

                <div className="row">
                    <div className="col-6">
                        <Left />
                    </div>
                    <div className="col">
                        <Right />
                    </div>
                </div>
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

function Left() {
    return (
        <>
            <div className="col-12 border-end">
                <h4 className="text-sans pt-3">
                    Profile Info
                </h4>
                {publicinfo.map(Value)}
            </div>
            <div>
                <div className="col-12 border-end">
                    <h4 className="text-sans pt-3">
                        Personel Info
                    </h4>
                    {privateinfo.map(Value)}
                </div>
            </div>
        </>
    )
}

function Value(value) {
    return (
        <div className="container-fluid ps-0 py-2" key={value.name}>
            <div className="row border-bottom py-2">
                <div className="col">
                    {value.name}:
                </div>
                <div className="col">
                    {value.value}
                </div>
            </div>
        </div>
    )
}