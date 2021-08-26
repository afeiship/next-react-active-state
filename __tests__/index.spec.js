(function() {
  const NxReactActiveState = require('../src');

  describe('NxReactActiveState.methods', function() {
    test('init', function() {
      const data = { key: 1, value: 2 };
      expect(!!data).toBe(true);
    });
  });
})();
