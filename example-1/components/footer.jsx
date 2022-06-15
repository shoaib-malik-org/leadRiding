import Link from "next/link"

const obj = [
    {
        Key: 1,
        Icon: <i className="bi bi-geo-alt-fill"></i>,
        H4: 'Find us',
        Span: 'F-18/12 shaheen bagh, New Delhi'
    },
    {
        Key: 2,
        Icon: <i className="bi bi-phone-fill"></i>,
        H4: 'Call us',
        Span: '9911223355'
    },
    {
        Key: 3,
        Icon: <i className="bi bi-envelope-fill"></i>,
        H4: 'Mail us',
        Span: 'abcd@gmail.com'
    },
]
const obj2 = [
    {
        Key:4,
        H3:'Category',
        C1:'Automobile',
        C2:'Furniture',
        C3:'Hospitality',
        C4:'Fashion',
        C5:'Electronics',
        C6:'Property'
    },
    {
        Key:5,
        H3:'Usefull Links',
        C1:'Home',
        C2:'About us',
        C3:'Contact us',
        C4:'Terms And Conditions',
        C5:'FAQ',
        C6:'Latest News'
    }
]

export default function MyFooter() {
    return (
        <>
            <main>
                <footer className="footer-section" style={{marginTop:"100px"}}>
                    <div className="container">
                        <div className="footer-cta pt-5 pb-5">
                            <div className="row">
                                {obj.map(Contact)}
                            </div>
                        </div>
                        <div className="footer-content pt-5 pb-5">
                            <div className="row">
                                <div className="col-lg-6 mb-50">
                                    <div className="footer-wid">
                                        <div className="footer-logo">
                                            <a href="/"><img src="/leadRiding.png" className="img-fluid" alt="logo" /></a>
                                        </div>
                                        <div className="footer-text">
                                            <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                                elit,Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="footer-social-icon">
                                            <span>Follow us</span>
                                            <a href="#"><i className="bi bi-instagram"></i></a>
                                            <a href="#"><i className="bi bi-facebook"></i></a>
                                            <a href="#"><i className="bi bi-github"></i></a>
                                        </div>
                                    </div>
                                </div>
                                {obj2.map(Footerinfo)}
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area">
                        <p className="align">Copyright &copy; 2018, All Right Reserved <span className="colorOrange">Sameer Royal</span></p>
                    </div>
                </footer>
            </main>
        </>
    )
}

function Contact(props) {
    return (
        <div className="col-xl-4 col-md-4 mb-30" key={props.Key}>
            <div className="single-cta">
                {props.Icon}
                <div className="cta-text">
                    <h4>{props.H4}</h4>
                    <span>{props.Span}</span>
                </div>
            </div>
        </div>
    )
}


function Footerinfo(props) {
    return (
        <div className="col-lg-3 col-md-6 " key={props.Key}>
            <div className="footer-wid">
                <div className="footer-wid-h3">
                    <h3>{props.H3}</h3>
                </div>
                <ul>
                    <li><Link href="/sidebar"><a >{props.C1}</a></Link></li>
                    <li><Link href="#"><a >{props.C2}</a></Link></li>
                    <li><Link href="#"><a >{props.C3}</a></Link></li>
                    <li><Link href="#"><a >{props.C4}</a></Link></li>
                    <li><Link href="#"><a >{props.C5}</a></Link></li>
                    <li><Link href="#"><a >{props.C6}</a></Link></li>
                </ul>
            </div>
        </div>
    )
}