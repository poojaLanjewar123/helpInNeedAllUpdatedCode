trigger conUdatetrigger on Contact (before update) {
    system.debug('list '+trigger.new);
    system.debug('map '+trigger.newMap);
    system.debug('old map '+trigger.oldMap);
}