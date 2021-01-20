var x={"x":1,"y":2,"i":3,"l":8}
var jsonOfdevices ={"x":4,"c":9},t
t=Math.floor(Date.now()/1000)
  console.log("x", x)
  console.log("y",jsonOfdevices )

function json2json(serverjson){
    for(var jsonkey in serverjson){
      if(jsonOfdevices[jsonkey]){
        jsonOfdevices[jsonkey] = serverjson[jsonkey]
      }
    }
    jsonOfdevices["c"]= Math.floor(Date.now()/1000)
}



json2json(x)
console.log(" out ",jsonOfdevices)
console.log('done')