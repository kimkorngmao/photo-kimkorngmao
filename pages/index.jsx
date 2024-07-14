import axios from 'axios';
import { Gallery } from './components/Gallery';

export default function Home({ images }) {
  return (
    <>
      <Gallery images={images} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get('http://localhost:3000/api/images'); // Replace with your API endpoint
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