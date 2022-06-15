import AOS from 'aos'
import { useEffect } from 'react'
import Link from 'next/link'


var obj = [
  {
    Image: "https://media.istockphoto.com/photos/worker-installs-windows-picture-id1313432202?b=1&k=20&m=1313432202&s=170667a&w=0&h=y0BXyxWCiUrcecIfaQhRnNBeaKS3I28U6m8jZjBpo-s=",
    name: "HOME SERVICES",
    link: "/category/Home"
  },
  {
    Image: "https://media.istockphoto.com/photos/technician-examining-dishwasher-picture-id1308686330?b=1&k=20&m=1308686330&s=170667a&w=0&h=lGIdRzbMwDmYIFiMlqA0ZuYg057UncHs0h83SiJHISw=",
    name: "HOME APPLIANCES",
    link: "/category/Home Appliances"
  },
  {
    Image: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmVwYWlyJTIwJTI2JTIwc2VydmljZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "REPAIR & SERVICES",
    link: "/category/Home"
  },
  {
    Image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9yJTIwc2VydmljZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name: "DOCTOR ",
    link: "/category/Home Appliances"
  },
  {
    Image: "https://media.istockphoto.com/photos/image-of-classic-luxury-reading-room-and-furnitures-picture-id1372259816?b=1&k=20&m=1372259816&s=170667a&w=0&h=6vuAWMs3oe6b-_6tZ4BKaeD9gxGIj3iXT11LAzm3hcc=",
    name: "FURNITURES ",
    link: "/category/Home Appliances"
  }
]


export default function Popular() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (<>
    <div className="pl-4 pr-4">
      <div className="grid  grid-cols-1 gap-4  lg:grid-cols-5" >
        {obj.map((d) => {
          return (<>

            <Link href={d.link}>
            <a className="relative block overflow-hidden bg-center bg-no-repeat bg-cover  rounded-3" style={{ backgroundImage: `url(${d.Image})` }} data-aos="fade-up">
              <span className="absolute z-10 inline-flex items-center px-3 py-1 text-xs font-semibold text-white bg-black rounded-full  right-4 top-4">
                4.5
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
              <div className=" p-12 pt-24 text-white bg-opacity-30">
                <h5 className="text-xl font-bold text-center crd-heading text-white">{d.name}</h5>
              </div>
            </a>
            </Link>

          </>)
        })}

      </div>
      <div className="pt-24 text-center text-4xl crd-heading">Are you looking for something? Stop Here</div>
      <p className="text-center text-black pt-2">Welcome to Lead Riding your one stop shop where you are assisted with day-to-day needs and exclusive planning and purchasing activities.</p>
    </div>
  </>)
}