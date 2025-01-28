import React from 'react'

export default function ProductCard({p}) {
  return (
    <div className='flex flex-col items-center gap-2.5 shadow rounded p-4'>
        <img src={p.image} alt="" className='h-[250px]' />
        <h5>{p.title}</h5>
        {/* <p>{p.ratings}</p> */}
        <p className='font-semibold'>{p.price}</p>
        <button className='px-2 py-1 w-full border rounded'>Buy Now</button>
    </div>
  )
}
