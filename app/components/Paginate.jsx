import Link from 'next/link'
import React from 'react'

export default function Paginate() {
  return (
    <div className='pagi-div'>
      <Link href='#' className='pagi-btn'>Prev</Link>
      <p className='pagi-pge'>Page 1 of 1</p>
      <Link href='#' className='pagi-btn'>Next</Link>
    </div>
  )
}
