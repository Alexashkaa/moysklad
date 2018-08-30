moysklad
========

[![npm](https://img.shields.io/npm/v/moysklad.svg?maxAge=1800&style=flat-square)](https://www.npmjs.com/package/moysklad)
[![Travis](https://img.shields.io/travis/wmakeev/moysklad.svg?maxAge=1800&style=flat-square)](https://travis-ci.org/wmakeev/moysklad)
[![Coveralls](https://img.shields.io/coveralls/wmakeev/moysklad.svg?maxAge=1800&style=flat-square)](https://coveralls.io/github/wmakeev/moysklad)
[![Code Climate](https://img.shields.io/codeclimate/maintainability-percentage/wmakeev/moysklad.svg?style=flat-square)](https://codeclimate.com/github/wmakeev/moysklad/maintainability)
[![Code Climate](https://img.shields.io/codeclimate/tech-debt/wmakeev/moysklad.svg?style=flat-square)](https://codeclimate.com/github/wmakeev/moysklad/maintainability)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

> Библиотека для взаимодействия с JSON API сервиса МойСклад для node.js и браузера.

> **ВНИМАНИЕ!** Библиотека находится в стадии разработки. Не весь код протестирован. Документация неполная и будет дополняться. API к релизной версии будет немного изменен.

## Особенности

Библиотека представляет максимально простой и прозрачный интерфейс к существующим методам [API МойСклад](https://online.moysklad.ru/api/remap/1.1/doc) и не выполняет никаких внутренних преобразований отправляемых и получаемых данных.

При необходимости, можно расширить функционал библиотеки [внешними модулями](#Расширение).

## Установка

Поддерживаются версии node.js 4.x и выше

```
$ npm install moysklad
```

для работы библиотеки в node.js, дополнительно нужно установить полифил для
[Fetch API](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) или явно указать модуль с соответствующим интерфейсом при создании экземпляра библиотеки

**Полифил:**

```
$ npm install isomorphic-fetch
```

```js
require('isomorphic-fetch') // polyfill
const Moysklad = require('moysklad')

const moysklad = Moysklad()
```

**Модуль:**

```
$ npm install node-fetch
```

```js
const nodeFetch = require('node-fetch')
const Moysklad = require('moysklad')

const moysklad = Moysklad({ fetch: nodeFetch })
```

В примерах выше приведены две наиболее популярные библиотеки реализующие Fetch API в node.js

Для работы с библиотекой в браузере установка полифила или отдельного модуля не требуется.

## Использование

```js
const Moysklad = require('moysklad')

// Инициализировать экземпляр библиотеки можно без ключевого слова new
const ms = Moysklad({ login, password })

ms.GET('entity/customerorder', {
  filter: {
    applicable: true,
    sum: {
      $gt: 1000000,
      $lt: 2000000
    }
  },
  limit: 10,
  order: 'moment,desc',
  expand: 'agent'
}).then(({ meta, rows }) => {
  console.log(`Последние ${meta.limit} из ${meta.size} проведенных заказов ` +
    `на сумму от 10000 до 20000 руб`)
  rows.forEach(row => {
    console.log(`${row.name} ${row.agent.name} ${row.sum / 100}`)
  })
})
```

## Параметры инициализации экземпляра

Параметр | Значение по умолчанию | Описание
---------|--------------|----------
`endpoint` | `https://online.moysklad.ru/api` | Точка досупа к API
`api` | `remap` | Раздел API
`apiVersion` | `1.1` | Версия API

Пример использования:

```js
const Moysklad = require('moysklad')

// Явное указание используемой версии API
const moysklad = Moysklad({ apiVersion: '1.2' })
```

## Фильтрация

Для построения фильтра можно использовать селекторы в стиле Mongo

Селектор | Фильтр МойСклад | Описание
---------|-----------------|---------
`key: { $eq: value }` | `key=value` | равно
`key: { $ne: value }` | `key!=value` | не равно
`key: { $gt: value }` | `key>value` | больше
`key: { $gte: value }` | `key>=value` | больше или равно
`key: { $lt: value }` | `key<value` | меньше
`key: { $lte: value }` | `key<=value` | меньше или равно
`key: { $st: value }` | `key~=value` | начинается со строки
`key: { $et: value }` | `key=~value` | заканчивается строкой
`key: { $contains: value }` | `key~value` | содержит строку
`key: { $in: [..] }` или `key: [..]`| `key=value1;key=value2;...` | содержит
`key: { $nin: [..] }` | `key!=value1;key!=value2;...` | не содержит
`key: { $exists: true }` | `key!=` | наличие значения (не null)
`key: { $exists: false }` | `key=` | пустое значение (null)
`key: { $and: [{..}, ..] }` |  | объединение условий
`key: { $not: {..} }` |  | отрицание условия

На один ключ можно использовать несколько селекторов

```js
let filter = {
  key: {
    $eq: 'value',
    $exists: true
  }
}
```

## Подключение расширений

Библиотеку можно расширять дополнительными возможностями, подключая [внешние модули расширений](https://github.com/wmakeev/moysklad-tools).

Пример подключения [расширения для очереди запросов](https://github.com/wmakeev/moysklad-tools/tree/master/packages/moysklad-extension-queue):

```js
const MoyskladCore = require('moysklad')
const MoyskladQueueExtension = require('moysklad-extension-queue')

const Moysklad = MoyskladCore.compose(MoyskladQueue)

const moysklad = Moysklad({
  queue: true // включение очереди запросов
})
```

## API

### Moysklad.getTimeString

> Преобразует дату в строку в формате API МойСклад в часовом поясе Москвы (статический метод)

`Moysklad.getTimeString(date: Date, includeMs?: boolean) : String`

**Параметры:**

`date` - дата

`includeMs` - если `true`, то в результирующую дату будут включены миллисекунды

**Пример использования:**

```js
let date = new Date('2017-02-01T07:10:11.123Z')
let timeString = Moysklad.getTimeString(date, true)

assert.equal(timeString, '2017-02-01 10:10:11.123')
```

### Moysklad.parseTimeString

> Преобразует строку с датой в формате API МойСклад в объект даты (с учетом часового пояса исходной даты)

`Moysklad.parseTimeString(date: string) : Date`

**Параметры:**

`date` - дата в формате МойСклад (напр. '2017-04-08 13:33:00.123')

**Пример использования:**

```js
let parsedDate = Moysklad.parseTimeString('2017-04-08 13:33:00.123')

assert.equal(parsedDate.toISOString(), '2017-04-08T10:33:00.123Z')
```

### GET

> GET запрос

- `moysklad.GET(path: String|Array<String>, query?: Object, options?: Object) : Promise`

- `moysklad.GET(args: Object) : Promise`

**Параметры:**

`path` - url ресурс (относительно текущего api)

`query` - url параметры запроса

`options` - опции запроса

**Пример использования:**

```js
let productsCollection = await moysklad.GET('entity/product', { limit: 50 })

let order = await moysklad.GET(['entity', 'customerorder', orderId], { expand: 'positions' })
```

### POST

> POST запрос

- `moysklad.POST(path: String|Array<String>, payload?: Object|Array<Object>, query?: Object, options?: Object) : Promise`

- `moysklad.POST(args: Object) : Promise`

**Параметры:**

`path` - url ресурс (относительно текущего api)

`payload` - объект или коллекция объектов (будет преобразовано в строку методом `JSON.stringify`)

`query` - url параметры запроса

`options` - опции запроса

**Пример использования:**

```js
let newProduct = await moysklad.POST('entity/product', { name: 'Новый товар' })
```

### PUT

> PUT запрос

- `moysklad.PUT(path: String|Array<String>, payload?: Object, query?: Object, options?: Object) : Promise`

- `moysklad.PUT(args: Object) : Promise`

**Параметры:**

`path` - url ресурс (относительно текущего api)

`payload` - обнвляемый объект (будет преобразован в строку методом `JSON.stringify`)

`query` - url параметры запроса

`options` - опции запроса

**Пример использования:**

```js
let updatedProduct = await moysklad.PUT(['entity/product', id], product)
```

### DELETE

> DELETE запрос

- `moysklad.DELETE(path: String|Array<String>, options?: Object) : Promise<Response>`

- `moysklad.DELETE(args: Object) : Promise<Response>`

**Параметры:**

`path` - url ресурс (относительно текущего api)

`options` - опции запроса

Метод `DELETE` возвращает объект [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) текущего запроса.

**Пример использования:**

```js
await moysklad.DELETE(['entity/product', product.id])
```

### buildUrl

> Формирует url запроса

- `moysklad.buildUrl(url: String, query?: Object) : String`

- `moysklad.buildUrl(path: String|Array<String>, query?: Object) : String`

- `moysklad.buildUrl(args: Object) : String`

**Параметры:**

`url` - полный url (должен соответствовать настройкам)

`path` - путь относительно текущего api

`query` - url параметры запроса

**Пример использования:**

```js
let url = moysklad.buildUrl('https://online.moysklad.ru/api/remap/1.1/entity/customerorder?expand=positions', { limit: 100 })

assert.equal(url, 'https://online.moysklad.ru/api/remap/1.1/entity/customerorder?expand=positions&limit=100')
```

```js
let url = moysklad.buildUrl('entity/customerorder', { expand: 'positions' })

assert.equal(url, 'https://online.moysklad.ru/api/remap/1.1/entity/customerorder?expand=positions')
```

```js
let url = moysklad.buildUrl(['entity', 'customerorder'], { expand: 'positions' })

assert.equal(url, 'https://online.moysklad.ru/api/remap/1.1/entity/customerorder?expand=positions')
```

### parseUrl

> Разбор uri на составные компоненты

- `moysklad.parseUrl(uri: String) : Object`

**Параметры:**

`uri` - uri ресурс

**Пример использования:**

```js
let parsedUri = moysklad.parseUrl('https://online.moysklad.ru/api/remap/1.1/entity/customerorder?expand=positions')

assert.deepEqual(parsedUri, {
  endpoint: 'https://online.moysklad.ru/api',
  api: 'remap'
  apiVersion: '1.1',
  path: ['entity', 'customerorder'],
  query: {
    expand: 'positions'
  }
})
```

### fetchUrl

> Выполнить запрос по указанному uri

- `moysklad.fetchUrl(url: String, options?: Object) : Promise`

**Параметры:**

`url` - url ресурса

`options` - опции запроса

#### Свойства `options`

Все опции (за исключением описанных ниже) переданные в объекте `options` передаются напрямую в опции метода `fetch` ([Fetch API](http://github.github.io/fetch/)) при осуществлении запроса.

Свойства специфичные для библиотеки (не передаются в `fetch`):

Свойство | Тип | Описание
---------|-----|---------
`rawResponse` | `boolean` | Если `true`, то метод вернет результат в виде объекта [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
`muteErrors` | `boolean` | Если `true`, то все ошибки будут проигнорированы (метод не будет генерировать ошибку если код ответа сервера не в диапазоне 200-299 и/или тело ответа содержит описание ошибки МойСклад).
`millisecond` | `boolean` | Если `true`, то включает в запрос заголовок `X-Lognex-Format-Millisecond` со значением `true` (все даты объекта будут возвращены с учетом миллисекунд).

Пример формирования заполненного шаблона печатной формы и получение ссылки для загрузки:

```js
const ms = Moysklad({ fetch: require('node-fetch') })

let body = {
  template: {
    meta: {
      href: 'https://online.moysklad.ru/api/remap/1.1/entity/demand/metadata/customtemplate/' +
        '8a686b8a-9e4a-11e5-7a69-97110004af3e',
      type: 'customtemplate',
      mediaType: 'application/json'
    }
  },
  extension: 'pdf'
}

let { headers, status } = await ms
  .POST('entity/demand/773e16c5-ef53-11e6-7a69-9711001669c5/export/', body, null, {
    rawResponse: true, // вернуть результат запроса без предварительного разбора
    muteErrors: true   // не обрабатывать ошибки, если код ответа сервера не в диапазоне 200-299
  })

assert.equal(status, 307)

let location = headers.get('location')
assert.true(/https:\/\/120708.selcdn.ru\/prod-files/.test(location))
```

**Пример использования:**

```js
let order = await moysklad.fetchUrl('https://online.moysklad.ru/api/remap/1.1/entity/customerorder/eb7bcc22-ae8d-11e3-9e32-002590a28eca')
```

### События

> Описание

#### `request`

``` { uri, options } ```

#### `response`

``` { uri, options, response } ```

#### `response:body`

``` { uri, options, response, body } ```

#### `error`

## Планируемые изменения в API к версии 1.0

- Метод `fetchUrl` и все остальные завязанные на него методы (`GET`, `POST`), будут возвращать специальный объект с набором методов для более тонкого управления запросом. При этом запрос к сервису будет выполнен только после вызова одного из определенных методов.

  ```js
  // получение объекта запроса (запрос к сервису еще не выполнен)
  let requestObj = moysklad.GET(['entity/customerorder', someId])

  // установка заголовка (возвращается новый объекта запроса)
  requestObj = requestObj.setHeader('X-Lognex-Format-Millisecond', true)

  // получение данных по текущему запросу (метод может быть вызван повторно с тем же результатом)
  let order = await requestObj.data()
  ```

- Часть функционала библиотеки будет выненеса в отдельные модули-плагины и дальнейшее добавление новых фич будет происходить преимущественно путем написания соответствующих плагинов.

## История изменений

### 0.4.0

- ⚠️ Исправлена важная ошибка - селектор `$lte` работал не верно (обрабатывался как `$gte`)
- 🔧 Исправления в работе селектора `$not`
- ➕ Добавлены селекторы `$st`, `$et`, `$contains`
- 🔄 Обновлены зависимости и убран файл package-lock.json
- ✏️ Дополнена документация
