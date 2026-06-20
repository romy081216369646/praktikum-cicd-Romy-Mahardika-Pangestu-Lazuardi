const sayHello = require('./index');

test('returns correct greeting', () => {
    expect(sayHello()).toBe('Hello CI/CD!');
});