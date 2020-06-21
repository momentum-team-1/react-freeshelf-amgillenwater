import React from 'react'
import './App.css'
import books from './books.json'

function App () {
  console.log(books)
  return (
    <div className='App'>
      {books.map((bookInfo, idx) => {
        return <div key={idx}>
          <ul>{bookInfo.title}
            <li>By: {bookInfo.author}</li>
            <li>{bookInfo.shortDescription}</li>
            <li>{bookInfo.publisher}</li>
            <li>{bookInfo.publicationDate}</li>
            <li>{bookInfo.detailedDescription}</li>
            {/* insert image here */}

          </ul>
        </div>
      })}
    </div>
  )
}

export default App
