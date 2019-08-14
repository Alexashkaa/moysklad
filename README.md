moysklad
========

[![npm](https://img.shields.io/npm/v/moysklad.svg?maxAge=1800&style=flat-square)](https://www.npmjs.com/package/moysklad)
[![Travis](https://img.shields.io/travis/wmakeev/moysklad.svg?maxAge=1800&style=flat-square)](https://travis-ci.org/wmakeev/moysklad)
[![Coveralls](https://img.shields.io/coveralls/wmakeev/moysklad.svg?maxAge=1800&style=flat-square)](https://coveralls.io/github/wmakeev/moysklad)
[![Code Climate](https://img.shields.io/codeclimate/maintainability-percentage/wmakeev/moysklad.svg?style=flat-square)](https://codeclimate.com/github/wmakeev/moysklad/maintainability)
[![Code Climate](https://img.shields.io/codeclimate/tech-debt/wmakeev/moysklad.svg?style=flat-square)](https://codeclimate.com/github/wmakeev/moysklad/maintainability)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

> Библиотека для взаимодействия с JSON API сервиса МойСклад для node.js и браузера.

> **ВНИМАНИЕ!** Библиотека находится в стадии разработки. Не весь код протестирован. API к релизной версии будет немного изменен.

## Содержание

<!-- TOC -->

- [Содержание](#содержание)
- [Особенности](#особенности)
- [Установка](#установка)
- [Использование](#использование)
- [Параметры инициализации](#параметры-инициализации)
- [Фильтрация](#фильтрация)
- [Расширения](#расширения)
- [API](#api)
  - [Статические методы](#статические-методы)
    - [getTimeString](#gettimestring)
    - [parseTimeString](#parsetimestring)
  - [Методы экземпляра](#методы-экземпляра)
    - [GET](#get)
    - [POST](#post)
    - [PUT](#put)
    - [DELETE](#delete)
    - [getOptions](#getoptions)
    - [buildUrl](#buildurl)
    - [parseUrl](#parseurl)
    - [fetchUrl](#fetchurl)
    - [Основные аргументы](#основные-аргументы)
      - [`path`](#path)
      - [`query`](#query)
      - [`options` (параметры запроса)](#options-параметры-запроса)
  - [События](#события)
    - [`request`](#request)
    - [`response`](#response)
    - [`response:body`](#responsebody)
    - [`error`](#error)
- [Вероятные изменения API в следующих версиях](#вероятные-изменения-api-в-следующих-версиях)
- [История изменений](#история-изменений)
  - [0.4.2](#042)
  - [0.4.1](#041)
  - [0.4.0](#040)

<!-- /TOC -->

## Особенности

Библиотека представляет максимально простой и прозрачный интерфейс к существующим методам [API МойСклад](https://online.moysklad.ru/api/remap/1.1/doc) и не выполняет никаких внутренних преобразований отправляемых и получаемых данных.

При необходимости, можно расширить функционал библиотеки [внешними модулями](#расширения).

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
## Параметры инициализации

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

## Расширения

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

### Статические методы

#### getTimeString

> Преобразует дату в строку в формате API МойСклад в часовом поясе Москвы (статический метод)

`Moysklad.getTimeString(date: Date, includeMs?: boolean) : string`

**Параметры:**

`date` - дата

`includeMs` - если `true`, то в результирующую дату будут включены миллисекунды

**Пример использования:**

```js
let date = new Date('2017-02-01T07:10:11.123Z')
let timeString = Moysklad.getTimeString(date, true)

assert.equal(timeString, '2017-02-01 10:10:11.123')
```

#### parseTimeString

> Преобразует строку с датой в формате API МойСклад в объект даты (с учетом часового пояса исходной даты)

`Moysklad.parseTimeString(date: string) : Date`

**Параметры:**

`date` - дата в формате МойСклад (напр. `2017-04-08 13:33:00.123`)

**Пример использования:**

```js
let parsedDate = Moysklad.parseTimeString('2017-04-08 13:33:00.123')

assert.equal(parsedDate.toISOString(), '2017-04-08T10:33:00.123Z')
```

### Методы экземпляра

#### GET

> GET запрос

- `moysklad.GET(path: string | Array<string>, query?: object, options?: object) : Promise`

- `moysklad.GET(args: object) : Promise`

**Параметры:**

`path` - [url ресурса](#path)

`query` - [параметры запроса](#query)

`options` - [опции запроса](#options-параметры-запроса)

**Пример использования:**

```js
let productsCollection = await moysklad.GET('entity/product', { limit: 50 })

let order = await moysklad.GET(['entity', 'customerorder', orderId], { expand: 'positions' })
```

#### POST

> POST запрос

- `moysklad.POST(path: string | Array<string>, payload?: object|Array<object>, query?: object, options?: object) : Promise`

- `moysklad.POST(args: object) : Promise`

**Параметры:**

`path` - [url ресурса](#path)

`payload` - объект или коллекция объектов (будет преобразовано в строку методом `JSON.stringify`)

`query` - [параметры запроса](#query)

`options` - [опции запроса](#options-параметры-запроса)

**Пример использования:**

```js
let newProduct = await moysklad.POST('entity/product', { name: 'Новый товар' })
```

#### PUT

> PUT запрос

- `moysklad.PUT(path: string | Array<string>, payload?: object, query?: object, options?: object) : Promise`

- `moysklad.PUT(args: object) : Promise`

**Параметры:**

`path` - [url ресурса](#path)

`payload` - обнвляемый объект (будет преобразован в строку методом `JSON.stringify`)

`query` - [параметры запроса](#query)

`options` - [опции запроса](#options-параметры-запроса)

**Пример использования:**

```js
let updatedProduct = await moysklad.PUT(['entity/product', id], product)
```

#### DELETE

> DELETE запрос

- `moysklad.DELETE(path: string | Array<string>, options?: object) : Promise<Response>`

- `moysklad.DELETE(args: object) : Promise<Response>`

**Параметры:**

`path` - [url ресурса](#path)

`options` - [опции запроса](#options-параметры-запроса)

Метод `DELETE` возвращает объект [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) текущего запроса.

**Пример использования:**

```js
await moysklad.DELETE(['entity/product', product.id])
```

#### getOptions

> Возвращает опции переданные в момент инициализации экземпляра библиотеки

**Пример использования:**

```js
const options = {
  login: 'login',
  password: 'password'
}

const ms = Moysklad(options)

let msOptions = ms.getOptions()

assert.ok(msOptions !== options)
assert.equal(msOptions.login, 'login')
assert.equal(msOptions.password, 'password')
```

#### buildUrl

> Формирует url запроса

- `moysklad.buildUrl(url: string, query?: object) : string`

- `moysklad.buildUrl(path: string | Array<string>, query?: object) : string`

- `moysklad.buildUrl(args: object) : string`

**Параметры:**

`url` - полный url (должен соответствовать настройкам)

`path` - [url ресурса](#path)

`query` - [параметры запроса](#query)

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

#### parseUrl

> Разбор url на составные компоненты

- `moysklad.parseUrl(url: string) : object`

**Параметры:**

`url` - url ресурса

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

#### fetchUrl

> Выполнить запрос по указанному uri

- `moysklad.fetchUrl(url: string, options?: object) : Promise`

**Параметры:**

`url` - url ресурса

`options` - [опции запроса](#options-параметры-запроса)

**Пример использования:**

```js
let order = await moysklad.fetchUrl('https://online.moysklad.ru/api/remap/1.1/entity/customerorder/eb7bcc22-ae8d-11e3-9e32-002590a28eca')
```

#### Основные аргументы

##### `path`

Строка или массив строк.

**Примеры:**

```js
// Три запроса ниже аналогичны

ms.GET(`https://online.moysklad.ru/api/remap/1.1/entity/customerorder/${ORDER_ID}/positions/${POSITION_ID}?expand=assortment`)

ms.GET(`entity/customerorder/${ORDER_ID}/positions/${POSITION_ID}`, { expand: 'assortment' })

ms.GET(['entity/customerorder', ORDER_ID, 'positions', POSITION_ID], { expand: 'assortment' })
```

##### `query`

Все поля объекта запроса преобразуются в соответствующую строку запроса url. Некоторые поля (поле `filter`) подвергаются преобразованию.

Поле объекта запроса должно иметь тип: `string`, `number`, `boolean`, `null` или `undefined`, любое другое значение вызовет ошибку.

```js
const query = {
  str: 'some string',
  num: 1,
  bool: true,
  nil: null, // будет добавлено в строку запроса с пустым значением
  nothing: undefined, // поле будет пропущено
  arr: ['str', 1, true, null, undefined]
}

// https://online.moysklad.ru/api/remap/1.1/entity/demand?str=some%20string&num=1&bool=true&nil=&arr=str&arr=1&arr=true&arr=
ms.GET('entity/demand', query)
```

Если поле `filter` объект, то вложенные поля `filter` преобразуется в параметры фильтра в соответствии со следующими правилами:

- `string`, `number`, `boolean` не проходят дополнительных преобразований (`key=value`)
- `null` преобразуется в пустую строку (`key=`)
- `Date` преобразуется в строку методом [`getTimeString`](#gettimestring) (`key=YYYY-MM-DD HH:mm:ss`)
- `object` интерпретируется как набор селекторов (см. в разделе [Фильтрация](#фильтрация)) и как набор вложенных полей (см. пример ниже)

```js
// Соответствует следующему значению фильтра: id=5;name.sub=bar;name=foo;name>15
const query = {
  filter: {
    id: 5,
    name: {
      $gt: 15,
      $eq: 'foo',
      sub: 'bar'
    }
  }
}
```

##### `options` (параметры запроса)

Все опции переданные в объекте `options` (за исключением описанных ниже) передаются напрямую в опции метода `fetch` ([Fetch API](http://github.github.io/fetch/)) при осуществлении запроса.

Поля специфичные для библиотеки (не передаются в `fetch`):

Поле | Тип | Описание
---------|-----|---------
`rawResponse` | `boolean` | Если `true`, то метод вернет результат в виде объекта [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response)
`muteErrors` | `boolean` | Если `true`, то все ошибки будут проигнорированы (метод не будет генерировать ошибку если код ответа сервера не в диапазоне 200-299 и/или тело ответа содержит описание ошибки МойСклад).
`millisecond` | `boolean` | Если `true`, то включает в запрос заголовок `X-Lognex-Format-Millisecond` со значением `true` (все даты объекта будут возвращены с учетом миллисекунд).
`precision` | `boolean` | Если `true`, то включает в запрос заголовок `X-Lognex-Precision` со значением `true` (отключение окгругления цен и себестоимости до копеек).
`webHookDisable` | `boolean` | Если `true`, то включает в запрос заголовок `X-Lognex-WebHook-Disable` со значением `true` (отключить уведомления вебхуков в контексте данного запроса).

**Примеры:**

- Формирование заполненного шаблона печатной формы и получение ссылки для загрузки:

  ```js
  const ms = Moysklad({ fetch: require('node-fetch') })

  let body = {
    template: {
      meta: {
        href: ms.buildUrl(['entity/demand/metadata/customtemplate', TEMPLATE_ID]),
        type: 'customtemplate',
        mediaType: 'application/json'
      }
    },
    extension: 'pdf'
  }

  let { headers, status } = await ms
    .POST(['entity/demand', DEMAND_ID, 'export'], body, null, {
      rawResponse: true, // вернуть результат запроса без предварительного разбора
      muteErrors: true   // не обрабатывать ошибки, если код ответа сервера не в диапазоне 200-299
    })

  assert.equal(status, 307)

  let location = headers.get('location')
  assert.true(/https:\/\/120708.selcdn.ru\/prod-files/.test(location))
  ```

- Указание кастомного заголовка

  ```js
  const ms = Moysklad({ fetch: require('node-fetch') })

  const folder = {
    meta: {
      type: 'productfolder',
      href: ms.buildUrl(['entity/productfolder', FOLDER_ID])
    },
    description: 'Новое описание группы товаров'
  }

  // Указываем кастомный заголовок X-Lognex-WebHook-Disable для PUT запроса
  const updatedFolder = await ms.PUT(['entity/productfolder', FOLDER_ID], folder, null, {
    // вместо этого можно использовать webHookDisable: true
    headers: {
      'X-Lognex-WebHook-Disable' : true
    }
  })

  assert.equal(updatedFolder.description, folder.description)
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

## Вероятные изменения API в следующих версиях

> Ниже описаны изменения которые могут быть в следующих версиях библиотеки

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

### 0.4.2

- ✏️ дополнение документации
- 🔬(query): дополнительные тесты
- 🛠(query): исправление неточностей в логике построения строки запроса

### 0.4.1

- ⚠️ исправление ошибки: селектор `$exists` обрабатывался всегда как `!=`, вне зависимости от значения

### 0.4.0

- ⚠️ исправление ошибки: селектор `$lte` работал не верно (обрабатывался как `$gte`)
- 🔧 исправление в работе селектора `$not`
- ➕ добавление селекторов `$st`, `$et`, `$contains`
- 🔄 обновление зависимости и удаление файла package-lock.json
- ✏️ дополнение документации
