import React from 'react';


export default class BookItem extends React.Component {
	state = {
		title: '',
		subtitle: '',
		author: '',
		description:'',
		pageCount:'',
		thumbnail:''
	}
	async componentDidMount() {
		const { volumeInfo } = this.props;
		const {title, subtitle, author, description, pageCount,imageLinks} = volumeInfo; 
		console.log(imageLinks.thumbnail);

		this.setState({
			title,
			subtitle,
			author,
			description,
			pageCount,
			thumbnail:imageLinks.thumbnail	
		});
  }

  render() {
    return (
			<div>
	<h6>{this.state.title}</h6>

			</div>
	
    );
  }
}