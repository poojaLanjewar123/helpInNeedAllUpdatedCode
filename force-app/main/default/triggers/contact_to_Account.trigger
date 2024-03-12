trigger contact_to_Account on Contact (before update) {
    map<id,Account> mapAcc = new map<id,Account>();
    set<id> sid = new set<id>();
    for(contact con : trigger.new){
		     sid.add(con.AccountId);
        
    }
    
    system.debug(sid);
    List<Account> acclist = [select id, Name, phone from Account where Id =: sid];
    for(account acc:acclist){
        mapAcc.put(acc.id,acc);
    }
        
    system.debug(acclist);
    for(contact con1:trigger.new){
        system.debug('inside for loop '+mapAcc.get(con1.AccountId));
       mapAcc.get(con1.AccountId).phone = con1.phone;
        
    }
    
    update mapAcc.values();
}