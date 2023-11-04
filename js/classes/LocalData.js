class LocalData {
    constructor(username, endtime){
        this.username = username,
        this.time = endtime
    }
    localSet() {
        window.localStorage.setItem(this.username, JSON.stringify(this.time));
    }
    localRemove() {
        window.localStorage.removeItem(this.username);
    }
    localGet() {
        window.localStorage.getItem(this.username);
    }
}