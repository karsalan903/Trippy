import { PageWrapper } from "@/app/page-wrapper"
import ContactForm from "@/components/ContactForm"
import PageProps from "@/components/PageProps"

const Contact = () => {
  return (
    <>
      <PageWrapper>
        <PageProps
        className="pageProps"
        pageVideo="/pexels-roman-odintsov-5658615 (2160p).mp4"
        title="Contact"/>
        <ContactForm/>
      </PageWrapper>
    </>
  )
}

export default Contact