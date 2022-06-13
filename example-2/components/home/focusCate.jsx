import Image from 'next/image'
import homeApp from '../../img/icons/homeApp.png'
import home from '../../img/icons/icons8-home-50.png'
import pestControl from '../../img/icons/icons8-pest-control-64.png'
import service from '../../img/icons/icons8-repair-64.png'
import movers from '../../img/icons/icons8-movers-48.png'
import caterer from '../../img/icons/icons8-caterer-50.png'


const cate = [
    {
        icon: home.src,
        title: 'Home',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon: homeApp.src,
        title: 'Home Appliances',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon: pestControl.src,
        title: 'PEST CONTROL SERVICE',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon: service.src,
        title: 'repair and services',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon: movers.src,
        title: 'packers and movers',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon: caterer.src,
        title: 'caterers',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon: home.src,
        title: 'Home',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon: homeApp.src,
        title: 'Home Appliances',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon: pestControl.src,
        title: 'PEST CONTROL SERVICE',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon: service.src,
        title: 'repair and services',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon: movers.src,
        title: 'packers and movers',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon: caterer.src,
        title: 'caterers',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon: home.src,
        title: 'Home',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon: homeApp.src,
        title: 'Home Appliances',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon: pestControl.src,
        title: 'PEST CONTROL SERVICE',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon: service.src,
        title: 'repair and services',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon: movers.src,
        title: 'packers and movers',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        icon: caterer.src,
        title: 'caterers',
        p: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
]

export function FocusCate() {
    return (
        <div className="container">
            <h1 className="text-center text-sans">Popular Categories</h1>
            <hr className="col-1 ms-auto me-auto bg-orange mt-4" />
            <div className="row mt-3 pt-5 text-sans">
                {cate.map(Cols)}
            </div>
        </div>
    )
}

function Cols(value) {
    return (
        <div className='col-2 mt-5 Top' key={value.title}>
            <div className='d-flex justify-content-center'>
                <Image
                    src={value.icon}
                    height={'48px'}
                    width={'48px'}
                />
            </div>
            <h3 className='text-center mt-4 h6'>
                {value.title}
            </h3>
        </div>
    )
}