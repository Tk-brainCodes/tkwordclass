import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import tinder from './tinder-logo.png';
import whatsapp from './whatsapp.png';
import todolist from './todolist.png';
import dadsjoke from './dads-joke.png';
import dog from './dog.png';
import './Project.css';
import Project1 from './Projetc1';

const Project = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="Project__">
            <Carousel indicators={false} activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <Project1 />
                    <Carousel.Caption>
                        <h3><img className="tinder-logo" src={tinder} alt="tinder-logo" /></h3>
                        <p className="bold">Tinder clone with <text class="em__">React</text></p>
                        <a href="https://github.com/Tk-brainCodes/Tinder-app-Clone" className="code">CODE</a>
                        <a href="https://tinder-clone-67749.web.app/" className="demo">DEMO</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Project1 />
                    <Carousel.Caption>
                        <h3><img className="tinder-logo" src={whatsapp} alt="tinder-logo" /></h3>
                        <p className="bold">Whatsapp clone with <text class="em__">React</text></p>
                        <a href="https://github.com/Tk-brainCodes/Tinder-app-Clone" className="code">CODE</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Project1 />
                    <Carousel.Caption>
                        <h3><img className="tinder-logo" src={dog} alt="tinder-logo" /></h3>
                        <p className="bold">The Dog application with <text class="em__">React</text></p>
                        <a href="https://github.com/Tk-brainCodes/Tinder-app-Clone" className="code">CODE</a>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Project1 />
                    <Carousel.Caption>
                        <h3><img className="tinder-logo" src={todolist} alt="tinder-logo" /></h3>
                        <p className="bold">Todo List appllication with <text class="em__">React</text></p>
                        <a href="https://github.com/Tk-brainCodes/Tinder-app-Clone" className="code">CODE</a>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <Project1 />
                    <Carousel.Caption>
                        <h3><img className="tinder-logo" src={dadsjoke} alt="tinder-logo" /></h3>
                        <p className="bold">Dads Joke appllication with <text class="em__">React</text></p>
                        <a href="https://github.com/Tk-brainCodes/Tinder-app-Clone" className="code">CODE</a>
                        <a href="https://tinder-clone-67749.web.app/" className="demo">DEMO</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Project;
