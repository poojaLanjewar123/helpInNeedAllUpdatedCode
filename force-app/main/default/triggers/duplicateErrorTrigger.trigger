trigger duplicateErrorTrigger on Account (before insert) {
    map<string,string> map1 = new map<string,string>();
     set<string> strSet = new set<string>();
    for(Account acc : trigger.new){
       strSet.add(acc.name); 
    }
    list<Account> acclist = [select id, name from Account where name=:strSet];
    for(Account ac : acclist){
        map1.put(ac.name,ac.name);
    }
    
    
        for(Account a : trigger.new){
            if(map1.containsKey(a.Name)){
                a.addError('duplicate name');
            }
            
        }
    
}
//duplicate Account name record.