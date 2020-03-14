import React from 'react';
import './BookItem.css';


export default class BookItem extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			title: '',
			subtitle: '',
			authors: '',
			description:'',
			pageCount:null,
			thumbnail:'',
			select: false
		}

		this.select = this.select.bind(this);
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
	
	select(e){
		const currentSelect = this.state.select;
		this.setState({select: !currentSelect});
	};

  render() {
    return (
	<div onClick={this.select} className={this.state.select ? 'selected' : null}>
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