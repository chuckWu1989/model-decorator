// Component
import React, { Component } from 'react';
import AlbumModel from './AlbumModel';
import './style.less';

class ReactExample extends Component {
  constructor(props) {
    super(props);
    this.changeGenre = this.changeGenre.bind(this);
    this.changeArtist = this.changeArtist.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changePrice = this.changePrice.bind(this);
    this.changeURL = this.changeURL.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = { model: new AlbumModel(), submitErr: undefined };
  }
  onSubmit() {
    const { model } = this.state;
    const result = model.checkErrors();
    const submitErr = result.length > 0 ? 'There are some errors in list.' : undefined;
    this.setState({ submitErr });
  }
  changeGenre(e) {
    const { model } = this.state;
    model.genre.val = Number(e.target.value);
    this.setState({ model });
  }
  changeArtist(e) {
    const { model } = this.state;
    model.artist.val = Number(e.target.value);
    this.setState({ model });
  }
  changeTitle(e) {
    const { model } = this.state;
    model.title.val = e.target.value;
    this.setState({ model });
  }
  changePrice(e) {
    const { model } = this.state;
    model.price.val = Number(e.target.value);
    this.setState({ model });
  }
  changeURL(e) {
    const { model } = this.state;
    model.url.val = e.target.value;
    this.setState({ model });
  }
  render() {
    const {
      model: {
        genre,
        artist,
        title,
        price,
        url,
      },
      submitErr,
    } = this.state;
    return (
      <div className="album-style">
        <form>
          <div className="title">{genre.title}</div>
          <div>
            <select name="genre" onChange={this.changeGenre} value={genre.val}>
              <option value={-1}>Unselected</option>
              <option value={0}>Jazz</option>
              <option value={1}>Punk</option>
              <option value={2}>Ballad</option>
            </select>
          </div>
          <div className="error"><span>{genre.err}</span></div>
          <div className="title">{artist.title}</div>
          <div>
            <select name="artist" onChange={this.changeArtist} value={artist.val}>
              <option value={-1}>Unselected</option>
              <option value={0}>Bon Jovi</option>
              <option value={1}>Ed Sheeran</option>
              <option value={2}>Post Malone</option>
            </select>
          </div>
          <div className="error"><span>{artist.err}</span></div>
          <div className="title">{title.title}</div>
          <div>
            <input name="title" onChange={this.changeTitle} value={title.val} />
          </div>
          <div className="error"><span>{title.err}</span></div>
          <div className="title">{price.title}</div>
          <div>
            <input name="price" type="number" onChange={this.changePrice} value={price.val} />
          </div>
          <div className="error"><span>{price.err}</span></div>
          <div className="title">{url.title}</div>
          <div>
            <input name="url" onChange={this.changeURL} value={url.val} />
          </div>
          <div className="error"><span>{url.err}</span></div>
          <div>
            <input type="button" onClick={this.onSubmit} value="Create" />
          </div>
          <div className="error submit"><span>{submitErr}</span></div>
        </form>
      </div>
    );
  }
}

export default ReactExample;
