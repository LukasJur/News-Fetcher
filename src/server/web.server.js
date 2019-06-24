const express = require('express');
const webpack = require('webpack');
//const wpDevMw = require('webpack-dev-middleware');
//const wpHotMw = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack.config');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(require('./config')['API_Key']);
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
    this.app.get('/top-headlines', (req, res) => {
      const searchQuery = {
          country: req.query.country,
          category: req.query.category,
          q: req.params.q,
      };
      /* Remove empty, null or undefined field */
      Object.keys(searchQuery).forEach(key => !searchQuery[key] && delete searchQuery[key]);
      /* If searchQuery is empty or country is invalid, send 404 response */
      if(Object.keys(searchQuery).length === 0){
        res.status(404).send("No params")
      }
     console.log("search query: ", searchQuery);
      /* Send request to newsapi */
      newsapi.v2.topHeadlines(searchQuery)
        .then(response => {
          //console.log(response);
          res.send(response)
      })
        .catch(error => {
          console.log(error);
          res.send(error);
        });
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
