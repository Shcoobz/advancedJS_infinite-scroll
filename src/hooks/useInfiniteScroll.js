import { useEffect } from 'react';

const useInfiniteScroll = (scrollRef, loadMore) => {
  useEffect(() => {
    const currentElement = scrollRef.current;

    const handleScroll = () => {
      if (currentElement) {
        const { scrollTop, scrollHeight, clientHeight } = currentElement;
        if (clientHeight + scrollTop >= scrollHeight - 10) {
          loadMore();
        }
      }
    };

    if (currentElement) {
      currentElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentElement) {
        currentElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scrollRef, loadMore]);
};

export default useInfiniteScroll;
