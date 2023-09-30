import Destination from '@/components/Destination'
import Navbar from '@/components/Navbar'
import PageProps from '@/components/PageProps'
import { PageWrapper } from './page-wrapper'
import Trip from '@/components/Trip'
import Footer from '@/components/Footer'

export default function page() {
  return (
    <>
      <Navbar/>
      <PageWrapper>
      <PageProps
      className="pageProps"
      pageVideo="/pexels-dimitris-mourousiadis-6523735 (1440p).mp4"
      title="Your Journey Your Story"
      text="Choose Your Favorite Destination."
      buttonText="Travel Plan"
      url="/"
      buttonClass="show"/>
      <Destination/>
      <Trip/>
      <Footer/>
      </PageWrapper>
    </>
  )
}
