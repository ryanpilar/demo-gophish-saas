import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Steps from '@/components/Steps'
import { ReactNode } from 'react'

const STEPS = [
  {
    name: 'Step 0: Accept Terms & Setup Billing',
    description: 'Fill in your payment details.',
    url: '/preview',
    imgPath: '/snake-1.png',
  },
  {
    name: 'Step 1: Configure Your Email',
    description: 'Make sure your email system knows about us. We will be marked as spam if you do not!',
    url: '/upload',
    imgPath: '/snake-2.png',
  },
  {
    name: 'Step 2: Create Campaign',
    description: 'Choose campaign type and define frequency and duration',
    url: '/design',
    imgPath: '/snake-3.png',
  },
  {
    name: 'Step 3: Start Phishing',
    description: 'Add company emails that need phishing. Cast Your Campaign.',
    url: '/preview',
    imgPath: '/snake-1.png',
  },

]

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className='flex-1 flex flex-col'>
      <Steps steps={STEPS} />
      {children}
    </MaxWidthWrapper>
  )
}

export default Layout
