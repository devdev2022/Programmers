function solution(num_list) {
    let odd = []
    let even = []
    for(i=0; i<num_list.length; i++) {
        if(num_list[i]%2===0) {
            even.push(num_list[i])
        }
        if(num_list[i]%2===1) {
            odd.push(num_list[i])
        }
    }
  return parseInt(odd.join("")) + parseInt(even.join(""))
}