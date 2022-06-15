import { Navbar } from "../../../components/common/navbar"
import { DetailSider } from "../../../components/vendor/detailSide"


const Benefit = [
    'Leads',
    'Own Cover Image on Provider Page',
    'Gallery with more Images',
    'Multiple Categories',
    'Apply for Job',
    'Job Alerts',
    'More Locations (Branches)',
    'Google Calendar',
    'Crop Profile Image',
    'Contact Numbers',
    'INVOICE',
    'AVAILABILITY',
    'STAFF MEMBERS',
]
const free = [
    '0',
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    'no',
    'no',
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    '',
    '',
    '',
    '',
    '',
    '',
    ''
]
const silver = [
    '20',
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    'yes',
    'no',
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    '',
    '',
    '',
    '',
    ''
]
const gold = [
    '30',
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    'yes',
    'yes',
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    '',
    '',
    ''
]
const diamond = [
    '50',
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    'yes',
    'yes',
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" className="icon text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
]

export default function Leads() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <DetailSider className={['', '', 'profileActive', '']} />
                    </div>
                    <div className="col">
                        <Plan />
                    </div>
                </div>
            </div>
        </>
    )
}

function Plan() {
    return (
        <div className="container mb-5">
            <div className="row mt-5 text-sans">
                <div className="col-5">
                    <h3>Features</h3>
                    {Benefit.map(About)}
                </div>
                <div className="col">
                    <h3 className="text-center">Free</h3>
                    {free.map(Same)}
                    <button className="btn btn-orange w-100 rounded-1">
                        Free
                    </button>
                </div>
                <div className="col">
                    <h3 className="text-center">Silver</h3>
                    {silver.map(Same)}
                    <button className="btn btn-orange w-100 rounded-1">
                        Silver
                    </button>
                </div>
                <div className="col">
                    <h3 className="text-center">Gold</h3>
                    {gold.map(Same)}
                    <button className="btn btn-orange w-100 rounded-1">
                        Gold
                    </button>
                </div>
                <div className="col">
                    <h3 className="text-center">Diamond</h3>
                    {diamond.map(Same)}
                    <button className="btn btn-orange w-100 rounded-1">
                        Diamond
                    </button>
                </div>
            </div>
        </div>
    )
}

function About(value) {
    return (
        <p className="border-bottom" style={{ height: '25px' }} key={value}>
            {value}
        </p>
    )
}

function Same(value) {
    return (
        <p className="border-bottom text-center" style={{ height: '25px' }} key={value}>
            {
                value
            }
        </p>
    )
}