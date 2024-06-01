class Hashtable{
    constructor(size) {
       this.table = new Array();
       this.size = size;
      
    }

    hashKey(key){
      let total = 0;
      for(let i=0; i<key.length; i++){
        total += key.charCodeAt(i)
      }
      return total % this.size;
    }

    set(key, value){
       const index = this.hashKey(key);
      // this.table[index] = value;
      const bucket = this.table[index];
      if(!bucket){
        bucket = [[key, value]]
      }else{
        const sameKeyItem = bucket.find(item=>item[0]===key);
        if(sameKeyItem){
          sameKeyItem[1] = value;
        }else{
           bucket.push([key, value])
        }
      }
    }

    get(key){
      const index = this.hashKey(key);
      return this.table[index]
    }

    remove(key){
      const index = this.hashKey(key);
      this.table[index] = undefined;
    }

    display(){
      for(let i=0; i<this.table.length; i++){
          if(this.table[i]){
            console.log(i+ " " + this.table[i]);
          }
      }
    }
}

const table = new Hashtable(50);

table.set("Name","Arjun");
table.set("age",23);
table.set("place","Vaikom");
table.remove("Name")
console.log("This is name: ",table.get("Name"));
table.display()