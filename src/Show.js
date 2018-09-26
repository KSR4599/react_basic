var React = require('react');


class Title extends React.Component {
  render() {
    return (
      <h3>Title: {this.props.showTitle}</h3>
    );
  }
}

class Poster extends React.Component {
  render() {
    return (
      <img src={this.props.showPoster} alt="Show Poster" style={{height: 400, width: 400}} />
    );
  }
}

class ShowInfo extends React.Component {
  render() {
    return (
      <div>
        <p>Plot: {this.props.showPlot}</p>
        <h5>IMDB Rating: {this.props.showRating}</h5>
      </div>
    );
  }
}

class Show extends React.Component {
  static defaultProps = {
    showIndex: 0
  };
  constructor(props) {
    super(props);
    this.state = {
      showIndex: this.props.showIndex
    };
  }
  handleBtnClick() {
    var totalShows = this.props.shows.length;

    this.setState(function(prevState) {
      return {
        showIndex: (prevState.showIndex + 1) % totalShows
      };
    });
  }
  render() {
    var show = this.props.shows[this.state.showIndex];
    return (
      <div className="text-center">
        <Title showTitle={show.title} />
        <Poster showPoster={show.poster} />
        <ShowInfo showPlot={show.plot} showRating={show.imdbRating} />
        <button onClick={this.handleBtnClick.bind(this)}>Next Show</button>
      </div>
    );
  }
}

// Show.defaultProps = {
//   showIndex: 0
// };

module.exports = Show;
