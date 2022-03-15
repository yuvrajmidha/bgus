import { Link } from '@chakra-ui/react'
import React from 'react'

export default function index({as, href, children}) {
  return (
    <a href={`${href}`}>{children}</a>
  )
}
