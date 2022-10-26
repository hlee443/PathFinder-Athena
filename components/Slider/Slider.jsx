import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faMagnifyingGlass, faFileLines, faHighlighter, faFont, faBookmark, faDownload, faSquareCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { colors } from "../../styles/globals";
import styled from "styled-components";

const TopSection = styled.div`
  display: flex;
  flex-direction: flex-end; 
`

const ContentCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  backgroundColor: colors.backgroundYellow,
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

    var icon = faSquareCheck
    var featureName = "Toolbar"
    var featureDescription = "Customize your documents to your needs"

  if(currentIndex===1){
    icon = faFileLines
    featureName = "Summarize"
    featureDescription = "Summarizes lengthy and complicated texts"
  }
  if(currentIndex===2){
    icon = faMagnifyingGlass
    featureName = "Dicitionary"
    featureDescription = "Look up the meaning of English words"
  }
  if(currentIndex===3){
    icon = faHighlighter
    featureName = "Highlight"
    featureDescription = "Highlight texts"

  }
  if(currentIndex===4){
    icon = faDownload
    featureName = "Download"
    featureDescription = "Download the document"

  }
  if(currentIndex===5){
    icon = faBookmark
    featureName = "Save"
    featureDescription = "Save the document to the library"
  }
    if(currentIndex===6){
    icon = faFont
    featureName = "Text Settings"
    featureDescription =  "Adjust the settings of the text in the document"
    
  }
  if(currentIndex===7){
    icon = faVolumeHigh
    featureName = "Text-to-speech"
    featureDescription = "Turn text into natural speech"

  }
  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStyles}>
        <ContentCont>
            <FontAwesomeIcon icon={icon} className="fa-3x"></FontAwesomeIcon>
            <div>{featureName}</div>
            <div>{featureDescription}</div>
        </ContentCont>
      </div>
      
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;