"use strict";

require('ignore-styles');
require('babel-polyfill');

var jsdom       = require('jsdom').jsdom,
    expect      = require('expect'),
    expectJSX   = require('expect-jsx').default,
    nock        = require('nock'),
    React       = require('react'),
    {mount, render, shallow} = require('enzyme'),
    deepFreeze  = require('deep-freeze-node');

var jsdomString = '';

global.document = jsdom(jsdomString);
global.navigator = {
    userAgent: 'node.js'
};
global.window = document.defaultView;
// TODO: setup global document for jsdom.
expect.extend(expectJSX);
global.expect = expect;
global.nock = nock;
global.React = React;
global.mount = mount;
global.render = render;
global.shallow = shallow;
global.deepFreeze = deepFreeze;

var exposedProperties = ['window', 'navigator', 'document'];

Object.keys(document.defaultView).forEach(function(property){
    if(typeof global[property] === 'undefined'){
        exposedProperties.push(property);
        global[property] = document.defaultView;
    }
});

// Mock XMLHttpRequest
XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

var documentRef = document;