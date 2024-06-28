import Button from '@/app/components/Button'
import Card from '@/app/components/Card'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <Card title="Welcome to Audio-Node !" icon="logo">
            We are working hard to get Codershouse ready for everyone!
            While we wrap up the finishing youches, we are adding people gradually to make sure nothing breaks
        </Card>
        <div className='flex justify-center p-2 bg-neutral-900 mx-80'>
            <Button text="Get your Username"/>
        </div>
        <div className='text-center p-4 bg-neutral-900 mx-80 rounded-b-lg'>
            <span className='font-thin'>Have an invite text ?</span>
            <Link href="/login" className='text-blue-500 ml-2 font-semibold'>
                Sign in
            </Link>
        </div>
    </div>
  )
}

export default page