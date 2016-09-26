const nightmare = require('nightmare');

const sizeup = (goto = 'http://google.com') => new Promise((resolve) => {
  const array = [];
  nightmare({
    show: false,
    webPreferences: {
      partition: 'nopersist',
    },
  })
    .on('did-get-response-details',
      (event, socketStatus, url, originalUrl, code, method, referrer, headers) => {
        array.push({
          url,
          originalUrl,
          size: +headers['content-length'] || 0,
        });
      })
    .goto(goto)
    .end()
    .then(() => resolve(array));
});

export default sizeup;
