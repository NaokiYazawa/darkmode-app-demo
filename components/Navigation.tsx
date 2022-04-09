import Link from 'next/link'
import React from 'react'

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className="py-4 pr-6 text-gray-900 dark:text-white">Home</a>
      </Link>
      <Link href="/works">
        <a className="px-6 py-4 text-gray-900 dark:text-white">Works</a>
      </Link>
    </nav>
  )
}

export default Navigation
