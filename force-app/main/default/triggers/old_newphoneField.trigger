trigger old_newphoneField on Account (After update) {
    for(Account acc : trigger.new){
        system.debug(trigger.newMap.get(acc.id).phone);
        System.debug(trigger.oldMap.get(acc.id).phone);
    }      
    
}