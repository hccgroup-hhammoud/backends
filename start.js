function isPalendrome(str){
    for(let i=0; i <= str.length/2;i++){
        if(str[i] !== str[str.length-i-1]){
            return false;
        }
    }
    return true;
}
let str1='loooooooooooool';
console.log(`is ${str1} a palendrome? ${isPalendrome(str1)}`);
let str2='wazizaza';
console.log(`is ${str2} a palendrome? ${isPalendrome(str2)}`);