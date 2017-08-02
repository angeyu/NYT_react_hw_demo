import React, { Component } from 'react'
// import axios from 'axios'

class SearchForm extends Component {
	constructor() {
		super()
		this.state = {
			title: '',
			yearStart: '',
			yearEnd: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(event) {
		event.preventDefault()
		this.setState({
			[event.target.id]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		console.log('handlesubmit called')
		this.props._searchNYT(
			this.state.title,
			this.state.yearStart,
			this.state.yearEnd
		)
	}
	render() {
		return (
			<form>
				<label htmlFor="title">title:</label>
				<input
					type="text"
					id="title"
					value={this.state.title}
					onChange={this.handleChange}
				/>
				<label htmlFor="yearStart">Year Start</label>
				<input
					type="number"
					id="yearStart"
					value={this.state.yearStart}
					onChange={this.handleChange}
				/>
				<label htmlFor="yearEnd">Year End</label>
				<input
					type="number"
					id="yearEnd"
					value={this.state.yearEnd}
					onChange={this.handleChange}
				/>
				<button type="submit" onClick={this.handleSubmit}>
					Submit
				</button>
			</form>
		)
	}
}

export default SearchForm
