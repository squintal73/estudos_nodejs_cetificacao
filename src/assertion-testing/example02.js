/**
 * Description: Equal numbers or not with (assert.strictEqual) method.
 * Author:sidnei quintal - sidneirq73@gmail.com - 11/06/2023.
 */

/** Import generics dependences */
import assert from 'assert';
import 'pretty-console-colors';

console.log('Example about the "assert.equal"');
console.group();

// These two numbers are strict equal.
try {
  assert.equal(10, 10);
  console.info('[PASSED] Number 10 is equal 10 !');
} catch (err) {
  console.error(`[FAIL] Expected > ${err.expected} | Actual > ${err.actual}`);
}

// One 2 is type string and the other is type number but equals.
try {
  assert.equal('7', 7);
  console.info('[PASSED] String 7 is equal Number 7!');
} catch (err) {
  console.error(`[FAIL] Expected > ${err.expected} | Actual > ${err.actual}`);
}

// Number 2 is type string and different of String A.
try {
  assert.equal('3', 'X');
  console.info('[PASSED] String 3 is equal string X!');
} catch (err) {
  console.error(`[FAIL] Expected > ${err.expected} | Actual > ${err.actual}`);
}

console.groupEnd();
