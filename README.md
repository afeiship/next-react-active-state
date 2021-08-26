# next-react-active-state
> Active state special for react based on next-active-state.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-react-active-state
```

## apis
| api   | params | description                       |
| ----- | ------ | --------------------------------- |
| build | -      | Get state and sync event handler. |

## usage
```js
import NxReactActiveState from '@jswork/next-react-active-state';
import useForceUpdate from '@jswork/use-force-update';

const forceUpdate = useForceUpdate();
const { state, sync, cloned } = NxReactActiveState.build({}, ()=>{
  forceUpdate();
});

<form>
  <div className="row">
    <label htmlFor="username"> username: </label>
    <input type="text" name="username" onChange={sync('username')} />
  </div>
  <div className="row">
    <label htmlFor="email"> email: </label>
    <input type="text" name="email" onChange={sync('email')}/>
  </div>
</form>
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-react-active-state/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-react-active-state
[version-url]: https://npmjs.org/package/@jswork/next-react-active-state

[license-image]: https://img.shields.io/npm/l/@jswork/next-react-active-state
[license-url]: https://github.com/afeiship/next-react-active-state/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-react-active-state
[size-url]: https://github.com/afeiship/next-react-active-state/blob/master/dist/next-react-active-state.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-react-active-state
[download-url]: https://www.npmjs.com/package/@jswork/next-react-active-state
