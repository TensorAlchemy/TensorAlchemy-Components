import React from 'react'
import {Flex} from '@chakra-ui/react'

import type {FC} from 'react'
import type {FlexProps} from '@chakra-ui/react'

interface ContainerProps extends FlexProps {}

const Container: FC<ContainerProps> = (props) => {
  return (
    <Flex
      {...props}
      className={
        'tensoralchemy-container' + (props.className ? ' ' + props.className : '')
      }
      flexDirection={props.flexDirection ? props.flexDirection : 'column'}
      flexWrap="wrap"
      justifyContent="flex-start"
      alignItems={props.alignItems ? props.alignItems : 'stretch'}
    >
      {props.children}
    </Flex>
  )
}

export {type ContainerProps, Container}
