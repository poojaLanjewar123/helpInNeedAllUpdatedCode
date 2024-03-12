trigger CaseTrigger on Case (before insert, before update) {
    if((trigger.isInsert || trigger.isUpdate) && trigger.isBefore){
        for(Case caseRec : trigger.new){
            if(caseRec.Origin == 'Phone'){
                caseRec.Priority = 'high';
            }else{
                caseRec.Priority = 'Low';
            }
        }
    }
}