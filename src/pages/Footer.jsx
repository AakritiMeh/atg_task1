import social from "../assets/SocialMedia.png"
import "../styles/Footer.css"
const Footer = () => {
  return (
    <div className="FooterMain">
        <div className="Hobbycue">
            <div className="FooterHeading">
                Hobbycue
            </div>
            <div className="c1comp">
                <div>About Us</div>
                <div>Our Services</div>
                <div>Work With Us</div>
                <div>FAQ</div>
                <div>Contact Us</div>
            </div>
        </div>
        <div className="HowDoI">
            <div className="FooterHeading">
                How Do I
            </div>
            <div className="c2comp">
                <div>Sign Up</div>
                <div>Add a Listing</div>
                <div>Claim Listing</div>
                <div>Post A Query</div>
                <div>Add a Blog Post</div>
                <div>Other Questions</div>
            </div>
        </div>
        <div className="QuickLinks">
            <div  className="FooterHeading">
                Quick Links
            </div>
            <div className="c3comp">
                <div>Listings</div>
                <div>Blog Posts</div>
                <div>Shop / Store</div>
                <div>Community</div>
            </div>
        </div>
        <div>
            <div className="SocialMedia">
                <div className="FooterHeading">Social Media</div>
                <img src={social}></img>
            </div>
            <div className="InviteFriends">
                <input placeholder="Email ID" type="text"></input>
                <div><button>Invite</button></div>
            </div>
        </div>
    </div>
  )
}

export default Footer