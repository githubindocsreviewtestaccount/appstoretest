import * as kanji from "./kanji-ts-because-ts-is-dumb/index";

/** More details
 *
 * And even more details
 *
 * @param package The Kanji package
 *
 * Code links: (Puts Foo inside <code> tags)
 * {@linkcode Package} or [[`Package`]]
 *
 * @public
 */
export interface SomePackage {
  package?: kanji.Package;
}

/**
 * It's some other package. testing again.
 */
export interface SomeOtherPackage extends SomePackage {
  name: string;
  printName: () => string;
}

export type Diff<T extends keyof any, U extends keyof any> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T];
export type Overwrite<T, U> = Pick<T, Diff<keyof T, keyof U>> & U;

export interface OriginalInterface {
  title?: string;
  text?: string;
  // lots of other properties
}
export interface Extension {
  title?: string | number;
  text?: string | number;
}

export class Person {
  constructor(public firstName: string, public lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

export class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // call the constructor of the Person class:
    super(firstName, lastName);
  }
}

interface ExtendedInterface extends Overwrite<OriginalInterface, Extension> {}

export let fooPackage: SomeOtherPackage = {
  name: "Foo",
  printName: () => "Foo",
};
