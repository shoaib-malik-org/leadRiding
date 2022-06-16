const vendors = [
    {
        id: '',
        lead_id:[

        ],
        name: '',
        email: '',
        phone: "",
        address: '',
        city: '',
        state: '',
        pincode: "",
        // if we make seperate collection we still have to update it
        leadLeft: 9,
        // the date when vendor add himself in our site or app
        addDate: "",
        isVerified: false,
        plan:"",
        referralID:'',
        imgs: {
            profile: 'http://localhost:8000/vendor/img' + imgName,
            other: [
                'http://localhost:8000/vendor/img' + id+imgName,
                'http://localhost:8000/vendor/img' + imgName,
                'http://localhost:8000/vendor/img' + imgName,
                'http://localhost:8000/vendor/img' + imgName,
                'http://localhost:8000/vendor/img' + imgName,
                'http://localhost:8000/vendor/img' + imgName,
                'http://localhost:8000/vendor/img' + imgName,
                'http://localhost:8000/vendor/img' + imgName,
                'http://localhost:8000/vendor/img' + imgName,
            ]
        },
        adhaar: {
            id: '',
            src: 'http://localhost:8000/vendor/doc/' + imgName
        },
        pan: {
            id: '',
            src: 'http://localhost:8000/vendor/img/' + imgName
        },
        gst: {
            id: '',
            // src: 'http://localhost:8000/vendor/img/' + imgName
        }
    }
]

const vendors_list=[
    {
        id:1,
        categories:[],
        subcategories:[],
        serviceCity:["Delhi"],
        // GPS location points
        currentLocation:"fgnfg"

    }
]