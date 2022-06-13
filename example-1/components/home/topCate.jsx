
import Image from 'next/image'
import Link from 'next/link'
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
    }
]





export function TopCate() {
    return (
        <div className="container my-5">
            <h1 className="text-sans pt-5">
                Top Categories
            </h1>
            <hr className="col-1 bg-orange mt-4" />
            <div className="row mt-5">
                {cate.map(Cols)}
            </div>
        </div>
    )
}

function Cols(value) {
    return (
        <div className="col-4 px-4 py-2 rounded-2 Top mb-3" key={value.title}>
            <Link href={"/category/"+value.title}>
                <a>
                    <div className='col-12'>
                        <div className="row">
                            <div className="col-3 mt-3">
                                <Image
                                    src={value.icon}
                                    height={'55px'}
                                    width={'55px'}
                                />
                            </div>
                            <div className="col ps-0">
                                <h3 className="text-sans text-uppercase h4 text-blue">{value.title}</h3>
                                <p className='text-muted'>
                                    {value.p}
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}