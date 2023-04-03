function firstStep(input) {
  // Your code here
  let res= input.split('&')
  return res

}

function secondStep(input) {
  // Your code here
  let res = input.map((el)=> {
    let split = el.split('=')
    return split
  })
  return res
}

function thirdStep(input) {
  // Your code here
  let res = input.map((el)=> {
    let regex =  el.map(el => el.replace(/\+/g, " ") ) 
      return regex
  })
  return res
}

function fourthStep(input) {
  // Your code here
  let res = input.map((el)=> {
    let decode = el.map(el => decodeURIComponent(el));
    return decode
  })
  return res

}

function fifthStep(input) {
  // Your code here
  let res = input.reduce((prev,curr)=> {
    prev[curr[0]] = curr[1];
    return prev;
    }
    ,{})
  return res
}

function parseBody(str) {
  // Your code here
  let first = firstStep(str)
  let second = secondStep(first)
  let third = thirdStep(second)
  let fourth = fourthStep(third)
  let fifth = fifthStep(fourth)

  return fifth
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};