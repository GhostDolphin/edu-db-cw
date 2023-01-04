const mydb = require('./connect');

const allSemantic = (req, res) => {
	const cmd = `SELECT * FROM markdown_SEMANTIC`;

	mydb.query(cmd, (error, result) => {
		if (error) return res.status(500).json(error);
		res.status(200).json(result);
	});
};

const oneSemantic = (req, res) => {
	const cmd = `SELECT * FROM markdown_SEMANTIC`
	+ ` WHERE markdown_id = ${req.query.id}`;

	mydb.query(cmd, (error, result) => {
		if (error) return res.status(500).json(error);
		res.status(200).json(result);
	});
};

const newSemantic = (req, res) => {
	const q = req.query;
	if (!q.id || !q.ready || !q.unready || !q.status) {
		return res.status(400).json({'error': 'Stick to the structure of table!'});
	}

	const cmd = `INSERT INTO markdown_SEMANTIC`
	+ ` VALUES (${q.id}, ${q.ready},`
	+ ` ${q.unready}, ${q.status})`;

	mydb.query(cmd, (error, result) => {
		if (error) return res.status(500).json(error);
		res.status(200).json({'show': 'Successfully added new row'});
	});
};

const updSemantic = (req, res) => {
	const values = {
		ready: 'partials_ready',
		unready: 'partials_not_ready',
		status: 'markdown_status'
	};

	for (const arg in values) {
		if (req.query[arg]) {
			const cmd = `UPDATE markdown_SEMANTIC`
			+ ` SET ${values[arg]} = ${req.query[arg]}`
			+ ` WHERE markdown_id = ${req.query.id}`;

			mydb.query(cmd, (error, result) => {
				if (error) return res.status(500).json(error);
				res.status(200).json({'show': 'Successfully updated row'});
			});
		}
	}
};

const delSemantic = (req, res) => {
	const cmd = `DELETE FROM markdown_SEMANTIC`
	+ ` WHERE markdown_id = ${req.query.id}`;

	mydb.query(cmd, (error, result) => {
		if (error) return res.status(500).json(error);
		res.status(200).json({'show': 'Successfully deleted row'});
	});
};

module.exports = {
	allSemantic,
	oneSemantic,
	newSemantic,
	updSemantic,
	delSemantic
};