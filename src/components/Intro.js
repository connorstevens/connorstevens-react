import Link from "./Link";
import { Col } from "react-bootstrap";

import Me from "../img/me.jpg";
import Logo from "../img/logo.jpg";


const Intro = () => {
    return (
        <div id="intro" className="row clear">
            <Col md={6}>
                <div id="intro-about" className="intro">
                    <p id="hi">Hi, I'm</p>
                    <h1 className="mb-3">Connor Stevens</h1>
                    <p>I'm a second year Computing and Information Technologies student
                        at the <a href="https://rit.edu">Rochester Institute of Technology.</a>
                    </p>
                    <p>I'm a hardworking student with a passion for Information Technology and programming.
                        I am looking to apply my knowledge in the industry for Summer 2021 in a Co-Op. I'd
                        like to discuss my skills and any opportunities with you.
                    </p>
                    <p>In my free time, I run my software company, Sole Tech LLC. I currently serve 20+ clients with
                        SaaS solutions on Discord. I am also in the process of releasing my first cross-platform desktop
                        application, Equipt. More information can be found below.
                    </p>

                    <Col className="mx-auto links">
                        <Link name={"GitHub"} link={"https://github.com/connorstevens26"}/>
                        <Link name={"Sole Tech"} link={"https://github.com/connorstevens26"}/>
                        <Link name={"Equipt Tools"} link={"https://github.com/connorstevens26"}/>
                    </Col>

                </div>
            </Col>
            <Col md={6} id="intro-image" className="intro mx-auto text-center">
                <div>
                    <img src={Me} alt="" />
                </div>
                <div className="mt-5">
                    <img src={Logo} alt="" />
                </div>
            </Col>
        </div>
    )
}

export default Intro;