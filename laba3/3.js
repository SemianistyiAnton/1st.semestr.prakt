function IpToNum(ip) {
    let arrstr = ip.split(".")
    let arr = arrstr.map(Number)
    let res = arr.reduce((sum, byte) => (sum << 8 ) + byte)
    // for (let i = 0; i < arr.length; i++) {
    // const byte = arr[i]; 
    // result = (result << 8) + byte;
    // }
    return res
}

console.log(IpToNum('127.0.0.1'))
console.log(IpToNum('10.0.0.1'))