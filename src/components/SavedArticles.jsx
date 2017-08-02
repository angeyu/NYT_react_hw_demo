import React from 'react'

const SavedArticles = props => {
	const allArticles = props.savedArticles.map(item => {
		return (
			<li key={item._id}>
				<p>
					<a href={item.url}>
						{item.title}
					</a>
				</p>
				{/*  REMOVE HERE WITH THE ID*/}
				<button
					onClick={() => {
						props._removeArticle(item._id)
					}}
				>
					Remove
				</button>
			</li>
		)
	})
	return (
		<div className="SavedArticles">
			<h3>Displaying Saved Articles</h3>
			<ul>
				{allArticles}
			</ul>
		</div>
	)
}

export default SavedArticles
