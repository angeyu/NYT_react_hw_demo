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
