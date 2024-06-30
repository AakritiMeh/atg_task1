import Addlogo from "../assets/Addlogo.png"
import "../styles/AddYourOwn.css"
const AddYourOwn = () => {
  return (
    <div className="AYOMain">
        <div className="AYOContent">
            <div className="AYOHeading">
                <div>
                    <img src={Addlogo} alt="add"></img>
                </div>
                <div>
                    Add Your Own
                </div>
            </div>
            <div className="AYOdescription">
            Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page
            </div>
            <div className="AYOButton">
                <button >Add New</button>
            </div>

        </div>

    </div>
  )
}

export default AddYourOwn