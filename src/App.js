import React, { Component } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/all';
import moment from 'moment';
import './css/template.css';
import './css/main.css';

class App extends Component<T, T> {
  render() {
    const age = moment().diff('1998-01-29', 'years');
    return (
      <div>
        <section className="banner style3 orient-left content-align-left image-position-right fullscreen">
          <div className="content">
            <h1>Luiz Fernando, {age}y</h1>
            <p className="major">
              <strong>FullStack Developer 🔥🚀 - <a href="https://horizonfour.com.br/">Horizon Four </a></strong><br />
              São Paulo, SP - Brazil <br />
            </p>
            <p>
              Hello, my name's Luiz Fernando, I code almost all the time, some times a lil bit of design (UI and UX), I speak at meetups and conferences!, and i game when i'm not hunting some demons.
              <br /><br />
              Today I work as Software Developer at Shawee and Horizon Four, Shawee is a hackatons platform that is constant expansion, and Horizon Four is a consulting company for startups! We can transform everything that you want in code!!
              <br /><br />
              I Already Worked at: Entria, Penske Logistics S.A and Urbit City
            </p>
            <a href="#" className="fancy-button bg-gradient1">
              <span>
               Articles
              </span>
            </a>
            <div className="social-networks">
              <div className="network-icon">
                <a href="https://github.com/lXSPandora">
                  <FaGithub color="grey" size="30px" />
                </a>
              </div>
              <div className="network-icon">
                <a href="https://twitter.com/luiz_bones">
                  <FaTwitter color="grey" size="30px" />
                </a>
              </div>
              <div className="network-icon">
                <a href="https://www.linkedin.com/in/luizfernando-lxspandora/">
                  <FaLinkedin color="grey" size="30px" />
                </a>
              </div>
            </div>
          </div>
          <div className="image">
            <img className="profile-image-portifolio" src={require('./png/profile.png')} alt="" />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
