import React from 'react';

export default class BookItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      subtitle: '',
      authors: '',
      description: 'loading',
      pageCount: null,
      thumbnail: '',
      select: false
    };

    this.select = this.select.bind(this);
    this.stringLimit = this.stringLimit.bind(this);
  }

  async componentDidMount() {
    const {
      title,
      subtitle,
      authors,
      description,
      pageCount,
      imageLinks
		} = this.props.volumeInfo;
		
    const { id } = this.props;

    this.setState({
      title,
      subtitle,
      authors: authors.join(', '),
      description:description,
      pageCount,
      thumbnail: imageLinks.thumbnail,
      select: JSON.parse(localStorage.getItem(`saveSelected-${id}`))
    });
  }

  select() {
    const currentSelect = this.state.select;
    this.setState({ select: !currentSelect });
    localStorage.setItem(`saveSelected-${this.props.id}`, !currentSelect);
	}
	
	stringLimit(str=" ", limit=null) {
    if (limit == null) {
      limit = 100;
    }
  
    if (str.length > limit) {
      return str.substring(0, limit);
    } else {
      return str;
    }
  }

  render() {
    return (
      <div
        onClick={this.select}
        id={this.state.select ? 'selected' : null}
      >
        <p className="title">{this.state.title} {this.state.subtitle}</p>
        <p className="authors">{this.state.authors}</p>
        <p className="description">{this.stringLimit(this.state.description,140)}</p>
        <p className="pages">Pages: {this.state.pageCount}</p>
        <img className="thumbnail" src={this.state.thumbnail} alt="" />
      </div>
    );
  }
}
