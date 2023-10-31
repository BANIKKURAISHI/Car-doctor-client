import img1 from "../assets/images/banner/1.jpg"
import img2 from "../assets/images/banner/2.jpg"
import img3 from "../assets/images/banner/3.jpg"
import img4 from "../assets/images/banner/4.jpg"
import img5 from "../assets/images/banner/5.jpg"
import img6 from "../assets/images/banner/6.jpg"

const Banner = () => {
    return (
        <div>
          <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-xl" />
    <div className="absolute flex items-center pl-5 transform rounded-xl  h-full  top-0 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21, 0)]">
    <div className=" flex flex-col text-white">
    <h2 className="text-6xl font-bold space-y-7">Affordable <br />Price For Car<br />Servicing</h2>
    <h2>There are many variations of passages of  available,
    but<br/>the majority have suffered alteration in some form</h2>
    <div className="space-y-7">
    <button className="btn btn-active btn-secondary mr-5">Secondary</button>
    <button className="btn btn-outline btn-white btn-secondary">Secondary</button>
    </div>
    </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide6" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2} className="w-full rounded-xl" />
    <div className="absolute flex items-center pl-5 transform rounded-xl  h-full  top-0 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21, 0)]">
    <div className=" flex flex-col text-white">
    <h2 className="text-6xl font-bold space-y-7">Affordable <br />Price For Car<br />Servicing</h2>
    <h2>There are many variations of passages of  available,
    but<br/>the majority have suffered alteration in some form</h2>
    <div className="space-y-7">
    <button className="btn btn-active btn-secondary mr-5">Secondary</button>
    <button className="btn btn-outline btn-white btn-secondary">Secondary</button>
    </div>
    </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3} className="w-full rounded-xl" />
    <div className="absolute flex items-center pl-5 transform rounded-xl  h-full  top-0 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21, 0)]">
    <div className=" flex flex-col text-white">
    <h2 className="text-6xl font-bold space-y-7">Affordable <br />Price For Car<br />Servicing</h2>
    <h2>There are many variations of passages of  available,
    but<br/>the majority have suffered alteration in some form</h2>
    <div className="space-y-7">
    <button className="btn btn-active btn-secondary mr-5">Secondary</button>
    <button className="btn btn-outline btn-white btn-secondary">Secondary</button>
    </div>
    </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4} className="w-full rounded-xl" />
    <div className="absolute flex items-center pl-5 transform rounded-xl  h-full  top-0 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21, 0)]">
    <div className=" flex flex-col text-white">
    <h2 className="text-6xl font-bold space-y-7">Affordable <br />Price For Car<br />Servicing</h2>
    <h2>There are many variations of passages of  available,
    but<br/>the majority have suffered alteration in some form</h2>
    <div className="space-y-7">
    <button className="btn btn-active btn-secondary mr-5">Secondary</button>
    <button className="btn btn-outline btn-white btn-secondary">Secondary</button>
    </div>
    </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
    <img src={img5} className="w-full rounded-xl" />
    <div className="absolute flex items-center pl-5 transform rounded-xl  h-full  top-0 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21, 0)]">
    <div className=" flex flex-col text-white">
    <h2 className="text-6xl font-bold space-y-7">Affordable <br />Price For Car<br />Servicing</h2>
    <h2>There are many variations of passages of  available,
    but<br/>the majority have suffered alteration in some form</h2>
    <div className="space-y-7">
    <button className="btn btn-active btn-secondary mr-5">Secondary</button>
    <button className="btn btn-outline btn-white btn-secondary">Secondary</button>
    </div>
    </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide6" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide6" className="carousel-item relative w-full">
    <img src={img6} className="w-full rounded-xl" />
    <div className="absolute flex items-center pl-5 transform rounded-xl  h-full  top-0 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21, 0)]">
    <div className=" flex flex-col text-white">
    <h2 className="text-6xl font-bold space-y-7">Affordable <br />Price For Car<br />Servicing</h2>
    <h2>There are many variations of passages of  available,
    but<br/>the majority have suffered alteration in some form</h2>
    <div className="space-y-7">
    <button className="btn btn-active btn-secondary mr-5">Secondary</button>
    <button className="btn btn-outline btn-white btn-secondary">Secondary</button>
    </div>
    </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide5" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Banner;
