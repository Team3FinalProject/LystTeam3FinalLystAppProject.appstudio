btnLogin.onclick=function(){
    let name = inptUsernameLogin.value
    let password = inptPasswordInpt.value
    let query = "SELECT * FROM user_profile WHERE `name` = '" + name + "'"
    alert(query)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + "kes97391" + "&pass=" + "Odie6343!" + "&database=" + databaseSchema + "&query=" + query)
    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblErrorMsg.textContent = "There are no pets in the database."
        else {        
           ChangeForm(afterLogin)
         } // end else
    }
}

/*  SELECT CODE Cleaned up
        
    query = "SELECT * FROM pets"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "clc90595&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)

    if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        if (results.length == 0)    
           lblMessage1.textContent = "There are no pets in the database."
        else {        
           let message = ""
           for (i = 0; i < results.length; i++)
               message = message + results[i][1] + "\n"
           txtResults.value = message
        } // end else

    } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage1.textContent = "Error code: " + req.status
}
*/

/*  INSERT CODE Cleaned 

    let newName = inptNewName.value
    let oldName = inptOldName.value
    query = "SELECT * FROM pets WHERE `petName` = '" + oldName + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
    if (req.status == 200) {
        allPetData = JSON.parse(req.responseText)
        if (allPetData.length > 0) {
            query = "UPDATE pets SET `petName` ='" + newName + "' WHERE `petName` = '" + oldName + "'"
            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
            if (req.status ==  200)  
                if (req.responseText == 500)   
                    lblMessage7.textContent = `You have successfully updated ${oldName} to ${newName}.`
                else
                    lblMessage7.textContent = `There was a problem updating ${oldName} to ${newName}.`
            else   
                lblMessage7.textContent = `Error: ${req.status}`
        }
    } // if 200



*/