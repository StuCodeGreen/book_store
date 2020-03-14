import React from 'react';
import './BookItem.css';


export default class BookItem extends React.Component {
	constructor(props){
		super(props)
		// var retrievedObject = localStorage.getItem('selectStatus');
		this.state = {
			id: '',
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
		const {id} = this.props;

		this.setState({
			title,
			subtitle,
			authors:authors.join(', '),
			description,
			pageCount,
			thumbnail:imageLinks.thumbnail,
			select: JSON.parse(localStorage.getItem(`saveSelected${id}`))
		});

		
		var retrievedObject = localStorage.getItem('saveSelected');
		console.log('retrievedObject: ',retrievedObject);
	}
	
	select(e){
		const currentSelect = this.state.select;
		this.setState({select: !currentSelect});
		localStorage.setItem(`saveSelected${this.props.id}`, !currentSelect);
	}

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