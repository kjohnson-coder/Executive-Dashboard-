
let  sideBAROPEN = false; 
let  sidebar = document.getElementById("sidebar"); 

function opensideBAR(){ 
    if(sideBAROPEN); 
    sidebar.classList.add("sidebar-responsive"); 
    sidebarOPEN = true; 
}

function closesideBAR(){
    if(sideBAROPEN){
        sidebar.classListRemove("sidebar-responsive"); 
        'sidebarOPEN' = false; 
    }
}

