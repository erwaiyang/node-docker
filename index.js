const koa = require('koa');

const app = module.exports = koa();

// some data
var user = {
  name: {
    first: 'Jean',
    last: 'Yang'
  },
  job: 'programmer',
};

app.use(function* (next) {
  var start = new Date;
  yield next;
  const ms = new Date - start;
  if (process.env.NODE_ENV !== 'production') {
    console.log('%s %s - %s ms', this.method, this.url, ms);
  }
});

app.use(function* () {
  this.body = { user };
});

const PORT = process.env.PORT || 4000;

if (!module.parent) app.listen(PORT);
