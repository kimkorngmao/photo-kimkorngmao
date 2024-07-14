import axios from 'axios';
import { Gallery } from '../components/Gallery';
import Link from 'next/link';

export default function Home({ images }) {
  return (
    <>
      <Gallery images={images} />

      <ul className="fixed bottom-10 right-10 flex items-center gap-2">
        <li>
          <Link href="https://github.com/kimkorngmao" rel="noopener noreferrer" target="_blank" className='inline-block text-xs uppercase font-semibold flex items-center justify-center w-9 h-9 rounded-full text-gray-900 bg-gray-400 hover:bg-opacity-50 transition duration-200 backdrop-blur-xl bg-opacity-25'>
          <svg viewBox="0 0 24 24" className="size-5 fill-slate-900"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"></path></svg>
          </Link>
        </li>
        <li>
          <Link href="https://www.kimkorngmao.com" rel="noopener noreferrer" target="_blank" className='inline-block text-xs uppercase font-semibold flex items-center justify-center w-9 h-9 rounded-full text-gray-900 bg-gray-400 hover:bg-opacity-50 transition duration-200 backdrop-blur-xl bg-opacity-25'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
            </svg>
          </Link>
        </li>
        <li>
          <Link href="https://web.facebook.com/kiimkorngmao/" rel="noopener noreferrer" target="_blank" className='inline-block text-xs uppercase font-semibold px-4 flex items-center justify-center h-9 rounded-full text-gray-900 bg-gray-400 hover:bg-opacity-50 transition duration-200 backdrop-blur-xl bg-opacity-25'>Facebook</Link>
        </li>
      </ul>
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