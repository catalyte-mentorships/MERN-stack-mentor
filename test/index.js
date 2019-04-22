const chai = require('chai');
const chaiHttp = require('chai-http');

// My modules
const server = require('../app');

// middleware
chai.use(chaiHttp);
const expect = chai.expect;

describe('App', () =>  {
	describe('server root route', () =>  {
		it('should return 200', () =>  {
			chai.request(server)
				.get('/')
				.end((err, res) => {
					expect(err).to.be.null;
					expect(res).to.have.status(200);
				});
		});
	});

	describe('random route', () => {
		it('should return json object', (done) => {
			chai.request(server)
				.get('/api/routes/get-card/random')
				.end((err, res) =>  {
					expect(err).to.be.null;
					expect(res).to.have.status(200);
					done();
				});
		});
	});
});
