import loaderImage from '../../assets/loader.svg';

const ImageLoader = () => {
  return (
    <div className='loader' id='loader'>
      <img src={loaderImage} alt='Loading' />
    </div>
  );
};

export default ImageLoader;
