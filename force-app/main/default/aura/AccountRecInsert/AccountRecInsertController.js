({
	insertAccRecord : function(cmp, event, helper) {
		var Name = cmp.find("inpId1").get("v.value");
        var Phone = cmp.find("inpId2").get("v.value");
        var Industry =cmp.find("inpId3").get("v.value");
        
        var action = comp.get("c.apexMethod");
        action.setParams({accName:Name, accPhone:Phone, accIndustry:Industry});
   
        action.setCallback(this, function(response){
            
            console.log(response.getReturnValue());
            
            
    	});
         $A.enqueueAction(action);
        
	}
})