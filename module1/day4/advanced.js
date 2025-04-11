function person({role, experience, active, department, grant}) {
    if(role == "admin" ){
        if(experience >= 5 && department === "IT" && active){
          console.log("Full IT Admin Acess")
        }else if(experience >= 5 && active){
            console.log("Full General Admin Access")
        }
        else if(experience <= 5 && active){
            console.log("Limited Admin Access")
        }
        else{
            console.log("Admin Access Revoked")
        }
    }
        else if(role === "manager"){
        if(experience >= 3 && department === "Sales" && active){
            console.log("Full Sales Manager Access")
        }
        else if(experience >= 3 && active){
            console.log("Full Manager Access")
        }
        else if(experience < 3 && active){
            console.log("Limited Manager Access")
        }
        else{
            console.log("Manager Access Revoked")
        }
   }
        else if(role === "user"){
        
        if(grant== 1){
            console.log("Priority Support Access")
        }
        else if(active){
            console.log("Support")
        }
       else{
            console.log("User Access Revoked")
        }

    }
}
 person({ role: "admin", experience: 7, active: true, department: "IT" });
 person({ role: "manager", experience: 4, active: true, department: "Marketing" });
 person({ role: "user", experience: 2, active: true, department: "Support", grant: 1 });
person({ role: "admin", experience: 3, active: false, department: "Finance" });


