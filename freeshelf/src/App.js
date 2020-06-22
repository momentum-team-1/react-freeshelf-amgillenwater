import React from 'react'
import './App.css'
import books from './books.json'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
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
        {books.map((bookInfo, idx) =>
          <div key={idx} id='card'>
            <ul>{bookInfo.title}</ul>
            <li>By: {bookInfo.author}</li>
            <li>{bookInfo.shortDescription}</li>
            <img src={bookInfo.coverImageURL} alt={bookInfo.title} />
            <Accordion defaultActiveKey='0'>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey='0'>
                  Click for More Information
                </Accordion.Toggle>
                <Accordion.Collapse eventKey='0'>
                  <Card.Body>
                    <li>Publisher: {bookInfo.publisher}</li>
                    <li>Publication Date: {bookInfo.publicationDate}</li>
                    <li>Full Description: {bookInfo.detailedDescription}</li>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        )}
      </div>
    )
  }
}

export default App
