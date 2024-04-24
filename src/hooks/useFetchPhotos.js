import { useState, useEffect, useCallback } from 'react';

const APIKEY = 'AO2ra6u4sQgTEKaqK6UYwVlZc4mB1LLpGNMAgmy10mY';
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${APIKEY}&count=5`;

const useFetchPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  const fetchPhotos = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPhotos((prev) => [...prev, ...data]);
      setLoading(false);
      if (isInitialLoad) {
        apiUrl = `https://api.unsplash.com/photos/random/?client_id=${APIKEY}&count=30`;
        setIsInitialLoad(false);
      }
    } catch (error) {
      console.error('Error fetching photos:', error);
      setLoading(false);
    }
  }, [isInitialLoad]);

  useEffect(() => {
    fetchPhotos();
  }, [fetchPhotos]);

  return { photos, loading, fetchPhotos };
};

export default useFetchPhotos;
