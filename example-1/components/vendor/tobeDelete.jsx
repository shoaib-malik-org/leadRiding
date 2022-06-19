
import style from '../../styles/common.module.css'
import Image from 'next/image'
import first from '../../img/vendor/first.jpg'
import sec from '../../img/vendor/sec.webp'
import third from '../../img/vendor/third.jpg'
import four from '../../img/vendor/four.jpg'
import { useState } from 'react'

const arr = [
    first.src,
    sec.src,
    third.src,
    four.src
]

const Review = [
    {
        name: 'Hussain Abidi',
        shortDesc: 'Good service',
        dateTime: 'March 12, 2018 at 5:40 am',
        desc: 'Good service ipsum dolor sit amet, consectetur adipiscing elit vitae is vitae sapien. Good'
    },
    {
        name: 'Hussain Abidi',
        shortDesc: 'Good service',
        dateTime: 'March 12, 2018 at 5:40 am',
        desc: 'Good service ipsum dolor sit amet, consectetur adipiscing elit vitae is vitae sapien. Good'
    },
    {
        name: 'Hussain Abidi',
        shortDesc: 'Good service',
        dateTime: 'March 12, 2018 at 5:40 am',
        desc: 'Good service ipsum dolor sit amet, consectetur adipiscing elit vitae is vitae sapien. Good'
    },
    {
        name: 'Hussain Abidi',
        shortDesc: 'Good service',
        dateTime: 'March 12, 2018 at 5:40 am',
        desc: 'Good service ipsum dolor sit amet, consectetur adipiscing elit vitae is vitae sapien. Good'
    },
]


export function Main() {
    var [show, setShow] = useState(false)
    var [cls,setCls] = useState([style.bgGrey,''])
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 pe-0">
                    <Carousel />
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    {arr.map(Cols)}
                </div>
            </div>
            <button className={`${cls[0]} bg-none border mt-5 px-3 py-2 ms-3`}
                onClick={() => {
                    setShow(true)
                    setCls([style.bgGrey,''])
                }}
            >
                Description
            </button>
            <button className={`${cls[1]} bg-none border ms-3 py-2 px-3`}
                onClick={() => {
                    setShow(false)
                    setCls(['',style.bgGrey])
                }}
            >
                Reviews
            </button>
            <div className='container'>
                <div className='row'>
                    {
                        (show) ?
                            <Desc />
                            :
                            <Reviews />
                    }
                </div>
            </div>
        </div>
    )
}

function Carousel() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators overlay">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active position-relative" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className='position-relative' aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className='position-relative' aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000">
                    <Image
                        src={four.src}
                        width={"800px"}
                        height={'400px'}
                        className={'rounded-3'}
                    />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <Image
                        src={sec.src}
                        width={"800px"}
                        height={'400px'}
                        className={'rounded-3'}
                    />
                </div>
                <div className="carousel-item">
                    <Image
                        src={third.src}
                        width={"800px"}
                        height={'400px'}
                        className={'rounded-3'}
                    />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

function Reviews() {
    return (
        <div className={`container `}>
            <div className={`row p-3 ${style.bgGrey} rounded-3`}>
                <div className='col-6'>
                    <p>
                        4.8 stars - 921 reviews &#11088;&#11088;&#11088;&#11088;
                    </p>
                    <p>
                        1081 completed tasks &#11088;&#11088;&#11088;
                    </p>
                </div>
                <div className='col-6'>
                    <p>
                        Quality &#11088;&#11088;&#11088;&#11088;
                    </p>
                    <p>
                        Cost &#11088;&#11088;&#11088;
                    </p>
                </div>
            </div>
            <div className='row mt-4'>
                {Review.map(ReviewDesc)}
            </div>
        </div>
    )
}
var z = 0;
function ReviewDesc(value) {
    return (
        <div className='col-6' key={z++}>
            <div className='col shadow p-3 mb-5 rounded-3'>
                <h4 className='text-orange'>{value.name}</h4>
                <p className='text-secondary text-sans'>
                    {value.shortDesc}
                </p>
                &#11088;&#11088;&#11088;&#11088;&#11088;
                <p className='text-secondary text-sans'>
                    {value.dateTime}
                </p>
                <div className='col-10 ms-auto me-auto shadow p-4 position-relative bg-light rounded-4' style={{ top: '40px' }}>
                    {value.desc}
                </div>
            </div>
        </div>
    )
}

function Cols(value, index) {
    var cls;
    if (index === 1) cls = 'bg-orange'
    return (
        <div className='col-3 px-1 mt-2'>
            <div className='col-12 position-relative' style={{ height: '100px' }}>
                <Image
                    src={value}
                    layout={'fill'}
                    className={`rounded-3 ${cls}`}
                />
            </div>
        </div>
    )
}

function Desc() {
    return (
        <div className={`col ${style.bgGrey} p-3 border rounded-3`}>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
        </div>
    )
}