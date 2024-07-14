import React from 'react';
import axios from 'axios';
import { Gallery } from './components/Gallery';
import Head from 'next/head';

const ViewImage = ({ images, currentImage }) => {
  return (
    <>
        <Head>
            <title>{currentImage.name || "kimkorngmao.photo"}</title>
        </Head>
      <Gallery images={images} id={currentImage.id} />
    </>
  );
};

export async function getStaticPaths() {
  const res = await axios.get('http://localhost:3000/api/images');
  const images = res.data;

  const paths = images.map((image) => ({
    params: { id: image.id.toString() }, 
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const res = await axios.get(`http://localhost:3000/api/images`);
  const images = res.data;
  const currentImage = images.find(image => image.id.toString() === params.id) || null;
  
  return {
    props: {
      images: images,
      currentImage
    }
  };
}

export default ViewImage;
