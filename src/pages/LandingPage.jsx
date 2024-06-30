import People from "../assets/peopleLandingPageImage.png"
import Google from "../assets/withGoogleButton.png"
import Facebook from "../assets/withFaceBookButton.png"
import line from "../assets/ConnectWithSeparator.png"
import forgot from "../assets/ForgotPassword.png"
import Continue from "../assets/ContinueButton.png"
import aac from "../assets/AgreeAndContinue.png"
import { useState } from "react"
import "../styles/LandingPage.css"

function SignIn(){
    return (
        <div className="SignInMain">
            <div className="fg">
                <img src={Google} width="440"></img>
                <img src={Facebook} width="440"></img>
                <img src={line} width="440"></img>
            </div>
            <br></br>
            <div className="ep">
                <input placeholder="Email" type="text"></input>
                <input placeholder="Password"  type="text"></input>
                <div className="rememberForgot">
                    <label className="rememberMe">
                        <input type="checkbox" />
                        <span>Remember Me</span>
                    </label>
                    <img src={forgot} alt="Forgot Password" className="forgotPassword" />
                </div>
                <div>
                    <img src={Continue} width="440"></img>
                </div>

            </div>
        </div>
    )
}

function JoinIn(){
    return (
        <div className="JoinInMain">
            <div className="fg">
                <img src={Google} width="440"></img>
                <img src={Facebook} width="440"></img>
                <img src={line} width="440"></img>
            </div>
            <br></br>
            <div className="ep">
                <input placeholder="Email" type="text"></input>
                <input placeholder="Password"  type="text"></input>
                <div className="PasswordStrength">Password Strength</div>
                <div className="Button">
                    <img src={aac} width="440"></img>
                </div>

            </div>
        </div>
    )
}



const LandingPage = () => {
    const [activeTab, setActiveTab] = useState('signin');
  return (
    <div className="Main">
        {/* <div className="NavBar">

        </div> */}
        <div className="Content">
            <div className="leftComponent">
                <div className="Heading">
                    Explore your 
                    <span className="hobby-text"> hobby </span> 
                    or 
                    <span className="passion-text"> passion</span>
                    <br />
                    <br />
                </div>
                <div className="description">
                Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…<br />
                If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.<br />
                <br />
                </div>
                <div className="image">
                    <img src={People} alt="image"></img>
                </div>
            </div>
            <div className="rightComponent">
                <div className="tabs">
                    <div 
                        className={`SignIn ${activeTab === 'signin' ? 'active' : ''}`} 
                        onClick={() => setActiveTab('signin')}
                    >
                        Sign In
                    </div>
                    <div 
                        className={`JoinIn ${activeTab === 'joinin' ? 'active' : ''}`}  
                        onClick={() => setActiveTab('joinin')}
                    >
                        Join In
                    </div>
                </div>
                {activeTab === 'signin' ? <SignIn /> : <JoinIn />}
            </div>
        </div>
    </div>
  )
}

export default LandingPage