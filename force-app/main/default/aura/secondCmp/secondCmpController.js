({
	onClick : function(component, event, helper) {
		console.log('im in onclick function');
        
        var jsvar = [{"id":"1234","Name":"NitishKumar","designation":"Bihar CM"}];
        alert(JSON.stringify(jsvar));
        console.log('type of '+typeof jsvar);
	},
    apexMethod : function(cmp, event, helper) {
        var action = cmp.get("c.auraMethod");// apex method
        action.setParams({ str : "LNMOP" });// set value on apex str vaiable 
        action.setCallback(this, function(response){
            
            console.log(response.getReturnValue());
            
            
    	});
         $A.enqueueAction(action);
    } 
})