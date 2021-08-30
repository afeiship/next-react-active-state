(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var NxActiveState = nx.ActiveState || require('@jswork/next-active-state');
  var nxEventValue = nx.eventValue || require('@jswork/next-event-value');
  var nxGet2get = nx.get2get || require('@jswork/next-get2get');
  var defualts = { callback: nx.noop, eventValue: nxEventValue };
  var NAME_PATHS = ['target.name', 'dataset.name'];
  var FUNC = 'function';
  var UNDEF = 'undefined';

  var NxReactActiveState = nx.declare('nx.ReactActiveState', {
    extends: NxActiveState,
    statics: nx.mix(NxActiveState.statics, {
      build: function (inData, inOptions) {
        var args = typeof inOptions === FUNC ? { callback: inOptions } : inOptions;
        var options = nx.mix(null, defualts, args);
        var instance = new this(inData);
        var cloned = instance.get();
        var state = instance.state;
        instance.one('change', options.callback);

        return {
          cloned: cloned,
          state: state,
          get: () => instance.get(),
          sync: function (inPath) {
            return function (inEvent) {
              var path = typeof inPath === UNDEF ? nxGet2get(inEvent, NAME_PATHS, 'value') : inPath;
              var value = options.eventValue(inEvent);
              nx.set(state, path, value);
            };
          }
        };
      }
    })
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxReactActiveState;
  }
})();
