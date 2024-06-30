import { useState } from 'react';
import PropTypes from 'prop-types';
import "../styles/Box.css"

const Box = ({ defaultImageSource, hoverImageSource, heading, text, buttonText, color , hoverColor}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
<div 
  className={`BoxMain ${isHovered ? 'hovered' : ''}`}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  style={{ 
    '--color': color,
    '--hoverColor': hoverColor
  }}
>
  <div className="heading">
    <div>
      <img 
        src={isHovered ? hoverImageSource : defaultImageSource} 
        alt={heading}
      />
    </div>
    <div>{heading}</div>
  </div>
  <div className="Description">{text} </div>
  <div>
    <button className="Button">{buttonText}</button>
  </div>
</div>
  )
}

Box.propTypes = {
  defaultImageSource: PropTypes.string.isRequired,
  hoverImageSource: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired
};

export default Box