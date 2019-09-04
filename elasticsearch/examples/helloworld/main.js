const { Client } = require('@elastic/elasticsearch');

const client = new Client({ node: 'http://localhost:9200' });

const main = async () => {
	console.log('Run get data...');
	let res = await client.search({
		index: 'bank',
		body: {
			query: {
				match_all: {},
			},
		},
	});
	console.log('res: ', res.body.hits.hits);
};

main();
