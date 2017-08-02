import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import SavedArticles from './SavedArticles'

class App extends Component {
	constructor() {
		super()
		this.state = {
			searchResults: [],
			savedArticles: [
				{
					title: 'this is the title',
					url: 'google.com',
					_id: 'some random string'
				}
			]
		}
		this._getSavedArticles = this._getSavedArticles.bind(this)
	}

	_getSavedArticles() {
		// get all the saved articles
		// set it to the savedArciles
	}
	componentDidMount() {}
	render() {
		return (
			<div className="App">
				<h1>This is the APP component</h1>
				<SavedArticles savedArticles={this.state.savedArticles} />
			</div>
		)
	}
}

export default App
