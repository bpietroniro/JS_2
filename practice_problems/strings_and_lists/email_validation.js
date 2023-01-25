function isValidEmail(email) {
  let [local, domain] = email.split('@');

  if (!!local.match(/[^A-Za-z0-9]/)) return false;

  let domainParts = domain.split('.');
  if (domainParts.length <= 1) return false;

  for (let i = 0; i < domainParts.length; i += 1) {
    let part = domainParts[i];
    if (part.length === 0) return false;
    if (!!part.match(/[^A-Za-z]/)) return false;
  }
  return true;
}

function isValidEmailRegex(email) {
  return !!(email.match(/^[A-Za-z0-9]+@([A-Za-z]+\.)+[A-Za-z]+$/));
}

/*
console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false
*/

console.log(isValidEmailRegex('Foo@baz.com.ph'));          // returns true
console.log(isValidEmailRegex('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmailRegex('foo@baz.com'));             // returns true
console.log(isValidEmailRegex('foo@baz.ph'));              // returns true
console.log(isValidEmailRegex('HELLO123@baz'));            // returns false
console.log(isValidEmailRegex('foo.bar@baz.to'));          // returns false
console.log(isValidEmailRegex('foo@baz.'));                // returns false
console.log(isValidEmailRegex('foo_bat@baz'));             // returns false
console.log(isValidEmailRegex('foo@bar.a12'));             // returns false
console.log(isValidEmailRegex('foo_bar@baz.com'));         // returns false
console.log(isValidEmailRegex('foo@bar.....com'));         // returns false
