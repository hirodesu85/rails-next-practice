import type { NextPage } from 'next'
import SimpleButton from '@/components/SimpleButton'

const HelloWorld: NextPage = () => {
  const handleOnClick = () => {
    console.log('Button clicked from HelloWorld')
  }

  return (
    <>
      <h1>Hello World</h1>
      <h2>Hello Next</h2>
      <h3>Hello Vercel</h3>
      <SimpleButton text={'From HelloWorld'} onClick={handleOnClick} />
    </>
  )
}

export default HelloWorld
