import './Loader.css'

const Loader = () => {
  return (
    <div className='w-full flex items-center justify-center min-h-screen'>
      <div className='pyramid-loader'>
        <div className='wrapper'>
          <span className='side side1'></span>
          <span className='side side2'></span>
          <span className='side side3'></span>
          <span className='side side4'></span>
          <span className='shadow'></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
