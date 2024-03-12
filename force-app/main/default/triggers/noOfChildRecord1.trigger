trigger noOfChildRecord1 on Contact (After insert, after delete) {

    if(trigger.isAfter && Trigger.isInsert){
        set<id> accId = new set<id>();
        for(contact con : trigger.new){
            accId.add(con.AccountId);
        }
        list<Account> accList = [select id, name ,No_of_contact__c,(select id, name from Contacts) from Account];
        for(Account acc : accList){
            acc.No_of_contact__c = acc.Contacts.size();
        }
        
	update accList;
   }    
    if(trigger.isAfter && Trigger.isDelete){
        
        set<id> accId = new set<id>();
        for(contact con : trigger.old){
            accId.add(con.AccountId);
        }
        list<Account> accList = [select id, name ,No_of_contact__c,(select id, name from Contacts) from Account];
        for(Account acc : accList){
            acc.No_of_contact__c = acc.Contacts.size();
        }
        
	update accList;
    }
}