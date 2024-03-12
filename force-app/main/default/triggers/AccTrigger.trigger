trigger AccTrigger on Account (before update) {

    //system.debug('inside before update trigger '+trigger.new);
    list<Account> acclist = trigger.new;
    system.debug(acclist);
    for(Account a:acclist){
        a.Phone ='123';
        a.Industry = 'Banking';
        a.Rating = 'cold';
    }
}