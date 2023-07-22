// Decorator's
@ClassDec
class DemoClassDec {
  // privet method added in ES2023
  #surname!: string;

  @FieldDec
  name: string = "Field";

  @MethodDec
  @MaxMethod(10)
  exec(a: number) {
    console.log(a);
  }

  @IsString
  set surname(value: string) {
    this.#surname = value;
  }
}

function ClassDec<This, Args extends any[]>(
  target: new (...args: Args) => This,
  context: ClassDecoratorContext<new (...args: Args) => This>,
) {
  // Called second
  context.addInitializer(() => console.log("Class initializer"));

  // Called first
  console.log("Class init");
}

function IsString<This, T extends string, Return>(
  target: (this: This, arg: T) => Return,
  context: ClassSetterDecoratorContext<This, T>,
) {
  console.log("Init 'IsString' decorator");

  return function (this: This, arg: T): Return {
    if (typeof arg !== "string") {
      throw new Error(`${arg} is not assignable to type 'string'`);
    }

    const res = target.call(this, arg);

    return res;
  };
}

function FieldDec<This, T>(
  target: undefined,
  context: ClassFieldDecoratorContext<This, T>,
) {
  console.log("Field init");

  return function (value: T) {
    console.log("Field init inside func");

    return value;
  };
}

function MethodDec<This, Args extends any[], Return>(
  target: (this: This, ...args: Args) => Return,
  context: ClassMethodDecoratorContext<
    This,
    (this: This, ...args: Args) => Return
  >,
) {
  console.log("Init 'MethodDec' decorator");

  return function (this: This, ...args: Args): Return {
    const res = target.call(this, ...args);

    return res;
  };
}

function MaxMethod(num: number) {
  return function <This, Args extends any[], Return>(
    target: (this: This, ...args: Args) => Return,
    context: ClassMethodDecoratorContext<
      This,
      (this: This, ...args: Args) => Return
    >,
  ) {
    console.log("Init 'MaxMethod' decorator");

    return function (this: This, ...args: Args): Return {
      if (args[0] > num) {
        throw new Error(`Value must be less than ${num}`);
      }

      const res = target.call(this, ...args);
      return res;
    };
  };
}

export { DemoClassDec };
