// ** React Imports
import { ReactNode } from 'react'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'
import Link from 'next/link'
import HomePage from './home'

// ** Component Import

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  )
}
Home.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>


