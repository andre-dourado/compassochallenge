var request = require('request');

const githubUser = 'andrewdourado';

const optionsToRequest = {
  url: 'https://api.github.com',
  headers: {
    'User-Agent': 'request',
  },
};

describe('Github api', function () {
  it('should be able to return username', function (done) {
    const clonedOptions = { ...optionsToRequest };

    clonedOptions.url = `${optionsToRequest.url}/users/${githubUser}`;

    request.get(clonedOptions, function (error, response) {
      const data = JSON.parse(response.body);
      expect(data.login).toBe(githubUser);
      done();
    });
  });

  it('should be able to return repositories from user', function (done) {
    const clonedOptions = { ...optionsToRequest };

    clonedOptions.url = `${optionsToRequest.url}/users/${githubUser}/repos`;

    request.get(clonedOptions, function (error, response) {
      const data = JSON.parse(response.body);

      expect(data.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should be able to return starred repositories from user', function (done) {
    const clonedOptions = { ...optionsToRequest };

    clonedOptions.url = `${optionsToRequest.url}/users/${githubUser}/repos`;

    request.get(clonedOptions, function (error, response) {
      const data = JSON.parse(response.body);

      expect(data.length).toBeGreaterThan(0);
      done();
    });
  });
});
