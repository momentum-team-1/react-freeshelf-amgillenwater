import React from 'react'
import './App.css'
import books from './books.json'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isToggleOn: false
    }
  }

  // console.log(books)
  render () {
    return (
      <div className='App'>
        {books.map((bookInfo, idx) => {
          return <div key={idx}>
            <ul>{bookInfo.title}
              <li>By: {bookInfo.author}</li>
              <li>{bookInfo.shortDescription}</li>
              <li><img src={bookInfo.coverImageURL} /></li>
              {/* insert image here */}
              {/* expanded view */}
              <li>{bookInfo.publisher}</li>
              <li>{bookInfo.publicationDate}</li>
              <li>{bookInfo.detailedDescription}</li>

            </ul>
          </div>
        })}
      </div>
    )
  }
}

export default App
