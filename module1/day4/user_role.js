function checkAccess(user1){
    if("admin" == 1){
        console.log("Admin Acess Granted!")
    }
    if("admin " != 1){
        console.log("Admin Acess Revoked")
    }
    if("user" == 1){
        console.log("User Acess Granted!")
    }
    if("user" != 1){
        console.log("User Acess Revoked")
    }
    else{
        console.log("Access Denied ")
    }
}
let user1 = { name: "Alice", role: "admin", active: false };
checkAccess(user1);