import React, { Component } from 'react';
import fetchYoutubeAPI from '../utils';
import DashboardVideos from '../components/DashboardVideos/DashboardVideos';
import DashboardPanel from '../components/DashboardPanel/DashboardPanel';
import './App.css';

class Dashboard extends Component {
  state = {
    videos: [],
    favorites: [],
    history: [],
    isFetched: false,
  }

  componentWillMount = () => {
    this.onFetchSearch('');
  }

  // Handle events
  onHandleSearch = e => this.onFetchSearch(e.target.value)
  onClickAddVideo = obj => {
    if (this.favoriteVideoExist(obj)) {
      console.log('El video ya existe');
    } else {
      this.addFavoriteVideo(obj);
    }
  }

  onFetchSearch = query => {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      if (query !== '') {
        this.addHistorySearch(query);
      }

      this.handleFetchData(false);
      fetchYoutubeAPI(query)
        .then(data => {
          this.addVideos(data.items);
          this.handleFetchData(true);
        });
    }, 750);
  }

  // Validate functions
  favoriteVideoExist = video => {
    const filteredVideoExist = this.state.favorites.filter(v => v.videoId === video.videoId);
    return filteredVideoExist.length > 0;
  }

  // Manipulate state
  addHistorySearch = query => {
    this.setState({
      history: [...this.state.history, query],
    });
  }

  addFavoriteVideo = video => {
    this.setState(prevState => ({
      favorites: [...prevState.favorites, video],
    }));
  }

  addVideos = videos => {
    this.setState({
      videos,
    });
  }

  handleFetchData = bool => {
    this.setState({ isFetched: bool });
  }

  render() {
    return (
      <div className="container">
        <div className="dashboard-app">
          <DashboardPanel
            favorites={this.state.favorites}
            history={this.state.history}
          />
          <DashboardVideos
            videos={this.state.videos}
            onChangeSearch={this.onHandleSearch}
            onClickAddVideo={this.onClickAddVideo}
            isFetched={this.state.isFetched}
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
