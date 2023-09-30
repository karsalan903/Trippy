import "@/components/DestinationStyles.css"

const DestinationProps = (props) => {
  return (
    <div className={props.className}>
        <div className="descriptionText">
            <h2>{props.heading}</h2>
            <p>{props.text1}</p>
            <br/>
            <p>{props.text2}</p>
            <br/>
            <p>{props.text3}</p>
        </div>
        <div className="vid">
            <video className={props.videoClass1} autoPlay="autoplay" loop="loop" muted>
                <source src={props.video1} type='video/mp4'/>
            </video>
            <video className={props.videoClass2} autoPlay="autoplay" loop="loop" muted>
                <source src={props.video2} type='video/mp4'/>
            </video>
        </div>
    </div>
  )
}

export default DestinationProps