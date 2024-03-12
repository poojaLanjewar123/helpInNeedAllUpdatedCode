trigger LeadTrigger on Lead (before update, after insert){
    if(trigger.isAfter && trigger.isInsert){
        leadTriggerHandalear.leadActivityInsert(trigger.new);
    }
    if(trigger.isBefore && trigger.isUpdate){
        for( Lead leadUpdate : trigger.new ){
            
            if(leadUpdate.Industry == 'Healthcare'){
                leadUpdate.LeadSource = 'Purchased List';
                leadUpdate.SICCode__c = '1100';
                leadUpdate.Primary__c ='yes';
                leadUpdate.Status = 'working-contacted';
                
            }
        }
    }

}