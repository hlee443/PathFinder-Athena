import ImageSlider from "../components/Slider/Slider";

const App = () => {
  const slides = [
    { title: "1" },
    { title: "2" },
    { title: "3" },
    { title: "4" },
    { title: "5" },
    { title: "6" },
    { title: "7" },
    { title: "8" },
  ];
  const containerStyles = {
    width: "30rem",
    height: "17rem",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;