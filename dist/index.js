/*!
 * name: @jswork/next-react-active-state
 * description: Active state special for react based on next-active-state.
 * homepage: https://github.com/afeiship/next-react-active-state
 * version: 1.0.13
 * date: 2021-08-30 23:13:19
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var NxActiveState = nx.ActiveState || require('@jswork/next-active-state');
  var nxEventValue = nx.eventValue || require('@jswork/next-event-value');
  var nxGet2get = nx.get2get || require('@jswork/next-get2get');
  var defaults = { callback: nx.noop, eventValue: nxEventValue };
  var NAME_PATHS = ['target.name', 'dataset.name'];
  var FUNC = 'function';
  var UNDEF = 'undefined';

  var NxReactActiveState = nx.declare('nx.ReactActiveState', {
    extends: NxActiveState,
    statics: nx.mix(NxActiveState.statics, {
      build: function (inData, inOptions) {
        var args = typeof inOptions === FUNC ? { callback: inOptions } : inOptions;
        var options = nx.mix(null, defaults, args);
        var instance = new this(inData);
        var cloned = instance.get();
        var state = instance.state;
        var FN_CACHE = {};
        instance.one('change', options.callback);

        return {
          $: instance,
          cloned: cloned,
          state: state,
          get: (inPath, inDefault) => {
            var target = instance.get();
            return nx.get(target, inPath, inDefault);
          },
          sync: function (inPath) {
            var hasPath = typeof inPath === UNDEF;
            var hasCache = hasPath && typeof FN_CACHE[inPath] === FUNC;
            var fn;
            if (hasCache) {
              fn = FN_CACHE[inPath];
            } else {
              fn = FN_CACHE[inPath] = function (inEvent) {
                var path = hasPath ? nxGet2get(inEvent, NAME_PATHS, 'value') : inPath;
                var value = options.eventValue(inEvent);
                nx.set(state, path, value);
              };
            }
            return fn;
          }
        };
      }
    })
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxReactActiveState;
  }
})();
