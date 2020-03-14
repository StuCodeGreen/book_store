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
	<p>{this.state.title}</p>
	<p>{this.state.subtitle}</p>
	<p>{this.state.author}</p>
	<p>{this.state.description}</p>
	<p>{this.state.pageCount}</p>
	<img src={this.state.thumbnail} alt=""/>

			</div>
	
    );
  }
}