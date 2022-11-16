class Permissions {
   constructor() {
       this.create = false
       this.read = true
       this.update = false
       this.remove = false
   }
}

class User extends Permissions {
   constructor(create, read, update, remove, name){
      super(create, read, update, remove)
      this.name = name
   }
}