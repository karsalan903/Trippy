import "@/components/TripStyles.css"
import TripProps from "./TripProps"

const Trip = () => {
  return (
    <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
        <div className="card">
          <TripProps
          video="/pexels-mikhail-nilov-8397112 (2160p).mp4"
          heading="Trip in Bali, Indonesia"
          text="There is no other place like Bali in this world. A magical blend of culture, 
                people, nature, activities, weather, culinary delights, nightlife, 
                and beautiful accommodation. Bali is rated as one of the best travel destinations 
                in the world by countless websites, review portals, and travel magazines each year – for very good reasons. 
                Whatever your age, background, budget or interest, there is something great for everyone to explore and discover. 
                And that’s a promise."/>
          <TripProps
          video="/pexels-sk-movies-&-photos-11284862 (2160p).mp4"
          heading="Trip in Dubai, United Arab Emirates(UAE)"
          text="Dubai, also spelled Dubayy, constituent emirate of the United Arab Emirates (formerly Trucial States or Trucial Oman). 
                The second most populous and second largest state of the federation (area 1,510 square miles [3,900 square km]), 
                it is roughly rectangular, with a frontage of about 45 miles (72 km) on the Persian Gulf. The emirate’s capital, 
                also named Dubai, is the largest city of the federation. The city is located on a small creek in the northeast part of the state."/>
          <TripProps
          video="/pexels-ibrahim-bennett-18079440 (2160p).mp4"
          heading="Trip to Malaysia"
          text="Malaysia, country of Southeast Asia, lying just north of the Equator, 
                that is composed of two noncontiguous regions: Peninsular Malaysia (Semenanjung Malaysia), also called West Malaysia (Malaysia Barat), 
                which is on the Malay Peninsula, and East Malaysia (Malaysia Timur), which is on the island of Borneo. 
                The Malaysian capital, Kuala Lumpur, lies in the western part of the peninsula, about 25 miles (40 km) 
                from the coast; the administrative centre, Putrajaya, is located about 16 miles (25 km) south of the capital."/>
        </div>
    </div>
  )
}

export default Trip