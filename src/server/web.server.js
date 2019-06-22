const express = require('express');
const webpack = require('webpack');
//const wpDevMw = require('webpack-dev-middleware');
//const wpHotMw = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config');
const countries = require('./countries');

//const compiler = webpack(webpackConfig);

export default class WebServer {
  constructor() {
    this.app = express();
    /*this.app.use(
      wpDevMw(compiler, {
        noInfo: true,
        publicPath: '/',
      })
    );*/
    //this.app.use(wpHotMw(compiler));
    //this.app.use(express.static('dist/public'));
    this.app.get('/top-headlines/country=:country', (req, res) => {
      const country = req.params.country;
      console.log(country)
      res.send(country);
    });

  }

  start() {
    return new Promise((resolve, reject) => {
      try {
        const port = process.env.PORT || 3000;
        this.server = this.app.listen(port, () => {
          resolve();
        });
      } catch (e) {
        console.error(e);
        reject(e);
      }
    });
  }

  stop() {
    return new Promise((resolve, reject) => {
      try {
        this.server.close(() => {
          resolve();
        });
      } catch (e) {
        console.error(e.message);
        reject(e);
      }
    });
  }
}
