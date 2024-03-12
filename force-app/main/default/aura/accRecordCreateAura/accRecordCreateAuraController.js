({
	createRecord : function(component, event, helper) {
		console.log('im in js metthod');
	},
    insertAccRecord : function(comp, event, helper) {
		console.log('im in js metthod');
        var accObj = {};
        accObj['Name']= 'fromJsPart2';
        accObj['Phone'] = '12345';
        accObj['Industry'] = 'Banking';
        //alert(JSON.stringify(accObj));
        var action = comp.get("c.insertAccMethod");
        action.setParams({acc:accObj});
   
        action.setCallback(this, function(response){
            
            console.log(response.getReturnValue());
            
            
    	});
         $A.enqueueAction(action);
        
	},
    insertAccListRecord : function(comp, event, helper) {
		console.log('im in js metthod');
        
        var acc={};
        acc.Name='fromJsListObj';
        acc.Phone='03-781259';
        acc.Industry = 'Banking';
        
        alert(JSON.stringify(acc));
        var action = comp.get("c.insertAccListMethod");
        action.setParams({accList:[acc]});
   
        action.setCallback(this, function(response){
            
            console.log(response.getReturnValue());
            
            
    	});
         $A.enqueueAction(action);
                
	},
    
    methodApex : function(cmp, event, helper) {
		console.log('im in javascript Method');
       var action = cmp.get("c.methodApex1");// apex method
        action.setParams({ Name : "auraRecord", Phone : "123456789"});// set value on apex str vaiable 
        //action.setParams({ Phone : "123456789" });
        action.setCallback(this, function(response){
            
            console.log(response.getReturnValue());
            
            
    	});
         $A.enqueueAction(action);
	}
})