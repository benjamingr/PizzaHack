
function LocalStorageStack(lsKey){
    this.lsKey = lsKey || "commandHistory";
    this.commands = this.get();
}

LocalStorageStack.prototype.get = function(){
    var commands = localStorage.getItem(this.lsKey);
    return JSON.parse(commands || "[]");
}
LocalStorageStack.prototype.push = function(cmd){
    this.commands.push(cmd);
    localStorage.setItem(this.lsKey, JSON.stringify(this.commands));
}
LocalStorageStack.prototype.reset = function() {
    this.commands = [];
    localStorage.setItem(this.lsKey, "[]");
}

function Database() {
    this.stack = new LocalStorageStack("commandHistory");
    this.db = new SQL.Database();
}

Database.prototype.run = function(cmd){
    this.stack.push(cmd);
    return this.db.run.apply(this.db, arguments);
}
Database.prototype.exec = function(cmd){
    this.stack.push(cmd);
    return this.db.exec.apply(this.db, arguments)[0];
}

Database.prototype.restore = function() {
    this.stack.get().forEach(function(cmd){ 
        this.db.run(cmd); 
    }, this);
};

Database.prototype.clearHistory = function() {
    this.stack.reset();
};
Database.prototype.bootstrap = function() {
    this.db.run("CREATE TABLE Users123 (uname text, passw text);");
    this.db.run("CREATE TABLE permissions (uname text, permission int);");
    this.db.run("CREATE TABLE piizas (name text, description text, price int);")
    this.db.run("INSERT INTO piizas VALUES ('Hawaii', 'With pinaple, not kosher', 30);");
    this.db.run("INSERT INTO piizas VALUES ('Napolitna', 'Just a pizza', 25);");
    this.db.run("INSERT INTO Users123 VALUES ('LiorMeir', 'DontLoginFromME'); ");
    this.db.run("INSERT INTO permissions VALUES ('LiorMeir', 0)"
    );
};