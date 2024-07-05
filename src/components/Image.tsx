import React from 'react'
import {Image as ChakraImage} from '@chakra-ui/react'

import type {FC} from 'react'
import type {ImageProps as ChakraImageProps} from '@chakra-ui/react'

interface ImageProps extends ChakraImageProps {}

const Image: FC<ImageProps> = (props) => {
  return (
    <ChakraImage
      {...props}
      className={'tensoralchemy-image' + (props.className ? ' ' + props.className : '')}
    >
      {props.children}
    </ChakraImage>
  )
}

export {type ImageProps, Image}
