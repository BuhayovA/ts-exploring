import * as Decorators from "./modules/decorators";

const demo = new Decorators.DemoClassDec();

/* CALL WITHOUT ERROR */
demo.exec(1);
demo.surname = "S";

/* CALL WITH ERROR */
// demo.exec(11);
// demo.surname = 1 as unknown as string; | ~ Error: 1 is not assignable to type 'string'
