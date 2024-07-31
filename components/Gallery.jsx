import Link from 'next/link'
import React from 'react'
import MasonryLayout from './GridLayout'
import Head from 'next/head'
import Image from 'next/image'

export const Gallery = ({ images, currentImage = null, id = "" }) => {
    return (
        <>
            <Head>
                <title>{currentImage ? currentImage.name : "kimkorng.photo"}</title>
            </Head>
            <MasonryLayout>
                {images && images.length > 0 &&
                    images.map((image) => (
                        <div key={image.id} className={`${image.id === id ? "flex justify-center w-full h-screen fixed inset-0 bg-[#87827F] z-40" : "mb-1"}`}>

                            <Link href={`/${image.id}`} className="cursor-zoom-in">
                                <Image
                                    src={image.src}
                                    alt={image.name}
                                    width={image.width}
                                    height={image.height}
                                    className={`${image.id === id ? "object-contain duration-200 animate-fadeIn max-h-full min-w-full min-h-full w-auto block" : "object-cover duration-200 hover:brightness-75"}`}
                                />
                            </Link>
                            {image.id === id &&
                                <>
                                    <Link href="/" className='fixed w-full h-screen cursor-zoom-out'></Link>
                                    {
                                        image.prev &&
                                        <Link href={image.prev} className='group fixed top-1/2 transform -translate-y-1/2 left-0 flex items-center justify-center w-20 h-screen'>
                                            <div className="hidden sm:flex items-center justify-center rounded-full w-8 h-8 bg-gray-300 bg-opacity-25 duration-200 group-hover:bg-opacity-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                                    <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </Link>
                                    }
                                    {
                                        image.next &&
                                        <Link href={image.next} className='group fixed top-1/2 transform -translate-y-1/2 right-0 flex items-center justify-center w-20 h-screen'>
                                            <div className="hidden sm:flex items-center justify-center rounded-full w-8 h-8 bg-gray-300 bg-opacity-25 duration-200 group-hover:bg-opacity-50">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
                                                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </Link>
                                    }
                                </>
                            }
                        </div>
                    ))}
            </MasonryLayout>
        </>
    )
}
