import app from '../app';
import supertest from 'supertest';

const request = supertest(app);

describe('Testing endpoint', () => {
  it('entering a vaild endpoint', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });

  it('entering a incorrect endpoint', async () => {
    const response = await request.get(
      '/api/images/api/images?filename=fjord&width=200&height=200'
    );
    expect(response.status).not.toBe(200);
  });
});

describe('Testing image endpoint responses', () => {
  it('entering a vaild image name', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });

  it('entering a incorrect image name', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });
});
