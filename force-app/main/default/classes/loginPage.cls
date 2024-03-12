global with sharing class loginPage {
    @AuraEnabled
    global static string login(string userName, string password){
       String communityUrl = 'https://sbjaininstituteoftechnol-6c-dev-ed.develop.my.site.com/hin/s/';
        ApexPages.pageReference pageRef = Site.login(userName, password, communityUrl);
        return pageRef.getUrl();
    }
}