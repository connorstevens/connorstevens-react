import NavBar from "./components/Navbar";
import Intro from "./components/Intro";
import Work from "./components/Work";
import Footer from "./components/Footer";
import WorkArrow from "./components/WorkArrow";

import Container from "../node_modules/react-bootstrap/Container";
import Row from "../node_modules/react-bootstrap/Row";

import eqpt from "./img/eqpt.png";

const works = [
  {
    title: "Equipt Tools",
    stack: ["Node.JS", "Electron", "Bootstrap", "JQuery", "ZMQ"],
    time: "2020-2021",
    images: [eqpt, eqpt]
  },
];

function App() {
  return (
    <div className="App">
      <div id="main">
        <Container className="page" fluid>
          <NavBar />
          <Intro />
          <WorkArrow />
        </Container>
        <Container>
          {
            works.map((work, index) => <Work {...work} key={index}></Work>)
          }
        </Container>
      </div>
      <Footer/>
    </div>
  );
}

export default App;