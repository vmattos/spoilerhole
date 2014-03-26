var medias = {}

module.exports = exports = medias;

medias.index = function(req, res) {
	res.render('index', {
		title: 'Spoilerhole'
	});
};