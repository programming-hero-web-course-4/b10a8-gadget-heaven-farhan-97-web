import { Link } from 'react-router-dom';
import bph from '../../assets/assets/banner.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-[#9538E2] min-h-screen">
  <div className="text-center">
    <div className="max-w-3xl relative bottom-32">
      <h1 className="text-5xl font-bold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
      <p className="py-6 text-white">
      Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
      </p>
      
     <Link to={'dashboard'}> <button className="btn btn-primary">Shop now</button></Link>
    </div>
  </div>
</div>
        <div className='w-3/5 h-1/2 mx-auto relative bottom-80 border border-solid p-6'><img className='w-full h-1/2' src={bph} alt="" /></div>
        </div>
    );
};

export default Banner;