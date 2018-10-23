module.exports = {
  '/hello, /hello/:name': {
    handle(data, ctx) {
      return {
        'type': 'world'
      };
    },
    view: 'hello'
  }
};
