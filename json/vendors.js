const vendors = [
    {
        id: '',
        name: '',
        email: '',
        phone: "",
        address: '',
        city: '',
        state: '',
        pincode: "",
        // if we make seperate collection we still have to update it
        leadLeft: '',
        // the date when vendor add himself in our site or app
        addDate: "",
        isAuthenticated: true,
        img: {
            profile: 'http://localhost:8000/vendor/img' + imgName,
            other: [
                'http://localhost:8000/vendor/img' + imgName,
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
            no: '',
            src: 'http://localhost:8000/vendor/img/' + imgName
        },
        pan: {
            no: '',
            src: 'http://localhost:8000/vendor/img/' + imgName
        },
        gst: {
            no: '',
            src: 'http://localhost:8000/vendor/img/' + imgName
        }
    }
]