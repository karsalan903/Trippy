import "@/components/TripStyles.css"

const TripProps = (props) => {
  return (
    <div className="tripCard">
        <div className="tripVideo">
            <video autoPlay="autoplay" loop="loop" muted>
                <source src={props.video} type="video/mp4"/>
            </video>
        </div>
        <br/>
        <h4>{props.heading}</h4>
        <br/>
        <p>{props.text}</p>
    </div>
  )
}

export default TripProps