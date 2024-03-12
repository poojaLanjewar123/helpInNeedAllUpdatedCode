({
	fireCompEvent : function(cmp, event, helper) {
		var cmpEvent = cmp.getEvent("cmpEvent");
        cmpEvent.setParams({
            "msg" : "this is from child component" });
        cmpEvent.fire();
	}
})