const path=require('path')

console.log(path.sep);

const filePath= path.join('/content','subfolder','test.txt')
console.log(filePath);

//get the basename:
const base=path.basename(filePath)
console.log(base);

//return an absolute path
const absolute=path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);