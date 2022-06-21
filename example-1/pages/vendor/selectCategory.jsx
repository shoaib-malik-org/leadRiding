import { useState } from 'react'
import { Navbar } from '../../components/common/navbar'
import { VendorNav } from '../../components/vendor/vendorNav'

export async function getServerSideProps({ req }) {
    const p = await fetch('http://localhost:8000/vendorInfo/single', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:3000/",
            cookie: req.headers.cookie
        },
        credentials: "include"
    })
    const data = await p.json();
    const p2 = await fetch('http://localhost:8000/category')
    const categories = await p2.json();
    return {
        props: {
            categories,data
        }
    }
}


export default function SelectCate({ data }) {
    return (
        <>
            <Navbar />
            <VendorNav />
            <ChooseCate data={data} />
        </>
    )
}

var fsubcategoryData = []
var ssubcategoryData = []
var tsubcategoryData = []


function ChooseCate({ data, categories }) {
    console.log(categories)
    var [firstChk, setFirstChk] = useState(false)
    var [firstList, setFirstList] = useState([])
    var [secChk, setSecChk] = useState(false)
    var [secList, setSecList] = useState([])
    var [thirdChk, setThirdChk] = useState(false)
    var [thirdList, setThirdList] = useState([])
    var [categoryData, setCategoryData] = useState()
    function firstCate(e) {
        const id = e.target.value
        const [first] = categories.filter(value => value.id === id)
        setFirstChk(true)
        setFirstList(first.subcategories)
        setCategoryData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
        fsubcategoryData = []
    }
    function secCate(e) {
        const id = e.target.value
        const [sec] = categories.filter(value => value.id === id)
        setSecChk(true)
        setSecList(sec.subcategories)
        setCategoryData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
        ssubcategoryData = []

    }
    function thirdCate(e) {
        const id = e.target.value
        const [third] = categories.filter(value => value.id === id)
        setThirdChk(true)
        setThirdList(third.subcategories)
        setCategoryData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
        tsubcategoryData = []
    }
    function fTakeInput(e) {
        const value = e.target.checked;
        const name = e.target.name;
        if (value) {
            fsubcategoryData.push(
                {
                    id: name,
                    bool: value
                }
            )
        } else {
            const index = fsubcategoryData.findIndex((value) => value.id === name)
            fsubcategoryData.splice(index, 1)
        }
    }
    function sTakeInput(e) {
        const value = e.target.checked;
        const name = e.target.name;
        if (value) {
            ssubcategoryData.push(
                {
                    id: name,
                    bool: value
                }
            )
        } else {
            const index = ssubcategoryData.findIndex((value) => value.id === name)
            ssubcategoryData.splice(index, 1)
        }
    }
    function tTakeInput(e) {
        const value = e.target.checked;
        const name = e.target.name;
        if (value) {
            tsubcategoryData.push(
                {
                    id: name,
                    bool: value
                }
            )
        } else {
            const index = tsubcategoryData.findIndex((value) => value.id === name)
            tsubcategoryData.splice(index, 1)
        }
    }
    async function submit(e) {
        e.preventDefault();
        const category = []
        if (categoryData !== undefined) {
            if (categoryData.firstCate !== undefined) {
                const [first] = categories.filter(value => value.id === categoryData.firstCate)
                first.subcategories = len(fsubcategoryData, first.subcategories)
                category.push(first)
            }
            if (categoryData.secCate !== undefined) {
                const [sec] = categories.filter(value => value.id === categoryData.secCate)
                sec.subcategories = len(ssubcategoryData, sec.subcategories)
                category.push(sec)
            }
            if (categoryData.thirdCate !== undefined) {
                const [third] = categories.filter(value => value.id === categoryData.thirdCate)
                third.subcategories = len(tsubcategoryData, third.subcategories)
                category.push(third)
            }
        }
        data.id
        const p = await fetch('http://localhost:8000/vendorInfo/categories', {
            headers: {
                id: data.id
            },
            method: "POST",
            body: JSON.stringify(category)
        })
        const res = await p.json();
        console.log(res)
    }
    return (
        <div className='container'>
            <div className='row mt-4'>
                <form onSubmit={submit}>
                    <div className='col'>
                        <select name="firstCate" onChange={firstCate} id="first">
                            <option value="none">Select Category</option>
                            {categories.map(value => {
                                return (
                                    <option value={value.id} key={getRandomInt()}>
                                        {value.name}
                                    </option>
                                )
                            })}
                        </select>
                        {
                            (firstChk) &&
                            firstList.map(value => {
                                var defChk = false;
                                const check = fsubcategoryData.filter(store => value.id === store.id)
                                if (check.length > 0) {
                                    defChk = true;
                                }
                                return (
                                    <div key={getRandomInt()} className={'ms-4'}>
                                        <input type="checkbox" name={value.id} onChange={fTakeInput} defaultChecked={defChk} />
                                        <label htmlFor="" className='ms-2'>{value.name}</label>
                                    </div>
                                )
                            })
                        }
                        <select name="secCate" id="sec" className='d-block mt-4' onChange={secCate}>
                            <option value="none">Select Category</option>
                            {categories.map(value => {
                                return (
                                    <option value={value.id} key={getRandomInt()}>
                                        {value.name}
                                    </option>
                                )
                            })}
                        </select>
                        {
                            (secChk) &&
                            secList.map(value => {
                                var defChk = false;
                                const check = ssubcategoryData.filter(store => value.id === store.id)
                                if (check.length > 0) {
                                    defChk = true;
                                }
                                return (
                                    <div key={getRandomInt()} className={'ms-4'}>
                                        <input type="checkbox" name={value.id} onChange={sTakeInput} defaultChecked={defChk} />
                                        <label htmlFor="" className='ms-2'>{value.name}</label>
                                    </div>
                                )
                            })
                        }
                        <select name="thirdCate" id="third" className='mt-4' onChange={thirdCate}>
                            <option value="none">Select Category</option>
                            {categories.map(value => {
                                return (
                                    <option value={value.id} key={getRandomInt()}>
                                        {value.name}
                                    </option>
                                )
                            })}
                        </select>
                        {
                            (thirdChk) &&
                            thirdList.map(value => {
                                var defChk = false;
                                const check = tsubcategoryData.filter(store => value.id === store.id)
                                if (check.length > 0) {
                                    defChk = true;
                                }
                                return (
                                    <div key={getRandomInt()} className={'ms-4'}>
                                        <input type="checkbox" name={value.id} onChange={tTakeInput} defaultChecked={defChk} />
                                        <label htmlFor="" className='ms-2'>{value.name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button type='submit' className='btn btn-dorange'>
                        submit
                    </button>
                </form>
            </div>
        </div>
    )
}

function getRandomInt() {
    return Math.floor(Math.random() * 9999848499);
}


const finder = (id, subcate) => subcate.find(subcate => subcate.id === id.id)
const len = (id, subcate) => {
    const sorted = id.map(id => finder(id, subcate))
    return sorted;
}