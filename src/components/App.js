import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import SearchForm from './SearchForm'
import DisplaySearchResults from './DisplaySearchResults'
import SavedArticles from './SavedArticles'

class App extends Component {
	constructor() {
		super()
		this.state = {
			searchResults: [],
			savedArticles: []
		}
		this._getSavedArticles = this._getSavedArticles.bind(this)
		this._searchNYT = this._searchNYT.bind(this)
		this._saveArticle = this._saveArticle.bind(this)
		this._removeArticle = this._removeArticle.bind(this)
	}

	_getSavedArticles() {
		axios.get('/api/article').then(response => {
			console.log('Got all the articles saved ..')
			console.log(response.data)
			this.setState({
				savedArticles: response.data
			})
		})
	}

	_searchNYT(title, startYR, endYR) {
		const authKey = 'ae5d8eebadae4ccd996c3845a2402a6e'
		const requestURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${authKey}&q=${title}&begin_date=${startYR}0101&end_date=${endYR}1231&page=5`
		axios.get(requestURL).then(response => {
			// debugger
			// console.log(response.data.response.docs)
			let articlesArray = response.data.response.docs.map(article => {
				return { title: article.snippet, url: article.web_url }
			})
			this.setState({
				searchResults: articlesArray
			})
			// console.log(articlesArray)
		})
	}
	_saveArticle(title, url) {
		console.log('saving article ...')
		axios.post('/api/article/new', { title, url }).then(response => {
			console.log(response)
			this._getSavedArticles() // to force state to rerender
			// let searchResults = this.state.searchResults
			// searchResults.push(response.data)
			// // set the state
		})
	}

	_removeArticle(id) {
		console.log(`removing id of ${id}`)
		axios.post('/api/article/remove', { id }).then(response => {
			console.log(response)
			this._getSavedArticles()
		})
	}

	componentDidMount() {
		this._getSavedArticles()
		// axios.get('/api/article').then(response => {
		// 	console.log('Got all the articles saved ..')
		// 	console.log(response.data)
		// 	this.setState({
		// 		savedArticles: response.data
		// 	})
		// })
	}
	render() {
		return (
			<div className="App">
				<h1>This is the main App component</h1>
				<SearchForm _searchNYT={this._searchNYT} />
				<DisplaySearchResults
					searchResults={this.state.searchResults}
					_saveArticle={this._saveArticle}
				/>
				<SavedArticles
					savedArticles={this.state.savedArticles}
					_removeArticle={this._removeArticle}
				/>
			</div>
		)
	}
}

export default App
