({  doInit:function(cmp, event, helper){
    console.log('init handler');
    var action = cmp.get("c.lightningMethod");// apex class method 
    //action.setParams({:});
    action.setCallback(this,function(resp){
        
        console.log('value from apex '+resp.getReturnValue()); // this is used for return the value from Apex method
        cmp.set("v.apexStr",resp.getReturnValue());
    });
    $A.enqueueAction(action);
 },
	doClick : function(cmp, event, helper) {
		console.log('this is on button click');
        console.log(cmp.get("v.str"));
        cmp.set("v.str","xyz");
        console.log(cmp.get("v.str"));
        cmp.set("v.strList","['DDD','EEE','FFF']");
        
	}
})