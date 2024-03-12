({
	searchMethod : function(comp, event, helper) {
        //alert(comp.find("searchInpId").get("v.value"));
        console.log('search method '+comp.find("searchInpId").get("v.value"));
		var action = comp.get("c.searchMethod1");
        action.setParams({accName:comp.find("searchInpId").get("v.value")});
        action.setCallback(this,function(response){
              var result = response.getReturnValue();
            comp.set("v.AccountRecord",result);
            	
    		});
        $A.enqueueAction(action);
        
	}
})