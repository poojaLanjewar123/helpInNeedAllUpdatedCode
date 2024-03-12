trigger Account_releted_contact on Account (before update) {
    
    set<id> sid=new set<id>();
    for(Account acc:trigger.new){
        sid.add(acc.id);
    }
    List<Contact> conList=[Select Id from Contact where AccountId=:sid];
    for(Account acc1 : trigger.new){
    	if(conList.size()==0){
        	Contact cn=new Contact();
            cn.LastName = acc1.name ;
            conList.add(cn);
        }else{
            acc1.addError('account not created');
        }
        
    }
    
    insert conList;   
        
}