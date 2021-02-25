import React from 'react';

export default class Library extends React.Component {
  state = {
    books: [
      {
        id: 101,
        title: 'Dune',
        author: 'Frank Herbert',
        genre: 'science-fiction',
        tags: ['futuristic', 'classics'],
      },
      {
        id: 102,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        author: 'J.R.R Tolkien',
        genre: 'fantasy',
        tags: ['door-stopper', 'trilogy'],
      },
    ],
    id: '',
    title: '',
    author: '',
    genre: '',
    tags: [],
  };

  addBook = () => {
    let payLoad = {
      id: Math.floor(Math.random() * 90 + 10),
      title: this.state.title,
      author: this.state.author,
      genre: this.state.genre,
      tags: this.state.tags,
    };

    let clone = [...this.state.books];
    clone.push(payLoad);
    this.setState({
      books: clone,
    });
  };

  updateBook = () => {
    let payLoad = {
      id: this.state.id,
      title: this.state.title,
      author: this.state.author,
      genre: this.state.genre,
      tags: this.state.tags,
    };
    let clone = [...this.state.books];
    clone.splice(
      clone.findIndex((b) => b.id === this.state.id),
      1,
      payLoad
    );
    this.setState({
      books: clone,
    });
  };

  displayEditBook = (e) => {
    let arr = this.state.books.filter((g) => g.id === parseInt(e.target.name));

    this.setState({
      id: arr[0].id,
      title: arr[0].title,
      author: arr[0].author,
      genre: arr[0].genre,
      tags: arr[0].tags,
    });
  };

  cancelEditBook = () => {
    this.setState({
      id: '',
      title: '',
      author: '',
      genre: '',
      tags: '',
    });
  };

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  getTags = (e) => {
    let arr = this.state.tags;
    if (!arr.includes(e.target.value)) {
      let clone = [...arr];
      clone.push(e.target.value);
      this.setState({
        tags: clone,
      });
    } else {
      let clone = [...arr];
      clone.splice(
        clone.findIndex((t) => t === e.target.value),
        1
      );
      this.setState({
        tags: clone,
      });
    }
  };

  displayBooks = () => {
    return this.state.books.map((b) => (
      <p key={b.id}>
        <li>Title: {b.title}</li>
        <li>Author: {b.author}</li>
        <li>Genre: {b.genre}</li>
        <li>ISBN: {b.id}</li>
        <li>Tags: {b.tags.join(', ')}</li>
        <li>
          <button name={b.id} onClick={this.displayEditBook}>
            Edit
          </button>
        </li>
      </p>
    ));
  };

  render() {
    return (
      <React.Fragment>
        <div class="container">
          <div class="col">{this.displayBooks()}</div>

          <div class="col">
            <h3 style={{ display: !this.state.id ? 'block' : 'none' }}>
              Add Book
            </h3>
            <h3 style={{ display: this.state.id ? 'block' : 'none' }}>
              Edit Book
            </h3>
            <div>
              <label>Title:</label>
              <input
                type="text"
                name="title"
                onChange={this.updateFormField}
                value={this.state.title}
              />
            </div>
            <div>
              <label>Author</label>
              <input
                type="text"
                name="author"
                onChange={this.updateFormField}
                value={this.state.author}
              />
            </div>
            <div>
              <label>Genre</label>
              <input
                type="radio"
                name="genre"
                value="fantasy"
                checked={this.state.genre === 'fantasy'}
                onChange={this.updateFormField}
              />
              <label>Fantasy</label>
              <input
                type="radio"
                name="genre"
                value="science-fiction"
                checked={this.state.genre === 'science-fiction'}
                onChange={this.updateFormField}
              />
              <label>Science Fiction</label>
              <input
                type="radio"
                name="genre"
                value="romance"
                checked={this.state.genre === 'romance'}
                onChange={this.updateFormField}
              />
              <label>Romance</label>
            </div>
            <div>
              <label>Tags</label>
              <input
                type="checkbox"
                name="tags"
                value="classic"
                onChange={this.getTags}
                checked={this.state.tags.includes('classic')}
              />
              <label>Classic</label>
              <input
                type="checkbox"
                name="tags"
                value="doorstopper"
                onChange={this.getTags}
                checked={this.state.tags.includes('doorstopper')}
              />
              <label>Doorstopper</label>
              <input
                type="checkbox"
                name="tags"
                value="futuristic"
                onChange={this.getTags}
                checked={this.state.tags.includes('futuristic')}
              />
              <label>Futuristic</label>
              <input
                type="checkbox"
                name="tags"
                value="trilogy"
                onChange={this.getTags}
                checked={this.state.tags.includes('trilogy')}
              />
              <label>Trilogy</label>
            </div>
            <button
              style={{ display: !this.state.id ? 'block' : 'none' }}
              onClick={this.addBook}
            >
              Add Book
            </button>
            <button
              style={{ display: this.state.id ? 'block' : 'none' }}
              onClick={this.updateBook}
            >
              Edit Book
            </button>
            <button
              style={{ display: this.state.id ? 'block' : 'none' }}
              onClick={this.cancelEditBook}
            >
              Cancel Edit Book
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
