/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import getConfigFor from './webpack.config.babel';

const config = getConfigFor('development');
const port = 3000;
const host = '0.0.0.0';

new WebpackDevServer(webpack(config), {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  // hot: true,
  stats: {colors: true}
}).listen(port, host, err => {
  if (err) console.error(err);                                                    // eslint-disable-line no-console

  console.info('webpack-dev-server listening at http://%s:%s', host, port);       // eslint-disable-line no-console
});
