import "../styles/Features.css"
import Box from "../components/Box"
import people from "../assets/PeopleLogo.png"
import peopleHover from "../assets/PeopleHoverLogo.png"
import place from "../assets/PlaceLogo.png"
import placeHover from "../assets/PlaceHoverlogo.png"
import product from "../assets/ProductLogo.png"
import productHover from "../assets/ProductHoverLogo.png"
import prog from "../assets/ProgramLogo.png"
import progHover from "../assets/ProgramHoverLogo.png"

const peopleDesc="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.";
const placeDesc="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
const prodDesc="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.";
const progDesc="Find events, meetups and workshops related to your hobby.  Register or buy tickets online.";
const Features = () => {
    return (
      <div className="FeaturesMain">
        <div className="BoxWrapper">
          <Box 
            defaultImageSource={people}
            hoverImageSource={peopleHover}
            heading="People"
            text={peopleDesc}
            buttonText="Connect"
            color="#8064A2"
            hoverColor="#8064A2"
          />
        </div>
        <div className="BoxWrapper">
          <Box 
            defaultImageSource={place}
            hoverImageSource={placeHover}
            heading="Place"
            text={placeDesc}
            buttonText="Meet Up"
            color="#77933C"
            hoverColor="#77933C"
          />
        </div>
        <div className="BoxWrapper">
          <Box 
            defaultImageSource={product}
            hoverImageSource={productHover}
            heading="Product"
            text={prodDesc}
            buttonText="Get it"
            color="#C0504D"
            hoverColor="#C0504D"
          />
        </div>
        <div className="BoxWrapper">
          <Box 
            defaultImageSource={prog}
            hoverImageSource={progHover}
            heading="Program"
            text={progDesc}
            buttonText="Attend"
            color="#0096C8"
            hoverColor="#0096C8"
          />
        </div>
      </div>
    )
}


export default Features