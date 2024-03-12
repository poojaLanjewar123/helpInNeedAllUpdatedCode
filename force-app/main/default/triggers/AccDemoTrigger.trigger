trigger AccDemoTrigger on Account (After insert) {
    system.debug(trigger.new);
   system.debug([select id,name from Account where id =: trigger.new]);
    
    
    
    list<Account> Acclist = trigger.new;
    for(Account acc : [select id,name, phone, rating, industry from Account where id =: trigger.new] ){
        acc.phone = ' 987';
        acc.Industry = 'engineering';
        acc.Rating = 'hot';
    }

}