import React, { Component } from 'react';
import DashboardVideos from './DashboardVideos/DashboardVideos';
import FavoritePanel from './FavoritePanel/FavoritePanel';

const API_KEY = 'AIzaSyBagwAp435rZuumVznbnkrW9S2n3COayQU';
let timeout;

class Dashboard extends Component {
  state = {
    data: [],
    isFetched: false,
  }

  onHandleSearch = e => {
    this.fetchSearch(e.target.value);
  }

  componentWillMount = () => {
    this.fetchSearch('');
  }

  fetchSearch = query => {
    const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&type=video&q=${query}&key=${API_KEY}`;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      this.setState({
        isFetched: false,
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
        <FavoritePanel />
        <DashboardVideos
          data={this.state.data}
          onChangeSearch={this.onHandleSearch}
          isFetched={this.state.isFetched}
        />
      </div>
    );
  }
}

export default Dashboard;
