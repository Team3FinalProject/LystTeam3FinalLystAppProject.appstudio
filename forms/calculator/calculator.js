/*
btnAdd.onclick=function(){
  int1 = parseInt(inptValueOne.value)
  int2 = parseInt(inptValueTwo.value)
  lblDisplay.value = int1 + int2
}

btnMult.onclick=function(){
  int1 = parseInt(inptValueOne.value)
  int2 = parseInt(inptValueTwo.value)
  lblDisplay.value = int1 * int2
}


btnClear.onclick=function(){
  lblDisplay.value = ""
}
*/

drpSelection.onclick=function(s){
  if (typeof(s) == "object")
    return 
  else 
    drpSelection.value = s
    let ingredients = drpSelection.value 
  
query = "SELECT * FROM lyst_ingredients t INNER JOIN `lyst` l ON t.lyst_id = l.lyst_id INNER JOIN `ingredients` i ON i.ingredient_id = t.ingredient_id WHERE lyst_name = '" + ingredients + "'"
   req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + "375groupa3" + "&query=" + query)
  if (req.status == 200) { 
    console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
  results = JSON.parse(req.responseText)
    console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
  if (results.length == 0)
    lblTest.value = "There are no ingredients in the database"
  else {
  let message = ""
  for (i = 0; i < results.length; i++)
    rdoCalculator.addItem(message + results[i][3] + "\n")
    }
  } else 
    lblTest.value = "Error Code:" + req.status
}
