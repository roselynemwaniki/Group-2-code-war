var React = require("react");

function createElement(content, tag = 'div', props = {}) {
  return React.createElement(tag, props, content);
}

function createUnorderedList(list) {
  return React.createElement('ul', {}, list.map((item,
 index) => (
    React.createElement('li', { key: index }, item)
  )));
}