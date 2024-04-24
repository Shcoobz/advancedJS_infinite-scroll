import { useEffect } from 'react';

/**
 * Custom hook to implement infinite scrolling functionality.
 * @param {Function} loadMore - Function to load more data when the user scrolls to the end of the page.
 * @param {boolean} loading - Indicates if the application is currently loading data.
 */
function useInfiniteScroll(loadMore, loading) {
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
}
export default useInfiniteScroll;
