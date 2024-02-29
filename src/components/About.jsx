
function About() {
    const imgAbout = "https://images.pexels.com/photos/8012259/pexels-photo-8012259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    const imgAboutII = "https://images.pexels.com/photos/7805666/pexels-photo-7805666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto space-y-10' id="about">
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/2'>
                <img src={imgAbout} alt="" />
            </div>
            <div className='md:w-2/5'>
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
                    We have been improving our product <span className='text-secondary'>for many years</span></h2>
                <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion. there are many 
                    different kinds of animals that live in china.
                </p>
                <button className='btnPrimary'>Get Started</button>
            </div>
        </div>
        
        {/* Second About */}
        <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
            <div className='md:w-1/2'>
                <img src={imgAboutII} alt="" />
            </div>
            <div className='md:w-2/5'>
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
                    You can practice at any<span className='text-secondary'>time convinent for you</span></h2>
                <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion. there are many 
                    different kinds of animals that live in china.
                </p>
                <button className='btnPrimary'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default About