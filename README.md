# singleton
> Es6 singleton class.

## installation
```shell
npm install -S @feizheng/singleton
```

## usage
```js
import Singleton from '@feizheng/singleton';

class A extends Singleton {
  get() {
    console.log('get a!');
  }
  set() {
    console.log('set a!');
  }
}
```
