import React, { Component } from 'react';
import DashboardApp from './components/DashboardApp';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <DashboardApp />
      </div>
    )
  }
}
