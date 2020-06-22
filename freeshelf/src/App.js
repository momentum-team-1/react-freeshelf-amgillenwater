import React from 'react'
import './App.css'
import books from './books.json'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isToggled: false
    }
  }

  // console.log(books)
  render () {
    return (
      <div className='App'>
        <Jumbotron fluid>
          <h1>Freeshelf</h1>
        </Jumbotron>
        {books.map((bookInfo, idx) =>
          <div key={idx} p={5}>
            <Container>
              <Row>
                <Col xs={12} md={8}><a href={bookInfo.url}><h1>{bookInfo.title}</h1></a>
                  <p>{bookInfo.author}</p>
                  <p>{bookInfo.shortDescription}</p>
                  <Accordion defaultActiveKey='1'>
                    <Card>
                      <Accordion.Toggle as={Card.Header} eventKey='0'>
                  Click for More Information
                      </Accordion.Toggle>
                      <Accordion.Collapse eventKey='0'>
                        <Card.Body>
                          <p>Publisher: {bookInfo.publisher}</p>
                          <p>Publication Date: {bookInfo.publicationDate}</p>
                          <p>Full Description: {bookInfo.detailedDescription}</p>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </Col>
                <Col xs={6} md={4}>
                  <Image src={bookInfo.coverImageUrl} alt={bookInfo.title} thumbnail />
                </Col>
              </Row>
            </Container>
          </div>
        )}
      </div>
    )
  }
}

export default App
