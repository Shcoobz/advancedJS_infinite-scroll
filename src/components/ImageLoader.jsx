import loaderImage from '../../assets/loader.svg';

/**
 * Displays a loading animation.
 */
function ImageLoader() {
  return (
    <div className='loader' id='loader'>
      <img src={loaderImage} alt='Loading' />
    </div>
  );
}

export default ImageLoader;
