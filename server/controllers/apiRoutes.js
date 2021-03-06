const express = require('express')
const router = express.Router()
// const LostItem = require('../models/LostItem')
const Article = require('../models/Article')

router.get('/api/article', (req, res) => {
	Article.find({}, (err, allArticles) => {
		res.json(allArticles)
	})

	// res.json({ data: 'here is some data' })
})

router.post('/api/article/new', (req, res) => {
	const { title, url } = req.body
	console.log(title)
	console.log(url)
	const newArticle = new Article({ title, url })
	newArticle.save((err, savedArticle) => {
		if (err) return res.json(err)
		return res.json(savedArticle)
	})
})

router.post('/api/article/remove', (req, res) => {
	const { id } = req.body
	Article.remove({ _id: id }, (err, msg) => {
		res.json({ err, msg })
	})
})
// router.get('/api/lostitem', (req, res) => {
// 	LostItem.find({}).exec((err, allItems) => {
// 		console.log(allItems)
// 		res.json(allItems)
// 	})
// })

// router.post('/api/new/lostitem', (req, res) => {
// 	// get the post item
// 	const { name, found } = req.body
// 	// console.log(name)
// 	// console.log(found)
//
// 	const newItem = new LostItem({ name: name, found: found })
//
// 	newItem.save((err, savedItem) => {
// 		if (err) {
// 			return res.json({ error: 'there was an error saving the item' })
// 		} else {
// 			// console.log(savedItem)
// 			return res.json(savedItem)
// 		}
// 	})
// })

router.put('/api/lostitem/:id', (req, res) => {
	res.json({
		msg: `your trying to UPDATE a lost item of id of: ${req.params.id}`
	})
})

// router.delete('/api/lostitem/:id', (req, res) => {
// 	// res.json({
// 	// 	msg: `your trying to DELETE a lost item of id of: ${req.params.id}`
// 	// })
// 	LostItem.findByIdAndRemove(req.params.id).exec((err, message) => {
// 		if (err) {
// 			console.log(err)
// 			return res.json(err)
// 		}
// 		console.log(message)
// 		return res.json(message)
// 	})
// })

module.exports = router
