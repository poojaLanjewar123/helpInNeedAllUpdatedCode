/*trigger AccountTrigger on Account (after insert) {
    
    if(trigger.IsAfter && trigger.isInsert){
        
        //handlarAccountTrigger.leadActivityInsert(trigger.new);
        for(Account accObj : trigger.new){
            if(accObj.Email_Trigger__c != accObj.name +'@tcs.com'){
                accObj.addError('this email not accepted');
            }
        }
        
    }
}*/

trigger AccountUpdatePhone on Account(Before insert){
    
   /* for(Account accObj : trigger.new){
        if(accObj.Industry == 'Banking'){
            accObj.Phone = '999';
        }   
    }*/
}