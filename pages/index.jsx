import axios from 'axios';
import { Gallery } from '../public/components/Gallery';

export default function Home({ images }) {
  return (
    <>
      <Gallery images={images} />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axios.get('https://photos.kimkorngmao.com/api/images');
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