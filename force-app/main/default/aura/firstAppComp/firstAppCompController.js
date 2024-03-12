({
	fireApplicationEvent : function(comp, event, helper) {
 
        var NM = comp.find("AccountName").get("v.value");
        var ph = comp.find("Phone").get("v.value");
        var Indus = comp.find("Industry").get("v.value");
        var action = comp.get("c.recordMethod");
        action.setParams({name:NM, phone:ph, industry:Indus});
        action.setCallback(this, function(response){
            	var result = response.getReturnValue();
            	alert(result);
            var appEvent = $A.get("e.c:AppEvent");
        	appEvent.setParams({"message" : result });
        	appEvent.fire();
        });
        $A.enqueueAction(action);
	}
  
})