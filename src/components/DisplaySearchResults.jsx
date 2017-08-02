import React from 'react'

// class DisplaySearchResults extends

const DisplaySearchResults = props => {
	const articles = props.searchResults.map(article =>
		<li key={article.title}>
			<a href={article.url}>
				{' '}<p>{article.title}</p>
			</a>
			<button
				onClick={() => {
					props._saveArticle(article.title, article.url)
				}}
			>
				Save
			</button>
		</li>
	)
	return (
		<div>
			<h2>Search Results</h2>
			<ul>
				{articles}
			</ul>
		</div>
	)
}

export default DisplaySearchResults
