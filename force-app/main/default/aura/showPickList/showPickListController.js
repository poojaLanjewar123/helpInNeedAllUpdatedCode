({
	showAura : function(comp, event, helper) {
        var action = comp.get("c.pickValue");
        action.setCallback(this,function(responce){
            var jsArr = responce.getReturnValue();
            var result = [];
            
            jsArr.forEach(e=>{
                console.log(e);
                result.push({'label':e,'value':e});
            
            });
        	comp.set("v.optionsList",result);
        });
        $A.enqueueAction(action);
	}
})