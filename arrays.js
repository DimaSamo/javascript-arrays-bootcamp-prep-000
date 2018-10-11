 var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

fucntion addElementToBeginningOfArray(array, element){
  return [element,...array]
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshit(element)
  return array
}