({
	handleApplicationEvent : function(component, event, helper) {
        var messages = event.getParam("message");
        var con = event.getParam("contact");
        console.log('in side 2nd component');
		console.log(messages);
        console.log(contacts);
        var action = component.get("c.recordDetails");
        action.setParams({IdAcc:contacts});
        action.setCallback(this,function(resp){
           
           var data = resp.getReturnValue();
            console.log(data);
        });
        $A.enqueueAction(action);
	}
})