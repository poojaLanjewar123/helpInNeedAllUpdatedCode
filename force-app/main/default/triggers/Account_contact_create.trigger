trigger Account_contact_create on Account (After insert) {
    list<contact> conList = new list<contact>();
    for(Account acc : trigger.new){
        contact con = new contact();
        con.LastName = acc.name;
        con.AccountId = acc.id;
        conList.add(con);
    }
    insert conList;
}