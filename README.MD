# `BottomNavigation` `barStyle.backgroundColor` bug reproduction

## 3.0.0-alpha.5

```js
const barStyle = {
  backgroundColor: 'red'
}
```
The `barStyle.backgroundColor` is successfully applied.

![](images/3.0.0-alpha.5.png)

## 3.0.0-alpha.7

```js
const barStyle = {
  backgroundColor: 'red'
}
```
The `barStyle.backgroundColor` fails to apply.

![](images/3.0.0-alpha.7.png)

## Reproduction steps

``` bash
npm i
npm start &
npm run android
```

And to switch to version:

``` bash
npm i --save-exact react-native-paper@3.0.0-alpha.5
npm i --save-exact react-native-paper@3.0.0-alpha.7
```