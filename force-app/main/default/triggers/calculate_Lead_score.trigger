trigger calculate_Lead_score on Lead (before insert) {
    if(trigger.isBefore && trigger.isInsert){
        leadTriggerHandlar.leadTriggerMethod(trigger.new);
    }    
}