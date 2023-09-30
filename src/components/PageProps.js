import '@/components/PageStyles.css'
import Link from 'next/link'

const PageProps = (props) => {
  return (
    <>
        <div className={props.className}>
          <div className='video' style={{width:'100vw', height:'100vh'}}>
            <video autoPlay="autoplay" loop="loop" muted style={{ width:'100%', height:'100%', objectFit:'cover'}}>
              <source src={props.pageVideo} type='video/mp4'/>
            </video>
          </div>
          <div className='pageText'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <Link className={props.buttonClass} href={`${props.url}`}>{props.buttonText}</Link>
          </div>
        </div>
    </>
  )
}

export default PageProps