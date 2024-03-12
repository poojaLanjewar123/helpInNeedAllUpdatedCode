trigger Account_contact_phone on Account (before update) {
    
    list<contact> conList = [select id,LastName,phone,AccountId from contact where AccountId =: trigger.newMap.keySet()];
    system.debug(conList);
    
        for(contact con : conList){
            con.phone =  trigger.newMap.get(con.AccountId).phone;
        }
    update conList;
}