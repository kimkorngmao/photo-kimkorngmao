import Link from 'next/link'
import AppIcon from '../public/logo.svg';

export default function NotFound() {
  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='text-center text-gray-700'>
        <div className='mb-8 flex items-center justify-center'>
          <AppIcon width="64" height="64" />
        </div>
        <h2 className='text-2xl font-bold'>404</h2>
        <p className='mt-2 text-sm'>Photo not found.</p>
        <Link href="/" className='inline-block mt-7 duration-200 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full text-xs font-medium'>BACK TO PHOTOS.</Link>
      </div>
    </div>
  )
}