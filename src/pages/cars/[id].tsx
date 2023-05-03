import React from 'react'
import { useRouter } from 'next/router'

function Car() {

    const router = useRouter()
    const {id} = router.query

  return (
    <div>Car {id}</div>
  )
}

export default Car