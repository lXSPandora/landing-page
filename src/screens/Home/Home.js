// @flow
import React, { Component } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaMedium } from 'react-icons/all';
import { withRouter } from 'react-router';
import moment from 'moment';
import '../../css/template.css';
import '../../css/main.css';
import { routeTo } from '../../utils/routeTo';

type Props = {};
type State = {};

class Home extends Component<Props, State> {
  render() {
    const age = moment().diff('1998-01-29', 'years');
    return (
      <div>
        <section className="banner style3 orient-left content-align-left image-position-right fullscreen">
          <div className="content">
            <h1>Luiz Fernando, {age}y</h1>
            <p className="major">
              <strong>
                FullStack Developer 🔥🚀 - <a href="https://horizonfour.com.br/">Horizon Four </a>
              </strong>
              <br />
              São Paulo, SP - Brazil <br />
            </p>
            <p>
              Hello, my name is Luiz Fernando, I code almost all the time, some times a lil bit of design (UI and UX), I
              speak at meetups and conferences!, and i game when im not hunting some demons.
              <br />
              <br />
              Today I work as Software Developer at Shawee and Horizon Four, <a href="https://shawee.io">Shawee</a> is a hackatons platform that is
              constant expansion, and Horizon Four is a consulting company for startups! We can transform everything
              that you want in code!!
              <br />
              <br />I Already Worked at: Entria, Penske Logistics S.A and Urbit City
            </p>
            <a href={routeTo('/articles')} className="fancy-button bg-gradient1">
              <span>Articles</span>
            </a>
          </div>
          <div className="image">
            <img className="profile-image-portifolio" src={require('../../png/profile.png')} alt="" />
          </div>
        </section>
        <div className="social-networks">
          <a className="icon style2" href="https://github.com/lXSPandora">
            <FaGithub color="grey" size="30px" />
          </a>
          <a className="icon style2" href="https://twitter.com/luiz_bones">
            <FaTwitter color="grey" size="30px" />
          </a>
          <a className="icon style2" href="https://www.linkedin.com/in/luizfernando-lxspandora/">
            <FaLinkedin color="grey" size="30px" />
          </a>
          <a className="icon style2" href="https://www.instagram.com/lxsluizinho/">
            <FaInstagram color="grey" size="30px" />
          </a>
          <a className="icon style2" href="https://medium.com/@lXSPandora/">
            <FaMedium color="grey" size="30px" />
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
