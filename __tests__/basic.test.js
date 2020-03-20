const Singleton = require('../src').default;

describe('Basic test', () => {
  test('test getIntance()', () => {

    class A extends Singleton {
      get() {
        console.log('get a!');
      }
      set() {
        console.log('set a!');
      }
    }

    class B extends Singleton {
      get() {
        console.log('get b!');
      }
      set() {
        console.log('set b!');
      }
    }

    const a = A.getInstance();
    const b = A.getInstance();
    expect(a === b).toBe(true);
  });
});
