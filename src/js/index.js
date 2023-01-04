const express = require('express');
const app = express();
const router = express.Router();

const PORT = 3500;

const mydb = require('./connect');

const {
	allSemantic,
	oneSemantic,
	newSemantic,
	updSemantic,
	delSemantic
} = require('./usage');

app.use(express.json());

router.get('/all', allSemantic)
			.get('/get', oneSemantic)
			.post('/new', newSemantic)
			.put('/upd', updSemantic)
			.delete('/del', delSemantic);

app.use('/', router);

mydb.connect(() => app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
}));
