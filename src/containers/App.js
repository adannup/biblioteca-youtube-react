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
    favorites: [],
    history: [],
    videosAPI: {
      videos: [],
      isFetched: false,
    },
  }

  componentWillMount = () => {
    this.onFetchSearch('');
  }

  // Handle events
  onHandleSearch = e => this.onFetchSearch(e.target.value)
  onClickAddVideo = obj => {
    if (this.favoriteVideoExist(obj)) {
      this.onAlertMessage(obj);
    } else {
      this.addFavoriteVideo(obj);
    }
  }

  onOpenVideoPlayer = video => {
    this.handleVideoPlayer(true, video);
  }

  onCloseVideoPlayer = () => {
    this.handleVideoPlayer(false, {});
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

  onAlertMessage = video => {
    // Open alert message
    this.handleAlertMessage(true, video);

    clearTimeout(this.alert);
    this.alert = setTimeout(() => {
      // Close alert message
      this.handleAlertMessage(false, {});
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
      videosAPI: Object.assign({}, this.state.videosAPI, {
        videos,
      }),
    });
  }

  handleFetchData = bool => {
    this.setState({
      videosAPI: Object.assign({}, this.state.videosAPI, {
        isFetched: bool,
      }),
    });
  }

  handleVideoPlayer = (bool, video) => {
    this.setState({
      videoPlayer: Object.assign({}, this.state.videoPlayer, {
        isOpen: bool,
        video,
      }),
    });
  };

  handleAlertMessage = (bool, video) => {
    this.setState(prevState => ({
      alert: Object.assign({}, prevState.alert, {
        active: bool,
        favoriteVideo: video,
      }),
    }));
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
            onHandleVideoPlayer={this.onOpenVideoPlayer}
          />
          {this.state.videoPlayer.isOpen ?
            <DashboardVideoPlayer
              video={this.state.videoPlayer.video}
              onClickReturnButton={this.onCloseVideoPlayer}
              onClickAddVideo={this.onClickAddVideo}
            /> :
            <DashboardVideos
              videos={this.state.videosAPI.videos}
              onChangeSearch={this.onHandleSearch}
              onClickAddVideo={this.onClickAddVideo}
              onHandleVideoPlayer={this.onHandleVideoPlayer}
              onCloseVideoPlayer={this.onCloseVideoPlayer}
              isFetched={this.state.videosAPI.isFetched}
            />
          }
        </div>
      </div>
    );
  }
}

export default Dashboard;
