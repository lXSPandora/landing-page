// @flow
import React from 'react';
import { withRouter } from 'react-router';
import gql from 'graphql-tag';
import type { ContextRouter } from 'react-router-dom';
import { FaAngleLeft } from 'react-icons/all';
import { Query } from 'react-apollo';
import '../../css/main.css';
import '../../css/template.css';

const ArticlesQuery = gql`
  query ArticlesQuery($username: String!, $limit: Int) {
    posts(username: $username, limit: $limit) {
      title
      url
      subtitle
      id
    }
  }
`;

type Props = ContextRouter;
type State = {
  limit: 10,
};

class Articles extends React.Component<Props, State> {
  state = {
    limit: 10,
  };
  render() {
    return (
      <section className="wrapper style1 align-center">
        <div className="inner">
          <h1>Articles</h1>
          <p className="major">Here are some of my articles</p>
          <div className="index align-left">
            <section>
              <header>
                <div onClick={() => this.props.history.push('/')}>
                  <h3>
                    <FaAngleLeft size="20" />
                    Home
                  </h3>
                </div>
              </header>
              <div className="content">
                <Query
                  query={ArticlesQuery}
                  variables={{
                    username: 'lXSPandora',
                    limit: this.state.limit,
                  }}
                >
                  {({ loading, error, data }) => {
                    if (loading) {
                      return <div className="loading-spinner" />;
                    }

                    if (error) {
                      return (
                        <div className="error-view">
                          Oops there was an error while we comunicate to the medium servers
                        </div>
                      );
                    }

                    return (
                      <div>
                        {data.posts.map(item => (
                          <div key={item.id}>
                            <header>
                              <h2>{item.title}</h2>
                              <p>{item.subtitle}</p>
                            </header>
                            <a href={item.url} className="fancy-button bg-gradient1">
                              <span>Read It</span>
                            </a>
                            <hr />
                          </div>
                        ))}
                      </div>
                    );
                  }}
                </Query>
              </div>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Articles);
