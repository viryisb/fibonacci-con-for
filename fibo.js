    var x = 1; 
    var y = 1; 
    var z; 
    //var fin = 10
    var fin = 32
    
    console.log("Partimos de: 1 conejo + 1 coneja= 2 conejos")
 
    console.log(x) //este no es ciclo for
    console.log(y) // este tampoco es ciclo for
    z = x + y
    console.log(z) //resultado de 1+1----> o sea 1 coneja + 1 conejo= 2 conejos 
    console.log('--> a partir de ahora empieza el ciclo for:')
    for (var i = 3; i < fin - 1; i++) { 
     x = y
      y = z 
      z = y + x
      console.log(z) 
    }
    
    