import React from 'react';
import axios from 'axios';
import BookItem from './BookItem';

class BookList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			url: 'https://www.googleapis.com/books/v1/volumes?q=HTML5',
			books: [],
			featured:null
		};
	}

	async componentDidMount() {
    const res = await axios.get(this.state.url);
		this.setState({ 
			books: res.data.items.slice(0,res.data.items.length-2),
		 	featured:res.data.items.slice(res.data.items.length -2)
		});

		

	}

	render(){
		return(
			<React.Fragment>
				<div>

				{this.state.books.map(book => 
					<BookItem
					key={book.id}
					volumeInfo = {book.volumeInfo}
					id={book.id}
					
					/>
					
					)}

				</div>
		</React.Fragment>
		);
	
	}


}


export default BookList;