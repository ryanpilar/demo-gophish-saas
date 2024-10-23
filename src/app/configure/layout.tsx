import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Steps from '@/components/Steps'
import { ReactNode } from 'react'

const STEPS = [
  {
    name: 'Step 1 - Setup Billing',
    description: 'Fill in your payment details.',
    url: '/setup-billing',
    imgPath: '/snake-1.png',
  },
  {
    name: 'Step 2: Configure Your Email',
    description: 'Make sure your email system knows about us.',
    url: '/upload',
    imgPath: '/snake-2.png',
  },
  {
    name: 'Step 3: Start Phishing',
    description: 'Add emails. Cast Your Campaign.',
    url: '/design',
    imgPath: '/snake-3.png',
  }
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
