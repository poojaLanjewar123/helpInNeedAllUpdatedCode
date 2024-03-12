trigger addAccErrorTrigger on Account (before insert, after insert, before update, after update, before delete, after delete, after undelete) {
    if(trigger.isBefore && trigger.isUpdate){
        //best practices of trigger
        //never use soql in for loop
        //never use dml in for loop
        //trigger must be bulkified
        //on trigger per object
        //avoid double for loop ,use map instade
        
    }  
    if(trigger.isBefore && trigger.isInsert){
        ApexHandlerClass.beforeInsertMethod2(trigger.new);
        ApexHandlerClass.beforeInsertMethod(trigger.new);
         
        
    }
    if(trigger.isAfter && trigger.isInsert){
        
        
    }
     
}