({
	doinit : function(component, event, helper) {
		console.log('Name '+component.get("v.Name"));
        console.log('Last Name '+component.get("v.LastName"));
        console.log('Industry '+component.get("v.Industry"));
        console.log('Age '+component.get("v.Age"));
        console.log('Roll No '+component.get("v.RollNo"));
       
	},
    callChildMethod: function(component, event, helper) {
        
        console.log('Name '+component.get("v.Name"));
        console.log('Last Name '+component.get("v.LastName"));
        console.log('Industry '+component.get("v.Industry"));
        console.log('Age '+component.get("v.Age"));
        console.log('Roll No '+component.get("v.RollNo"));
    }
})