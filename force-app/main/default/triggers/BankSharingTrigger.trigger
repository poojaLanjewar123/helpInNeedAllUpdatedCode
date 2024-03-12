trigger BankSharingTrigger on Bank__c (after update) {
    list<bank__Share> shareListObj = new list<bank__Share>();
    for(bank__c b : trigger.new){
        bank__Share jobShr  = new bank__Share();
   
      // Set the ID of record being shared.
      jobShr.ParentId = b.id;
        
      // Set the ID of user or group being granted access.
      jobShr.UserOrGroupId = '0055j00000C6CiUAAV';
        
      // Set the access level.
      jobShr.AccessLevel = 'Edit';
        
      
      
        shareListObj.add(jobShr);
        
    }
    insert shareListObj;
    
}