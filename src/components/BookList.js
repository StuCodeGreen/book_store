import React from 'react';
import axios from 'axios';
import BookItem from './BookItem';
import FeaturedItem from './FeaturedItem';
import './BookList.css';

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://www.googleapis.com/books/v1/volumes?q=HTML5',
      books: [],
      featured: []
    };
  }

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({
      books: res.data.items.slice(0, res.data.items.length - 2),
      featured: res.data.items.slice(res.data.items.length - 2)
    });
  }

  render() {
    const books = this.state.books;
    const featuredBooks = this.state.featured;

    return (
      <div className="container">
				<h1 className="header">The Book Store</h1>
				<div className="main">
        {books.map(book => (
				
 						<BookItem key={book.id} volumeInfo={book.volumeInfo} id={book.id} />
				
         
        ))}
					</div>
					<div  className="featured-container">
						<h2>Featured</h2>
        {featuredBooks.map(featuredBook => (
          <FeaturedItem
            key={featuredBook.id}
            volumeInfo={featuredBook.volumeInfo}
            id={featuredBook.id}
          />
        ))}
				</div>
      </div>
    );
  }
}

export default BookList;
