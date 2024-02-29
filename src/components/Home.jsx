import App from '../App';
import Banner from '../shared/Banner';

function Home() {
    const img = "https://images.pexels.com/photos/4506936/pexels-photo-4506936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-20' id='home'>
       <Banner banner={img} heading={"Develop your skills without diligence"} 
       subheading={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati perspiciatis similique vel placeat odio maiores officia dignissimos dicta molestiae. Debitis."}
       btn1={"Get Started"} btn2={"Discount"}/>
    </div>
  )
}

export default Home