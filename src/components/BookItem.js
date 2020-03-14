import React from 'react';


export default class BookItem extends React.Component {
	state = {
		title: '',
		subtitle: '',
		authors: '',
		description:'',
		pageCount:'',
		thumbnail:''
	}
	async componentDidMount() {
		const {title, subtitle, authors, description, pageCount,imageLinks} = this.props.volumeInfo; 
		console.log(imageLinks.thumbnail);
		
		this.setState({
			title,
			subtitle,
			authors:authors.join(', '),
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
	<p>{this.state.authors}</p>
	<p>{this.state.description}</p>
	<p>{this.state.pageCount}</p>
	<img src={this.state.thumbnail} alt=""/>

			</div>
	
    );
  }
}