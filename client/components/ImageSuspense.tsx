import { imageUrl } from '@/helpers/constants'
import Image from 'next/image'
import React, { ReactNode, Suspense } from 'react'

interface ImageWithSuspenseProps{
    src: string;
    alt: string;
    fallback?: ReactNode;
    width?:number  ,
    height?:number ,
    layout?:string
  }
const ImageSuspense: React.FC<ImageWithSuspenseProps> = ({ src, alt, fallback, width,height ,layout}) => {
  return (
    <Suspense fallback={fallback || <h1>Loading...</h1>}>
    <Image
      src={`${imageUrl}/${src}`}
      alt={alt}
      width={width}
      height={height}
      layout={layout}
    />
  </Suspense>
  )
}

export default ImageSuspense