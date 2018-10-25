import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import styled from 'styled-components';
import Header from '../../components/Header';

const ProfileConatiner = styled.div`
  display: grid;
  grid-template-columns: 55% 45%;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const ProfileImageContainer = styled.div`
  justify-content: flex-start;
  div {
    width: 500px;
    height: 500px;
    border-radius: 250px;
    background-image: url('https://avatars2.githubusercontent.com/u/18129416?s=460&v=4');
    background-size: cover;
    margin: 120px 0px;
    box-shadow: 0px 0px 20px 0px grey;
    margin-left: 30px;
  }
`;

const ProfileImageDescription = styled.div`
  justify-content: flex-end;
  div {
    flex-direction: column;
    margin-right: 20px;
    width: 700px;
    h1 {
      color: black;
      text-align: left;
      font-size: 3.5em;
      font-weight: 600;
    };
    p {
      color: black;
      text-align: left;
      font-size: 1.5em;
      font-weight: 100;
    }
  }
`

class Landing extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div>
        <Header history={this.props.history} profileImage="https://avatars2.githubusercontent.com/u/18129416?s=460&v=4" />
        <ProfileConatiner>
          <ProfileImageDescription>
            <div>
              <h1>Luiz Fernando Sousa Camargo</h1>
              <p>Hello, my name is Luiz Fernando, I live in São Paulo - SP,  I code almost all the time, some times a lil bit of design (UI and UX), I speak at meetups and conferences!, and i game when im not hunting some demons.</p>
              <p>Today I work as Software Engineer at Popstand, Popstand is a consulting company for startups and big tech companies! We can transform everything that you want in code!!</p>
            </div>
          </ProfileImageDescription>
          <ProfileImageContainer>
            <div />
          </ProfileImageContainer>
        </ProfileConatiner>
      </div>
    )
  }
};

export default Landing;
