class Tags{
   static get(key){
        return document.querySelector(key)
    }
    static getAll(key){
        return document.querySelectorAll(key)
    }
    
}