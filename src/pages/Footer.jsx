import social from "../assets/SocialMedia.png"
import "../styles/Footer.css"
const Footer = () => {
  return (
    <div className="Main">
        <div className="Hobbycue">
            <div>
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
            <div>
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
            <div>
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