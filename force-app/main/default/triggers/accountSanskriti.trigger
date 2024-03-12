trigger accountSanskriti on Account (before insert) {

    list<Account> accList = new list<Account>();
    for(Account acc:trigger.new){
        if(acc.name == 'sanskriti'){
            acc.phone = '1234';
          }
        accList.add(acc);
    }
    system.debug(accList);
}