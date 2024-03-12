({
	auraMethod : function(component, event, helper) {
        console.log('inside controller');
		var NM = component.find("AccountName").get("v.value");
        console.log(NM);
        var ph = component.find("Phone").get("v.value");
        var Indus = component.find("Industry").get("v.value");
        var action = component.get("c.methodApex1");
        action.setParams({Name:NM, Phone:ph, Industry:Indus});
        action.setCallback(this, function(response){
            	var result = response.getReturnValue();
            	alert(result);
        });
        $A.enqueueAction(action);
	}
})