import React from 'react'
import {Heading as ChakraHeading} from '@chakra-ui/react'

import type {FC} from 'react'
import type {HeadingProps as ChakraHeadingProps} from '@chakra-ui/react'

interface HeadingProps extends ChakraHeadingProps {}

const Heading: FC<HeadingProps> = (props) => {
  return (
    <ChakraHeading
      {...props}
      className={
        'tensoralchemy-heading' + (props.className ? ' ' + props.className : '')
      }
    >
      {props.children}
    </ChakraHeading>
  )
}

export {type HeadingProps, Heading}
