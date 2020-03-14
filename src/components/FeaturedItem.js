import React from 'react';
import BookItem from './BookItem';

export default class FeaturedItem extends React.Component {

  render() {
    return (
			<div>
					<BookItem volumeInfo={this.props.volumeInfo} id={this.props.id}/>
			</div>

	
    );
  }
}