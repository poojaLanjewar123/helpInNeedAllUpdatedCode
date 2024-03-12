trigger TaskTriggerNinja on Task (before insert) {
//whenever a task is created, set Priority to high
    if(Trigger.isInsert && Trigger.isBefore){
        for(Task taskRecord : Trigger.new){
            taskRecord.Priority = 'High';
        }
    }
}