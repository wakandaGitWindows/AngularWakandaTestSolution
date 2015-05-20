

function buildData(request, response)
{
	ds.Company.remove();
	ds.Person.remove();
	ds.User.remove()
	

	wait(10);
	ds.Company.setAutoSequenceNumber(1);
	ds.Person.setAutoSequenceNumber(1);
	ds.User.setAutoSequenceNumber(1);

	
	var enterprises = 
	[
	{
		ID:1,
		name:'4D'
	},
	{
		ID:2,
		name:'EDF'
	},
	
	{
		ID:3,
		name:'Apple'
	},
	
	{
		ID:4,
		name:'Google'
	}
	];
	
	var persons = 
	[
	{
		ID:1,
		name:'ELMETNI',
		age: 24 ,
		employeer: '4D'
		
		
	},
	
	{
		ID:2,
		name:'AITRAHOU',
		age: 24 ,
		employeer: '4D'
		
		
	},
	{
		ID:3,
		name:'ABELARD',
		age: 50 ,
		employeer: 'EDF'
		
		
	},
	{
		ID:4,
		name:'BRICE',
		age: 29 ,
		employeer: 'EDF'
		
		
	},
	{
		ID:5,
		name:'TOMAS',
		age: 42 ,
		employeer: 'Apple'
		
		
	},
	{
		ID:6,
		name:'KOUDISS',
		age: 32 ,
		employeer: 'Google'
		
		
	},
	{
		ID:7,
		name:'VASS',
		age: 24 ,
		employeer: 'Google'
		
		
	}
	];

	
	var users = 
	[
	{
		ID:1,
		login: 'elmetni' ,
		password: 123456,
		accessLevel: 1,
		fullName: 'ELMETNI Hamza'
		
		
	},
	
	{
		ID:2,
		login: 'imane' ,
		password: 123456,
		accessLevel: 2,
		fullName: 'imane hadri'
		
		
	},
	
	
	{
		ID:3,
		login: 'amine' ,
		password: 123456,
		accessLevel: 3,
		fullName: 'amine bakali'
		
		
	},
	
	
	];
		
	
	for (var i = 0,nb = enterprises.length; i < nb; i++)
	{
		var c = enterprises[i];
		var comp = new ds.Company(
		{
			ID:c.ID,
			name:c.name
			
		});
		
		comp.save();	
	}
	
	for (var i = 0,nb = persons.length; i < nb; i++)
	{
		var p = persons[i];
		var emp = new ds.Person(
		{
			
			ID:p.ID,
			name:p.name,
			age:p.age,
			company: ds.Company.find("name = :1", p.employeer)
		
		});
		
		emp.save();	
	}
	
	
	for (var i = 0,nb = users.length; i < nb; i++)
	{
		var p = users[i];
		var u = new ds.User(
		{
			
			
			
			ID:p.ID,
			login: p.login ,
			password: p.password,
			accessLevel: p.accessLevel,
			fullName: p.fullName
		
		
		
		});
		
		u.save();	
	}
	
}