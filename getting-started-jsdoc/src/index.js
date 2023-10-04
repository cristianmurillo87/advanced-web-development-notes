/* @ts-check => used for type checking*/

// @ts-check
const { add, subtract, multiply, divide } = require('./calculator');

/**
 * @file Index.js is the source file for this project.
 * @author Cristian Murillo
 * See  {@link <a href="https://cristianmurillo.portfolio.com">Cristian Murillo's Portfolio</a>}
 */
/**
 * Student Name
 * @type {string}
 */
const studentName = 'John Doe';

/**
 * Array of grades
 * @type {Array<number>}
 */
const grades = [98, 97.7, 76, 89];

/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
  id: 1,
  text: 'Hello!',
};

/**
 * Calculate tax
 * @param {number} amount - Total amount
 * @param {number} tax - Tax percentage
 * @returns {string} Total with a dollar sign
 */
const calculateTax = (amount, tax) => {
  return `$${amount + tax * amount}`;
};

/**
 * A student
 * @typedef {Object} Student
 * @property {number} id - Student id
 * @property {string} name - Student name
 * @property {string|number} [age] - Student's age (optional)
 * @property {boolean} isActive - Student is active
 */

/**
 * @type {Student}
 */
const student = {
  id: 1,
  name: 'John Doe',
  age: 20,
  isActive: true,
};

/**
 * Class to create a person object
 */
class Person {
  /**
   *
   * @param {Object} personConfig Information about the person
   */
  constructor(personConfig) {
    /**
     * Person's name
     * @type {string}
     */
    this.name = personConfig.name;
    /**
     * Person's age
     * @type {string}
     */
    this.age = personConfig.age;
  }

  /**
   * @property {Function} greet A greeting with name and age
   * @returns void
   */
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

/**
 * See {@link Person}
 */
const person = new Person({
  name: 'John Doe',
  age: 30,
});

person.greet();

console.log(add(20, 40));
