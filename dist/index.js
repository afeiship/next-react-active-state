/*!
 * name: @jswork/next-react-active-state
 * description: Active state special for react based on next-active-state.
 * homepage: https://github.com/afeiship/next-react-active-state
 * version: 1.0.2
 * date: 2021-08-26 13:02:59
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var NxActiveState = nx.ActiveState || require('@jswork/next-active-state');
  var nxEventValue = nx.eventValue || require('@jswork/next-event-value');
  var defualts = { callback: nx.noop, eventValue: nxEventValue };
  var FUNC = 'function';
  var UNDEF = 'undefind';

  var NxReactActiveState = nx.declare('nx.ReactActiveState', {
    extends: NxActiveState,
    statics: nx.mix(NxActiveState.statics, {
      build: function (inData, inOptions) {
        var args = typeof inOptions === FUNC ? { callback: inOptions } : inOptions;
        var options = nx.mix(null, defualts, args);
        var instance = new this(inData);
        var cloned = instance.to();
        var state = instance.state;
        instance.one('change', options.callback);

        return {
          cloned: cloned,
          state: state,
          sync: function (inPath) {
            return function (inEvent) {
              var path = typeof inPath === UNDEF ? inEvent.target.name : inPath;
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
