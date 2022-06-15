
import react, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

var obj=[
    {
        name:"Home Service",
        img :'/img/homeservice.jpg'
    },
    {
        name:"Home Appliances Repairs",
        img :'/img/2.jpg'
    },
    {
        name:"Pest Control",
        img :'/img/3.jpg'
    },
    {
        name:"Repairs & Service",
        img :'/img/4.jpg'
    },
    {
        name:"Packers & Movers",
        img :'/img/5.jpg'
    },
    {
        name:"Caterers",
        img :'/img/6.jpg'
    },
    {
        name:"Doctor",
        img :'/img/7.avif'
    },
    {
        name:"Banquet Halls",
        img :'/img/8.jpg'
    },
    {
        name:"Wedding",
        img :'/img/9.avif'
    },
    {
        name:"Beauty parlour",
        img :'/img/10.avif'
    },
    {
        name:"Automobile",
        img :'/img/11.avif'
    },
    {
        name:"Civil Contractors",
        img :'/img/12.jpg'
    },
    {
        name:"Home Service",
        img :'/img/homeservice.jpg'
    },
    {
        name:"Home Appliances Repairs",
        img :'/img/2.jpg'
    },
    {
        name:"Pest Control",
        img :'/img/3.jpg'
    },
    {
        name:"Repairs & Service",
        img :'/img/4.jpg'
    },
    {
        name:"Packers & Movers",
        img :'/img/5.jpg'
    },
    {
        name:"Caterers",
        img :'/img/6.jpg'
    },
    {
        name:"Doctor",
        img :'/img/7.avif'
    },
    {
        name:"Banquet Halls",
        img :'/img/8.jpg'
    },
    {
        name:"Wedding",
        img :'/img/9.avif'
    },
    {
        name:"Beauty parlour",
        img :'/img/10.avif'
    },
    {
        name:"Automobile",
        img :'/img/11.avif'
    },
    {
        name:"Civil Contractors",
        img :'/img/12.jpg'
    },
    {
        name:"Home Service",
        img :'/img/homeservice.jpg'
    },
    {
        name:"Home Appliances Repairs",
        img :'/img/2.jpg'
    },
    {
        name:"Pest Control",
        img :'/img/3.jpg'
    },
    {
        name:"Repairs & Service",
        img :'/img/4.jpg'
    },
    {
        name:"Packers & Movers",
        img :'/img/5.jpg'
    },
    {
        name:"Caterers",
        img :'/img/6.jpg'
    },
    {
        name:"Doctor",
        img :'/img/7.avif'
    },
    {
        name:"Banquet Halls",
        img :'/img/8.jpg'
    },
    {
        name:"Wedding",
        img :'/img/9.avif'
    },
    {
        name:"Beauty parlour",
        img :'/img/10.avif'
    },
    {
        name:"Automobile",
        img :'/img/11.avif'
    },
    {
        name:"Civil Contractors",
        img :'/img/12.jpg'
    },
    {
        name:"Home Service",
        img :'/img/homeservice.jpg'
    },
    {
        name:"Home Appliances Repairs",
        img :'/img/2.jpg'
    },
    {
        name:"Pest Control",
        img :'/img/3.jpg'
    },
    {
        name:"Repairs & Service",
        img :'/img/4.jpg'
    },
    {
        name:"Packers & Movers",
        img :'/img/5.jpg'
    },
    {
        name:"Caterers",
        img :'/img/6.jpg'
    },
    {
        name:"Doctor",
        img :'/img/7.avif'
    },
    {
        name:"Banquet Halls",
        img :'/img/8.jpg'
    },
    {
        name:"Wedding",
        img :'/img/9.avif'
    },
    {
        name:"Beauty parlour",
        img :'/img/10.avif'
    },
    {
        name:"Automobile",
        img :'/img/11.avif'
    },
    {
        name:"Civil Contractors",
        img :'/img/12.jpg'
    },
    {
        name:"Home Service",
        img :'/img/homeservice.jpg'
    },
    {
        name:"Home Appliances Repairs",
        img :'/img/2.jpg'
    },
    {
        name:"Pest Control",
        img :'/img/3.jpg'
    },
    {
        name:"Repairs & Service",
        img :'/img/4.jpg'
    },
    {
        name:"Packers & Movers",
        img :'/img/5.jpg'
    },
    {
        name:"Caterers",
        img :'/img/6.jpg'
    },
    {
        name:"Doctor",
        img :'/img/7.avif'
    },
    {
        name:"Banquet Halls",
        img :'/img/8.jpg'
    },
    {
        name:"Wedding",
        img :'/img/9.avif'
    },
    {
        name:"Beauty parlour",
        img :'/img/10.avif'
    },
    {
        name:"Automobile",
        img :'/img/11.avif'
    },
    {
        name:"Civil Contractors",
        img :'/img/12.jpg'
    },  


]


export default function Trending()
{
    
    return(<>
    <div className='text-center fw-bold text-5xl text-black pt-16'>Popular Categories</div>
    <div className='pl-5 pr-5  pt-32'>
    <div className="grid  grid-cols-1 gap-6  lg:grid-cols-6">
      {obj.map((d)=>{
      return(<>
      
        <Link href={"/category/Home"}>
        <a>
        <button href="" className="block" data-aos="fade-up">
  <Image 
    src={d.img}
    height={250}
    width={250}
    alt=""
    className="object-cover w-full h-40  rounded"
  />

  <div className="flex items-center justify-center mt-4 space-x-4">
    <p className="font-medium fw-bold crd-heading">{d.name}</p>
  </div>
</button>
        </a>
        </Link>

      
      </>)    
      })}
    
</div>
</div>
    </>)
}