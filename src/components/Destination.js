import "@/components/DestinationStyles.css"
import DestinationProps from "./DestinationProps"

const Destination = () => {
  return (
    <div className="destination">
        <h1>Popular Destinations</h1>
        <p className="paragraphGeneral">Tours give you the opportunity to see a lot, within a time frame.</p>
        <DestinationProps
        className="firstDescription"
        heading="Santorini, Greece"
        text1="Santorini, known since ancient times as Thira, is one of the most famous islands in the world. 
               The fact that you can sit in front of the caldera, enjoy local dishes, 
               a drink or a coffee while gazing at the remarkable beauty of an active volcano is priceless!"
        text2="The island is actually a group of islands consisting of Thira, Thirassia, Aspronissi, 
                Palea and Nea Kameni in the southernmost part of the Cyclades."
        text3="Santorini’s volcano is one of the few active volcanoes on Greek and European land 
               The islands that form Santorini came into existence as a result of intensive volcanic 
               activity; twelve huge eruptions occurred, one every 20,000 years approximately, 
               and each violent eruption caused the collapse of the volcano’s central part creating 
               a large crater (caldera). The volcano, however, managed to recreate itself over and 
               over again."
        video1="/pexels-alleksana-10748209 (1080p).mp4"
        video2="/pexels-james-booker-5220600 (1080p).mp4"/>
        <br/>
        <br/>
        <br/>
        <br/>
        <DestinationProps
        className="firstDescriptionReverse"
        heading="Grand Canyon, Arizona"
        text1="The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, 
               United States. The Grand Canyon is 277 miles (446 km) long, up to 18 miles (29 km) wide 
               and attains a depth of over a mile (6,093 feet or 1,857 meters)"
        text2="The canyon and adjacent rim are contained within Grand Canyon National Park, the Kaibab National Forest, 
               Grand Canyon–Parashant National Monument, the Hualapai Indian Reservation, the Havasupai Indian Reservation 
               and the Navajo Nation. The surrounding area is contained within the Baaj Nwaavjo I'tah Kukveni – Ancestral Footprints 
               of the Grand Canyon National Monument."
        text3="The Grand Canyon is a river valley in the Colorado Plateau that exposes uplifted Proterozoic and Paleozoic strata,
               and is also one of the six distinct physiographic sections of the Colorado Plateau province. Even though it is not 
               the deepest canyon in the world, the Grand Canyon is known for its visually 
               overwhelming size and its intricate and colorful landscape. Geologically, it is significant because of the thick sequence of 
               ancient rocks that are well preserved and exposed in the walls of the canyon. These rock layers record much of the early 
               geologic history of the North American continent."
        videoClass1="vidClass1"
        videoClass2="vidClass2"
        video1="/pexels-tima-miroshnichenko-5973390 (2160p).mp4"
        video2="/pexels-vasilis-karkalas-15780762 (2160p).mp4"/>
        <br/>
        <br/>
        <br/>
        <br/>
        <DestinationProps
        className="firstDescription"
        heading="Paris, France"
        text1="Paris is positioned at the centre of the Île-de-France region, which is crossed by the Seine, Oise, and Marne rivers. 
               The city is ringed with great forests of beech and oak; they are called the “lungs of Paris,” for they help to purify 
               the air in the heavily industrialized region."
        text2="Paris, city and capital of France, situated in the north-central part of the country. People were living on the site of 
               the present-day city, located along the Seine River some 233 miles (375 km) upstream from the river’s mouth on the 
               English Channel (La Manche), by about 7600 BCE. The modern city has spread from the island (the Île de la Cité) and 
               far beyond both banks of the Seine."
        text3="Paris occupies a central position in the rich agricultural region known as the Paris Basin, 
               and it constitutes one of eight départements of the Île-de-France administrative region. It is by far the country’s most 
               important centre of commerce and culture. Area city, 41 square miles (105 square km); metropolitan area, 
               890 square miles (2,300 square km). Pop. (2020 est.) city, 2,145,906; (2020 est.) urban agglomeration, 10,858,874."
        video1="/pexels-késsio-lemos-15203565 (2160p).mp4"
        video2="/pexels-pexels-user-17629031 (2160p).mp4"/>
    </div>
  )
}

export default Destination