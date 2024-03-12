trigger OppTrigger on Opportunity (after update) {
   
    if(trigger.isUpdate && trigger.isAfter){
          
        helperOpportunityTrigger.opportunityAfterUpdate(Trigger.new);
    }
       
}