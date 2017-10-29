import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        id: '123',
        name: 'foo'
      },
      {
        id: '456',
        name: 'bar'
      }
    ];
  }
});
