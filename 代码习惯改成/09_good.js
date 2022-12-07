let arr = [1,2,3,4,1,2,3]
let uniquearr = (arr) => [...new Set(arr)]
console.log(uniquearr(arr));

// uniquearr = new Set(arr)
// uniquearr = [...uniquearr]