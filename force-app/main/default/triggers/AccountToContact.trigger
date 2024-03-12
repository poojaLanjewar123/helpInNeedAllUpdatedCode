trigger AccountToContact on Account (After insert, After Update) {
    if(trigger.isAfter && (trigger.isInsert || trigger.isUpdate)){
        handlerAccountToContact.contactCreate(trigger.new); // Account type is Prospect contact created.
        
        handalerAccToOpportunity.accMethode(trigger.new); // AnnualRevenue is gretar than 50000; Industry == Energy, Opportunity created.
    }
    

}