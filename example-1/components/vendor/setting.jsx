


const info = [
    { name: "name", value: 'shoaib' },
    { name: "About Me", value: 'shoaib' },
    { name: "My Website", value: 'http://localhost:8000/' },
    { name: "name", value: 'shoaib' },
    { name: "name", value: 'shoaib' },
    { name: "name", value: 'shoaib' },
]





export function AccSetting() {
    return (
        <div className="container">
            <h1 className="mt-3 text-dorange">
                Account Setting
            </h1>
            <div className="container-fluid border mt-3">
                <h4 className="text-sans mt-1">
                    Profile Info
                </h4>
                <div className="row mt-4">
                    <Left />
                    <div className="col">

                    </div>
                </div>
            </div>
        </div>
    )
}

function Left() {
    return (
        <div className="col">
            {info.map(Value)}
        </div>
    )
}

function Value(value) {
    return (
        <div className="row border-bottom py-2" key={value.name}>
            <div className="col">
                {value.name}:
            </div>
            <div className="col">
                {value.value}
            </div>
        </div>
    )
}