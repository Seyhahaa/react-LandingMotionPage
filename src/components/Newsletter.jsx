import Banner from "../shared/Banner"

function Newsletter() {
    const BannerImg = "https://images.pexels.com/photos/11123245/pexels-photo-11123245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl mx-auto my-12">
        {/* Use our banner component and pass props */}
        <Banner banner={BannerImg} heading="Each student an share their discount code for friends"
        subheading={'A simple paragraph is comprised of three major components. The which is often a declarative sentence, is called the "topic sentence."'} 
        btn1={"I have a code"} btn2={""}/>
    </div>
  )
}

export default Newsletter