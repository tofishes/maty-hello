module.exports = {
  '/maty/serve/:name?': {
    handle(data, ctx) {
      return {
        'serveName': ctx.param.name || 'maty serve'
      };
    },
    view: 'maty'
  }
};
