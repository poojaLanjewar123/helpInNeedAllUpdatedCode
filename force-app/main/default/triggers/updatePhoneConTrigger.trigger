trigger updatePhoneConTrigger on Account (before update) {
list<Account> accUpdate = new list<Account>();
    set<id> AccId = new set<id>();
    for(account Acc :trigger.new ){
        AccId.add(Acc.id);
    }
    List<contact> conList = [select id, LastName,phone from Contact where AccountId =: AccId];
    system.debug(conList);
    for(contact con : conList){
        con.phone = '123';
    }
    update conList;
}