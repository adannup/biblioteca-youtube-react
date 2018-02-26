import React, { Component } from 'react';
import fetchYoutubeAPI from '../utils';
import DashboardVideos from '../components/DashboardVideos/DashboardVideos';
import DashboardPanel from '../components/DashboardPanel/DashboardPanel';
import DashboardVideoPlayer from '../components/DashboardVideoPlayer/DashboardVideoPlayer';
import AlertFavoriteExist from '../components/Alerts/AlertFavoriteExist';
import './App.css';

class Dashboard extends Component {
  state = {
    alert: {
      active: false,
      favoriteVideo: {},
    },
    videoPlayer: {
      isOpen: false,
      video: {},
    },
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
      this.handleAlertMessage(obj);
    } else {
      this.addFavoriteVideo(obj);
    }
  }

  onHandleVideoPlayer = video => {
    this.setState({
      videoPlayer: Object.assign({}, this.state.videoPlayer, {
        isOpen: true,
        video,
      }),
    });
  }

  onCloseVideoPlayer = () => {
    this.setState({
      videoPlayer: Object.assign({}, this.state.videoPlayer, {
        isOpen: false,
        video: {},
      }),
    });
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

  handleAlertMessage = video => {
    this.setState(prevState => ({
      alert: Object.assign({}, prevState.alert, {
        active: true,
        favoriteVideo: video,
      }),
    }));
    clearTimeout(this.alert);
    this.alert = setTimeout(() => {
      this.setState(prevState => ({
        alert: Object.assign({}, prevState.alert, {
          active: false,
          favoriteVideo: {},
        }),
      }));
    }, 3000);
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
        {this.state.alert.active &&
          <AlertFavoriteExist favoriteVideo={this.state.alert.favoriteVideo} />
        }
        <div className="dashboard-app">
          <DashboardPanel
            favorites={this.state.favorites}
            history={this.state.history}
            onHandleVideoPlayer={this.onHandleVideoPlayer}
          />
          {this.state.videoPlayer.isOpen ?
            <DashboardVideoPlayer
              video={this.state.videoPlayer.video}
              onClickReturnButton={this.onCloseVideoPlayer}
              onClickAddVideo={this.onClickAddVideo}
            /> :
            <DashboardVideos
              videos={this.state.videos}
              onChangeSearch={this.onHandleSearch}
              onClickAddVideo={this.onClickAddVideo}
              onHandleVideoPlayer={this.onHandleVideoPlayer}
              onCloseVideoPlayer={this.onCloseVideoPlayer}
              isFetched={this.state.isFetched}
            />
          }
        </div>
      </div>
    );
  }
}

export default Dashboard;
