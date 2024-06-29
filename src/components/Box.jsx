import PropTypes from 'prop-types';
import "../styles/Box.css"
const Box = ({ImageSource,Heading,Text,ButtonText}) => {
  return (
    <div className="BoxMain">
        <div className="heading">
            <div> <img src={ImageSource} alt={Heading}></img>  </div>
            <div> {Heading} </div>
        </div>
        <div className="Description">{Text}</div>
        <div>
            <button className="Button">{ButtonText}</button>
        </div>
    </div>
  )
}

Box.propTypes = {
    ImageSource: PropTypes.string.isRequired,
    Heading: PropTypes.string.isRequired,
    Text: PropTypes.string.isRequired,
    ButtonText: PropTypes.string.isRequired
  };

export default Box