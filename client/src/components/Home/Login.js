import React, { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { Container, Row, Col } from '../Grid';
import axios from 'axios';

class Search extends Component {
  state = {
    email: [],
    password: [],
    user_id: '',
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    axios
      .getArticles(
        this.state.articleSearch,
        this.state.startDate,
        this.state.endDate,
      )
      .then(res => this.setState({ articles: res.data.response.docs }))
      .catch(err => console.log(err));
  };

  saveArticle = event => {
    event.preventDefault();
    axios
      .saveArticle({
        title: event.target.title,
        datePublished: event.target.getAttribute('date'),
        url: event.target.getAttribute('href'),
        snippet: event.target.getAttribute('snippet'),
      })
      .then(this.displaySaved)
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        placeholder="Enter Email"
                      />
                      <br />
                      <Input
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        placeholder="Password"
                      />
                      <br />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Login
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Search;
