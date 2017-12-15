/**
 * What is a functor?
 * 
 * It is a data structure that can map a function to a it's value(s), 
 * with the purpose of lifting the values out of a the data  
 * structure, applying a funciton to them and then re-wrapping 
 * them in a new instance of the same container type or data structure.
 * 
 * An examples of functors are:
 * - Arrays
 */

/**
 * functor data structure
 */ 
class functor {
  constructor(value) {
    this.value = value; 
  }

  /**
   * This fMap function is what makes functor class an actual 'functor':
   * 
   * - it takes a container value and returns a new container of the same type
   * - with a different value
   * 
   * fMap :: (A -> B) -> Wrap(A) -> Wrap(B)
   */ 
  fMap(mapFunc) {
    return wrap(mapFunc(this.value));
  } 
}

/**
 * this utility funciton will wrap a 
 * value in a new functor container
 * wrap :: X -> functor(X)
 */ 
const wrap = value => new functor(value);

/**
 * Here we create a functor container with the value of 2
 */
const two = new functor(2);

/**
 * Here we define a generic function to map to our
 * `two` container above, which is a functor _because_
 * it implements flat map
 * add :: value, numberToAdd -> value + numberToAdd
 */
const add = containerValue => 
  numberToAdd => containerValue + numberToAdd;

/**
 * Finally, we now use flat map on our functor data
 * strucutre to act on its internal value without mutuating it
 * by returning a new container with a different value
 * 
 * we can also chain this operatio as many times as we want, because
 * fmap is returning a type of container which has the fMap funciton on it! 💥
 */
console.log(two.fMap(add(123)));

console.log(
  two.fMap(add(10))
     .fMap(add(2))
);

/**
 * the idea behind using a container is so that the program 
 * does not have direct access to a value. In a sense the value is wrapped up in
 * armor.
 */