import { useEffect } from 'react';

const useInfiniteScroll = (loadMore, loading) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
        !loading
      ) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loadMore, loading]);
};

export default useInfiniteScroll;
