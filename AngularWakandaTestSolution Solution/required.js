function myLogin(userName, password) //advanced login listener
{
	var theUser = directory.internalStore.User({name: userName});
	if (theUser != null) //user exists in the directory
		return false; // allow directory authentication
	else	// use data from the project for login
	{      //default will be to reject login


		var result = {error: 1024, errorMessage: 'Invalid Login'};
		var securityDs = solution.getApplicationByName("AngularWakandaTestSolution").ds;
		var user = securityDs.User({login:userName});
		if (user != null) // if a user was found
		{
			// see of the stored hash value is correct
			if (user.password ===  password) 
			{
				var theGroups = [];
				var putIntoStorage = {myID: user.ID};
				switch (user.accessLevel){
				
					case 1: 
						theGroups = ['TestGroupLevel1'];
						break;
					case 2: 
						theGroups = ['TestGroupLevel2'];
						break;
					
					case 3: 
						theGroups = ['TestGroupLevel3'];
						break;
				}
				result = {
					ID: user.ID, 
					name: user.login, 
					fullName: user.fullName, 
					belongsTo: theGroups,
					storage: putIntoStorage};
			}
		}
		return result; // either an error or a custom user object
		
		
		
	}
};



