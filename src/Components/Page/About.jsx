import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col relative lg:flex-row ">
            <div className='lg:w-2/4 h-96 -mt-20 '>
            <img
            src={person}
            className="w-[500px] h-[500px]  rounded-lg shadow-2xl"
          />
            <img
            src={parts}
            className="w-1/4 h-80 rounded-lg border-8 border-white shadow-2xl absolute top-1/2 left-60"
          />
            </div>
         
          <div className='lg:w-1/2 ml-28 mt-20'>
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6 text-5xl ">
             We are qualified 
              & of experience <br />in this field
            </p>
            <p className='text-xl my-6'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.</p>
            <p className='text-xl'>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            
            <button className="btn btn-primary my-6 bg-[#ff3811]">Get info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
