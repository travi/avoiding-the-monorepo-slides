import {JSDOM} from 'jsdom';
import quibble from 'quibble';
import emmitter from 'component-emitter';
import ease from 'ease-component';
import type from 'component-type';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const importAsString = module => {
  module.exports = '';    // eslint-disable-line no-param-reassign

  return module;
};

require.extensions['.css'] = () => undefined;
require.extensions['.example'] = () => undefined;
require.extensions['.jpg'] = importAsString;
require.extensions['.png'] = importAsString;
require.extensions['.svg'] = importAsString;

quibble('emitter', emmitter);
quibble('type', type);
quibble('ease', ease);

console.error = message => {   // eslint-disable-line no-console
  if (!message.includes('CodeSlide')) throw new Error(message);
};

const dom = new JSDOM('<!doctype html><html><body></body></html>', {url: 'http://localhost'});
global.document = dom.window.document;
global.window = dom.window;
Object.keys(document.defaultView).forEach(property => {
  if ('undefined' === typeof global[property]) {
    global[property] = document.defaultView[property];
  }
});
global.window.matchMedia = () => ({matches: false});
global.Image = dom.window.Image;

Object.defineProperties(window.HTMLElement.prototype, {
  offsetLeft: {
    get() {
      return parseFloat(window.getComputedStyle(this).marginLeft) || 0;
    }
  },
  offsetTop: {
    get() {
      return parseFloat(window.getComputedStyle(this).marginTop) || 0;
    }
  },
  offsetHeight: {
    get() {
      return parseFloat(window.getComputedStyle(this).height) || 0;
    }
  },
  offsetWidth: {
    get() {
      return 100;
    }
  }
});


global.navigator = {
  userAgent: 'node.js'
};
