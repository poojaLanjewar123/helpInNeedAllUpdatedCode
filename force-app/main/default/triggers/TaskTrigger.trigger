trigger TaskTrigger on Task (before insert) {
    if(trigger.isBefore && trigger.isInsert){
        for(task taskNewcreated :trigger.new){
            taskNewcreated.Priority = 'High';
        }
    }
}