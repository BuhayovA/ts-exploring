"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemoClassDec = void 0;
// Decorator's
let DemoClassDec = (() => {
    var _DemoClassDec_surname;
    let _classDecorators = [ClassDec];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _exec_decorators;
    let _set_surname_decorators;
    var DemoClassDec = _classThis = class {
        constructor() {
            // privet method added in ES2023
            _DemoClassDec_surname.set(this, (__runInitializers(this, _instanceExtraInitializers), void 0));
            this.name = __runInitializers(this, _name_initializers, "Field");
        }
        exec(a) {
            console.log(a);
        }
        set surname(value) {
            __classPrivateFieldSet(this, _DemoClassDec_surname, value, "f");
        }
        get surname() {
            return __classPrivateFieldGet(this, _DemoClassDec_surname, "f");
        }
    };
    _DemoClassDec_surname = new WeakMap();
    __setFunctionName(_classThis, "DemoClassDec");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _name_decorators = [FieldDec];
        _exec_decorators = [MethodDec, MaxMethod(10)];
        _set_surname_decorators = [IsString];
        __esDecorate(_classThis, null, _exec_decorators, { kind: "method", name: "exec", static: false, private: false, access: { has: obj => "exec" in obj, get: obj => obj.exec }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _set_surname_decorators, { kind: "setter", name: "surname", static: false, private: false, access: { has: obj => "surname" in obj, set: (obj, value) => { obj.surname = value; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, null, _name_decorators, { kind: "field", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DemoClassDec = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DemoClassDec = _classThis;
})();
exports.DemoClassDec = DemoClassDec;
function ClassDec(target, context) {
    // Called second
    context.addInitializer(() => console.log("Class initializer"));
    // Called first
    console.log("Class init");
}
function IsString(target, context) {
    console.log("Init 'IsString' decorator");
    return function (arg) {
        if (typeof arg !== "string") {
            throw new Error(`${arg} is not assignable to type 'string'`);
        }
        const res = target.call(this, arg);
        return res;
    };
}
function FieldDec(target, context) {
    console.log("Field init");
    return function (value) {
        console.log("Field init inside func");
        return value;
    };
}
function MethodDec(target, context) {
    console.log("Init 'MethodDec' decorator");
    return function (...args) {
        const res = target.call(this, ...args);
        return res;
    };
}
function MaxMethod(num) {
    return function (target, context) {
        console.log("Init 'MaxMethod' decorator");
        return function (...args) {
            if (args[0] > num) {
                throw new Error(`Value must be less than ${num}`);
            }
            const res = target.call(this, ...args);
            return res;
        };
    };
}
