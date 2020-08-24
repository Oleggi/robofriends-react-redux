import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoudry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../actions';

class App extends Component {
    componentDidMount() {
        this.props.requestRobots();
    }

    onsearchChange = (event) => {
        this.props.setSearchField(event.target.value);
    }


    render() {
        const filteredRobots = this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
        
        return this.props.isPending ?
            <h1 className="tc">Loading...</h1>:  
            (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onsearchChange}/>
                    <Scroll>
                        <ErrorBoudry>
                    <CardList robots={filteredRobots}/>
                        </ErrorBoudry>
                    </Scroll>  
                </div>
            )
        } 
    };

    const mapStateToProps = state => {
      return  {
      searchField: state.searchFieldArea.searchField,
      robots: state.robotsData.robots,
      isPending: state.robotsData.isPending
      }
    }

export default connect(mapStateToProps, { setSearchField, requestRobots })(App);