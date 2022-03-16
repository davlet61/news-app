const assert = require('assert');
const request = require('supertest');

const app = require('./app');

describe('API Functionality', () => {
  test('should get home route', done => {
    request(app)
      .get('/api/news')
      .expect(response => {
        assert.strictEqual(response.body, 'Hi Mom!');
      })
      .expect(200, done);
  });
});
