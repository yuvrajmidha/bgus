import { Link } from '@chakra-ui/react'
import React from 'react'

export default function index({as, href, ...props}) {
  return (
    <Link href={props.as ? props.as : props.href} {...props} />
  )
}
