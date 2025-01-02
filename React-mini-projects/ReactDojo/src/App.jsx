import "./App.css";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view/index";
import menus from "./components/tree-view/data";

function App() {
  return (
    <>
      {/* Accordion */}
      <Accordion />
      {/*Random-Color */}
      <RandomColor />
      {/*Star-Rating*/}
      <StarRating noOfStars={5} starSize={60} />
      {/* Image-Slider */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
      <LoadMoreData />
      <TreeView menu={menus || []} />
    </>
  );
}

export default App;
