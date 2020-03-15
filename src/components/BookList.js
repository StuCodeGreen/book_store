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
        <h1 className="header"><img src="./book.png" alt="Book logo" width="50"/> The Book Store</h1>
			
				<nav className="navigation">
				<input className="menu-btn" type="checkbox" id="menu-btn" />
				<label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
				<ul className="menu">
					<li><a href="#home">Home</a></li>
					<li><a href="#books">Books</a></li>
					<li><a href="#magazines">Magazines</a></li>
					<li><a href="#ebooks">E-Books</a></li>
					<li><a href="#accounts">Accounts</a></li>
				</ul>
			</nav>
				<section className="info">
					<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur perferendis quibusdam optio fugit doloribus sapiente saepe commodi laborum praesentium odit assumenda autem earum, veniam eius nihil ullam nesciunt debitis placeat quia, id minima cupiditate veritatis? Consequuntur et nisi perferendis laudantium voluptas sapiente.
					</p>
				</section>
        <div className="books-container">
          <div className="book-cards">
            {books.map(book => (
              <BookItem
                key={book.id}
                volumeInfo={book.volumeInfo}
                id={book.id}
              />
            ))}
          </div>
        </div>
        <div className="featured-container">
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
