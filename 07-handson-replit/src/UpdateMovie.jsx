import React from 'react';

export default class UpdateMovie extends React.Component {
  state = {
    movies: [
      {
        id: 101,
        title: 'Star Wars IV: A New Hope',
        director: 'George Lucas',
      },
      {
        id: 102,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        director: 'Peter Jackson',
      },
    ],
    title: '',
    director: '',
  };

  beginEditMovie = (e) => {
    this.setState({
      title: e.target.title,
      director: e.target.id,
    });
  };

  updateMovie = () => {
    // 1. create the updated movie object.
    // hint: replace the null below with the correct code
    // hint 2: where is the data for the new movie currently stored?
    let updatedMovie = {
      title: this.state.title,
      director: this.state.director,
    };

    // 2. find the original index of the updated movie
    let indexOf = this.state.movies.findIndex(
      (i) => i.title === this.state.title
    );

    // 3. clone the array
    let clone = [...this.state.movies];

    // 4. add the updated movie object back to its original index in
    // the array
    clone.splice(indexOf, 0, updatedMovie);

    // 5. set the cloned array back into the state
    this.setState({
      movies: clone,
    });
  };

  updateFormField = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="col">
            {this.state.movies.map((m) => (
              <React.Fragment key={m.id}>
                <div className="movie">
                  <h1>
                    {m.title}{' '}
                    <button
                      title={m.title}
                      id={[m.director]}
                      onClick={this.beginEditMovie}
                    >
                      Edit
                    </button>
                  </h1>
                  <h2>Directed by {m.director}</h2>
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="col">
            <h3>Edit Movie</h3>
            <div>
              <label>Movie Title:</label>
              <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.updateFormField}
              />
            </div>
            <div>
              <label>Director</label>
              <input
                type="text"
                name="director"
                value={this.state.director}
                onChange={this.updateFormField}
              />
            </div>
            <button onClick={this.updateMovie}>Update Movie</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
