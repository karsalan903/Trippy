import "@/components/FooterStyles.css"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Trippy</h1>
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
      </div>
    </div>
  )
}

export default Footer