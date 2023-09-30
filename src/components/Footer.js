import "@/components/FooterStyles.css"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trippy</h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div className="footerIcon">
          <Link href="/"><img src="/instagram.png"/></Link>
          <Link href="/"><img src="/facebook.png"/></Link>
          <Link href="/"><img src="/behance.png"/></Link>
          <Link href="/"><img src="/twitter.png"/></Link>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <Link href="/">Changelog</Link>
          <Link href="/">Status</Link>
          <Link href="/">License</Link>
          <Link href="/">All Versions</Link>
        </div>
        <div>
          <h4>Community</h4>
          <Link href="/">Github</Link>
          <Link href="/">Issues</Link>
          <Link href="/">Project</Link>
          <Link href="/">Twitter</Link>
        </div>
        <div>
          <h4>Help</h4>
          <Link href="/">Support</Link>
          <Link href="/">Troubleshooting</Link>
          <Link href="/">Contact Us</Link>
        </div>
        <div>
          <h4>Others</h4>
          <Link href="/">Terms of Service</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Licenses</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer