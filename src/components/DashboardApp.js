import React, { Component } from 'react';
import DashboardVideos from './DashboardVideos/DashboardVideos';
import FavoritePanel from './FavoritePanel/FavoritePanel';

const API_KEY = 'AIzaSyBagwAp435rZuumVznbnkrW9S2n3COayQU';
let timeout;

class Dashboard extends Component {
  state = {
    data: [],
    favorites: [],
    history: [],
    isFetched: false,
  }

  componentWillMount = () => {
    this.fetchSearch('');
  }

  onHandleSearch = e => this.fetchSearch(e.target.value)

  onClickAddVideo = obj => {
    this.setState({
      favorites: this.state.favorites.concat(obj),
    });
  }

  fetchSearch = query => {
    const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&type=video&q=${query}&key=${API_KEY}`;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      this.setState({
        isFetched: false,
        history: this.state.history.concat(query),
      });

      fetch(URL)
        .then(response => response.json())
        .then(data => {
          this.setState({
            isFetched: true,
            data,
          });
        });
    }, 650);
  }

  render() {
    return (
      <div className="dashboard-app">
        <FavoritePanel
          favorites={this.state.favorites}
          history={this.state.history}
        />
        <DashboardVideos
          data={this.state.data}
          onChangeSearch={this.onHandleSearch}
          onClickAddVideo={this.onClickAddVideo}
          isFetched={this.state.isFetched}
        />
      </div>
    );
  }
}

export default Dashboard;
