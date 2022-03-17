const assert = require('assert');
const request = require('supertest');

const app = require('./app');

describe('API Functionality', () => {
  const getThisAsJson = async url => request(app).get(url).set('Accept', 'application/json');

  test('should get home route', async () => {
    const response = await getThisAsJson('/api/news');
    assert.strictEqual(response.body[0].status, 'ok');
    assert.strictEqual(response.status, 200);

    expect(response.body[0]).toHaveProperty('articles');
  });
});
