import { Gallery } from './components/Gallery';
import axiosInstance from '@/utils/axiosInstance';

export default function Home({ images }) {
  return (
    <>
      <Gallery images={images} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axiosInstance.get('/api/images');
    const images = response.data;

    return {
      props: {
        images,
      },
    };
  } catch (error) {
    console.error('Error fetching images:', error);
    return {
      props: {
        images: [],
      },
    };
  }
}