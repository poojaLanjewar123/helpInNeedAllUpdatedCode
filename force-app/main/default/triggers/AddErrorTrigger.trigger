trigger AddErrorTrigger on Account (before update) {

    for(account acc: trigger.new){
        if(acc.industry == 'Finance'){
            acc.addError('cannot update');
        }
    }
}