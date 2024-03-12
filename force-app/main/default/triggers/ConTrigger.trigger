trigger ConTrigger on Contact (before update) {

   list<contact> conlist = trigger.new;
}