
import style from '../../styles/common.module.css'
import Image from 'next/image'
import first from '../../img/vendor/first.jpg'
import sec from '../../img/vendor/sec.webp'
import third from '../../img/vendor/third.jpg'
import four from '../../img/vendor/four.jpg'

const arr = [
    first.src,
    sec.src,
    third.src,
    four.src
]



export function Main() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 pe-0">
                    <Image
                        src={sec.src}
                        width={"800px"}
                        height={'360px'}
                        className={'rounded-3'}
                    />
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    {arr.map(Cols)}
                </div>
            </div>
            <button className={`${style.bgGrey} border mt-5 px-3 py-2 ms-3`} >
                Description
            </button>
            <button className='bg-none border ms-3 py-2 px-3'>
                Reviews
            </button>
            <div className='container'>
                <div className='row'>
                    <div className={`col ${style.bgGrey} p-3 border rounded-3`}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                        </p>
                    </div>
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