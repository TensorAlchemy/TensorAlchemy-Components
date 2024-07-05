import React from 'react'
import {Link as ChakraLink} from '@chakra-ui/react'

import type {FC} from 'react'
import type {LinkProps as ChakraLinkProps} from '@chakra-ui/react'

interface LinkProps extends ChakraLinkProps {}

const Link: FC<LinkProps> = (props) => {
  return (
    <ChakraLink
      {...props}
      className={'tensoralchemy-link' + (props.className ? ' ' + props.className : '')}
    >
      {props.children}
    </ChakraLink>
  )
}

export {type LinkProps, Link}
