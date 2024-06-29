import quote from "../assets/quotelogo.png"
import AudioTrack from "../assets/AudioTrackComponent.png"
import Response from "../assets/ResponseByPerson.png"
import "../styles/Testimonials.css"
const desc="In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.";
const Testimonials = () => {
  return (
    <div className="Main">
        <div className="Content">
            <div className="Heading">
                <div>
                    <img src={quote} alt="add"></img>
                </div>
                <div>
                    Add Your Own
                </div>
            </div>
            <div className="description">
                {desc}
            </div>
            <div className="person">
                <div> <img src={AudioTrack} alt="audio"></img> </div>
                <div ><img src={Response}></img></div>
            </div>

        </div>
    </div>
  )
}

export default Testimonials