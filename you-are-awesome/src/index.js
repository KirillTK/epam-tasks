const createEnumerableProperty = (propertyName) => {
  Object.defineProperty(Object.prototype, propertyName, {
    enumerable: true,
    configurable: true,
    writable: true
  });
  return propertyName;
};

const createNotEnumerableProperty = (propertyName) => {
  let value;
  Object.defineProperty(Object.prototype, propertyName, {
    enumerable: false,
    configurable: true,
    get: function () {
      return value;
    },
    set: function (val) {
      value = val;
    }
  });
  return propertyName;
};

const createProtoMagicObject = () => {
  let obj = () => {
  };
  obj.__proto__ = null;
  obj.prototype = null;
  return obj;
};

const incrementor = () => {
  if (typeof (this.valInc) === 'undefined') {
    this.valInc = 0;
  }
  let thisContext = this;

  function inc() {
    thisContext.valInc++;
    return inc;
  }

  inc.toString = () => {
    return thisContext.valInc;
  };
  this.valInc++;
  return inc;
};

const asyncIncrementor = () => {
  if (typeof (this.val) === 'undefined') {
    this.val = 1;
  }
  return new Promise((resolve) => {
    resolve(this.val++)
  });
};

const createIncrementer = () => {
};

const returnBackInSecond = (param) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(param)
    }, 1000)
  });
};

const getDeepPropertiesCount = (obj) => {
  let result = 0;

  function getPropertiesCount(obj) {
    for (key in obj) {
      result++;
      getPropertiesCount(obj[key]);
    }
    return result;
  }

  return getPropertiesCount(obj);
};

const createSerializedObject = () => {
  return null;
};

const sortByProto = (arr) => {
  return arr.sort((a, b) => b.__proto__ - a.__proto__);
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
