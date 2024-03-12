trigger relateConInsert on Account (before update) {
    list<Account> accUpdate = new list<account>();
    set<id> AccId = new set<id>();
    for(account acc : trigger.new){
        AccId.add(acc.id);
    }
    list<contact> conList = [select id, LastName, AccountId from contact where AccountId =: AccId];
    for(contact con : conList){
        if(con.id == null){
            con.lastName = 'Task111';
            conList.add(con);
        }else{
            con.lastName = 'Task111';
        }
        
    }
    insert conList;
}