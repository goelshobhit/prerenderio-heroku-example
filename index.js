const express = require('express');
const secure = require('express-force-https');
const prerender = require('prerender-node');

// Load from env vars
const port = '3454';
const indexHtml = process.env.INDEX_HTML;
const prerenderToken = 'bJBYM6Cx9JXzR7bnfre9';

const app = express();

// Use secure middleware to redurect to https
app.use(secure);

// Use prerender io middleware
app.use(prerender.set('prerenderToken', prerenderToken));

// Serve index.html on every url.
app.get('*', (req, res) => {
  res.send(indexHtml);
});

app.listen(port);
