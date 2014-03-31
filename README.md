Object count
=============

Count the number of properties in an object, or returns the number of items in an array.

Installation
============

```bash
npm install object-count
```

How to use
==========

Require object-count:

```js
var count = require("object-count");
```

Use it with an object:

```js
var anObject = {
  "property1": "with",
  "property2": "some",
  "property3": "data"
};

count(anObject); // 3
```

It also works with an array:

```js
var anArray = ["with", "some", "data"];

count(anArray); // 3
```

LICENSE
=======

MIT
