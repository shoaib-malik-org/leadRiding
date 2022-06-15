import randomId from 'random-id'

const cate = [
    {
        title: 'HOME',
        subCate: [
            'AC REPAIRS',
            'PAINTERS',
            'HOME CLEANING',
            'CARPENTERS',
            'ELECTRICIANS',
            'PLUMBERS',
            'MASSAGE SERVICES'
        ]
    },
    {
        title: 'HOME APPLIANCES',
        subCate: [
            'TV REPAIRS',
            'WASHING MACHINE',
            'MICROWAVE OVEN',
            'ELECTRIC CHIMNEY',
        ]
    },
    {
        title: 'PEST CONTROL SERVICE',
        subCate: [
            'BEDBUG CONTROL',
            'MOSQUITO CONTROL',
            'COCKROACH & ANT CONTROL',
            'TERMITE CONTROL'
        ]
    },
    {
        title: 'REPAIRS & SERVICES',
        subCate: [
            'AC',
            'CAR',
            'COMPUTER',
            'LAPTOP',
            'MOTORCYCLE',
            'MOBILE PHONE',
            'REFRIGERATOR (FRIDGE)',
            'TV'
        ]
    },
    {
        title: 'PACKERS & MOVERS',
        subCate: [
            'LOCAL / WITHIN CITY',
            'NATIONAL',
            'INTERNATIONAL',
            'VEHICLE SHIFTING ONLY',
        ]
    },
    {
        title: 'CATERERS',
        subCate: [
            'BIRTHDAY PARTY',
            'HOUSE WARMING',
            'PARTY'
        ]
    },
    {
        title: 'DOCTORS',
        subCate: [
            'CHILD SPECIALISTS',
            'BONE & JOINTS',
            'AYURVEDIC',
            'UNANI',
            'TRICHOLOGISTS',
            'THYROID',
            'SKIN',
            'HAIR',
            'SEXOLOGISTS',
            'PHYCHOLOGISTS',
            'PILES',
            'PHYSIOTHERAPISTS',
            'ORTHOPEADIC',
            'PAEDIATRICIANS',
            'OPHTHALOMOLOGISTS',
            'NEUROLOGOSTS',
            'HOMEOPATHIC',
            'GENRAL PHYSICIANS',
            'EYE SPECIALISTS',
            'ENT SPECIALISTS',
            'DIETITIANS',
            'DENTISTS',
            'CHEST SPECIALISTS',
            'CARDIOLOGISTS',
            'COSMATIC SURGEONS'
        ]
    },
    {
        title: 'BANQUET HALLS',
        subCate: [
            'STAR BANQUET HALL',
            'AC BANQUET HALL',
            'NON AC BANQUET HALL'
        ]
    },
    {
        title: 'WEDDING PLANNERS',
        subCate: [
            'BANQUET HALLS',
            'CATERERS',
            'FLORISTS',
            'WEDDING CARD',
            'MEHENDI ARTISTS',
            'D J SERVICES',
            'DANCE GROUPS',
            'DECORATIONS',
            'DHOL SERVICES',
            'DOLI SERVICES',
            'PHOTOGRAPHERS',
            'JWELLERY SHOP',
            'MANDAP DECORATORS',
            'MARRIAGE GARDENS',
            'MUSIC BANDS',
        ]
    },
    {
        title: 'BEAUTY PARLOURS',
        subCate: [
            'SKIN CARE TREATMENTS',
            'FACIAL',
            'HAIR COLOURING',
            'HEAD MASSAGE',
            'FACE THREADING',
            'HAIR CARE TREATMENT',
            'PEDICURE',
            'MANICURE',
            'SKIN CARE TREATMENT',
            'TRIMMING',
            'BLEACHING SERVICE',
            'HAIR PERMING / STRAIGHTENING',
            'NAIL ART',
            'BODY WAXING',
            'MAKEUP',
            'HAIR CUT',
            'HAIR STYLE',
            'BRIDAL SERVICES',
            'FACIAL',
            'MASSAGE SERVICES'
        ]
    },
    {
        title: 'BRIDAL MAKEUP',
        subCate: [
            'HOME',
            'PARLOURS'
        ]
    },
    {
        title: 'SPA',
        subCate: [
            'BODY MASSAGE',
            'STEAM BATH',
            'BODY SCRUB',
            'PAIN RELIEF TREATMENT',
            'BODY POLISH',
            'BODY WRAPS',
            'SKIN CARE TREATMENT'
        ]
    }
]



export function Sider() {
    return (
        <div className="container">
            <h6 className="text-sans fw-bold">
                CATEGORIES
            </h6>
            <div className="row bg-light py-3 rounded-3 border">
                {cate.map(Cols)}
            </div>
        </div >
    )
}

function Cols(value) {
    var id = randomId(30, 'number')
    return (
        <div className="col-12 mb-2 position-relative text-sans" key={value.title}>
            <button className="not-btn text-sm w-100 text-start" type="button" data-bs-toggle="collapse" data-bs-target={"#" + id} aria-expanded="false" aria-controls="collapseExample">
                {value.title}
                <svg xmlns="http://www.w3.org/2000/svg" className="icon position-absolute end-0 me-3 top-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            <div className="collapse" id={id}>
                <div className="card-body mt-2 ms-3">
                    {value.subCate.map(Btn)}
                </div>
            </div>
        </div>
    )
}

function Btn(value) {
    return (
        <button className="not-btn text-sm w-100 text-start mb-2" key={value}>
            {value}
        </button>
    )
}