import { PageWrapper } from "@/app/page-wrapper"
import AboutUs from "@/components/AboutUs"
import PageProps from "@/components/PageProps"

const About = () => {
  return (
    <>
      <PageWrapper>
        <PageProps
        className="pageProps"
        pageVideo="/pexels-juancarlos-córdova-5846296 (2160p).mp4"
        title="About"/>
        <AboutUs />
      </PageWrapper>
    </>
  )
}

export default About