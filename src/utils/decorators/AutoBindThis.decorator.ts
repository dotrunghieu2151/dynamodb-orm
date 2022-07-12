
function AutoBindThis<T extends Function>(constructor: T): T;

function AutoBindThis<T extends { new(...args: any[]): {} }>(constructor: T) {
  let self: any;
  const enhancedClass = class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      self = this;
    }
  };
  const proto = constructor.prototype;
  Object.getOwnPropertyNames(proto).forEach(key => {
    if (key === 'constructor') {
      return;
    }
    const descriptor = Object.getOwnPropertyDescriptor(proto, key);
    if (descriptor && typeof descriptor.value === 'function') {
      const original = descriptor.value;
      enhancedClass.prototype[key] = (...a: any[]) => original.apply(self, a);
    }
  });
  return enhancedClass;
}

export default AutoBindThis;