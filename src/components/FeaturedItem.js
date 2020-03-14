import React from 'react';
import BookItem from './BookItem';

export default class FeaturedItem extends React.Component {

	async componentDidMount() {
		const {volumeInfo} = this.props; 
		
		this.setState({
			
		});
  }

  render() {
    return (
			<div>
						<BookItem volumeInfo={this.props.volumeInfo}/>
			</div>

	
    );
  }
}