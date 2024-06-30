import Arrow from "../assets/TopArrow.png"
import People from "../assets/PeopleDancingComponent.png"
import "../styles/LastPage.css"

const Lastpage = () => {
  return (
    <div className="LastPageMain">
        <div className="HeadingLastPage">
            <span>Your </span>
            <span className="highlight hobby">Hobby</span>
            <span>, Your </span>
            <span className="highlight community">Community</span>
            <span>...</span>
        </div>
        <div className="nextline">
            <div className="Button">
                <button>Get Started</button>
            </div>
            <div className="ArrowUp">
                <img src={Arrow} alt="arrow"></img>
                <div className="TextForArrow">Go To Top ( Ctrl + Home )</div>
            </div>
        </div>
        <br />

        <div className="Image">
            <img src={People} alt="image"></img>
        </div>
        

    </div>

  )
}

export default Lastpage