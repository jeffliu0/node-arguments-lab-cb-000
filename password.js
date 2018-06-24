// code solution here

console.log(process.argv.length)

module.exports = function password(){
  if(process.argv.length!==4){
    return 'Need two arguments'
  }
}
