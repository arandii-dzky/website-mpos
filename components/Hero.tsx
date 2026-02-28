import React from 'react'

export const Hero = () => {
  return (
    <>
    <div className='w-full min-h-[700px] h-[50vh] overflow-hidden'>
        <img className="w-full h-full object-cover"src="tesy.jpeg" style={{borderRadius: '0 0 3000px 3000px / 400px 400px 400px 400px'}}/>
    </div>
    
   <div className="min-h-screen flex mt-20 justify-center">
  <main className="max-w-3xl mx-auto text-center space-y-6">
    <div>
      <h1 className="text-4xl font-bold">About us</h1>
    </div>

    <div className="space-y-4 text-gray-600 leading-relaxed mb-10">
      <p className="text-[23px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reprehenderit odio deleniti. 
        Debitis et architecto sunt, sapiente autem labore quae vitae vel quaerat, accusamus quia magnam 
        fugiat reprehenderit velit. Sint.
      </p>

      <p className='text-[23px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, fuga eaque similique nihil enim 
        asperiores placeat dolore a labore vel nulla, atque sint nobis ab quis veritatis aliquid natus! Harum?
      </p>
    </div>

    <div className='flex gap-3 justify-center'>
      <button className='border-2 w-35 h-10 rounded-2xl bg-[#A40000] border-[#A40000] text-white font-bold'> <a href="https://www.instagram.com/mposbcishs">@mposbcishs</a></button>
       <button className='border-2 w-35 h-10 rounded-2xl bg-[#A40000] border-[#A40000] text-white font-bold'><a href="https://www.instagram.com/ypbic.id">@ypbic.id</a></button>
    </div>
  </main>
</div>
  </>
     
  )
}
