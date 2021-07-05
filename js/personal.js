showtask();
let addtaskinput_p = document.getElementById("addtaskinput_p");
let addtaskbtn_p = document.getElementById("addtaskbtn_p");

addtaskbtn_p.addEventListener("click", function(){
    addtaskinputval_p = addtaskinput_p.value;
    if(addtaskinputval_p.trim()!=0){
    let webtask_p = localStorage.getItem("localtask_p");
        if(webtask_p == null){
            taskObj_p = [];
        }
        else{
            taskObj_p = JSON.parse(webtask_p);
        }
        taskObj_p.push({'task_name_p':addtaskinputval_p, 'completeStatus':false});
		// console.log(taskObj, 'Ashendra');
        localStorage.setItem("localtask_p", JSON.stringify(taskObj_p));
        addtaskinput_p.value = '';
    }
    showtask();
})

// showtask
function showtask(){
    let webtask_p = localStorage.getItem("localtask_p");
    if(webtask_p == null){
        taskObj_p = [];
    }
    else{
        taskObj_p = JSON.parse(webtask_p);
    }
    let html = '';
    let addedtasklist_p = document.getElementById("addedtasklist_p");
    taskObj_p.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue_p = `<td class="completed">${item.task_name_p}</td>`;
        }else{
            taskCompleteValue_p = `<td>${item.task_name_p}</td>`;
        }
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    ${taskCompleteValue_p}
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
    });
    addedtasklist_p.innerHTML = html;
}

// edittask
function edittask(index){
    let saveindex_p = document.getElementById("saveindex_p");
    let addtaskbtn_p = document.getElementById("addtaskbtn_p");
    let savetaskbtn_p = document.getElementById("savetaskbtn_p");
    saveindex_p.value = index;
    let webtask_p = localStorage.getItem("localtask_p");
    let taskObj_p = JSON.parse(webtask_p); 
    
    addtaskinput_p.value = taskObj_p[index]['task_name_p'];
    addtaskbtn_p.style.display="none";
    savetaskbtn_p.style.display="block";
}

// savetask
let savetaskbtn_p = document.getElementById("savetaskbtn_p");
savetaskbtn_p.addEventListener("click", function(){
    let addtaskbtn_p = document.getElementById("addtaskbtn_p");
    let webtask_p = localStorage.getItem("localtask_p");
    let taskObj_p = JSON.parse(webtask_p); 
    let saveindex_p = document.getElementById("saveindex_p").value;
    
    for (keys in taskObj_p[saveindex_p]) {
        if(keys == 'task_name_p'){
            taskObj_p[saveindex_p].task_name_p = addtaskinput_p.value;
        }
      }
    // taskObj[saveindex] = {'task_name':addtaskinput.value, 'completeStatus':false} ;
  //  taskObj[saveindex][task_name] = addtaskinput.value;
    savetaskbtn_p.style.display="none";
    addtaskbtn_p.style.display="block";
    localStorage.setItem("localtask_p", JSON.stringify(taskObj_p));
    addtaskinput_p.value='';
    showtask();
})
// deleteitem
function deleteitem(index){
    let webtask_p = localStorage.getItem("localtask_p");
    let taskObj_p = JSON.parse(webtask_p);
    taskObj_p.splice(index, 1);
    localStorage.setItem("localtask_p", JSON.stringify(taskObj_p));
    showtask();
}

//complete task
/* function completetask(index){
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj[index] = '<span style="text-decoration:line-through">' + taskObj[index] + '</span>';
    let addedtasklist = document.getElementById("addedtasklist");
    addedtasklist.addEventListener("click", function(e){
        console.log(addedtasklist)
    })
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
} */

// complete task
let addedtasklist_p = document.getElementById("addedtasklist_p");
    addedtasklist_p.addEventListener("click", function(e){
       // console.log(e);
        
        // showtask();
        let webtask_p = localStorage.getItem("localtask_p");
        let taskObj_p = JSON.parse(webtask_p);
        
        let mytarget_p = e.target;
        if(mytarget_p.classList[0] === 'text-success'){
        let mytargetid_p = mytarget_p.getAttribute("id");
        
        
        // let taskValue = taskObj[mytargetid]['task_name'];
        
        mytargetpresibling_p = mytarget_p.parentElement.previousElementSibling.previousElementSibling;
            
            // let mynewelem = mytargetpresibling.classList.toggle("completed");
            // taskObj.splice(mytargetid,1,mynewelem);
            for (keys in taskObj_p[mytargetid_p]) {
                if(keys == 'completeStatus' && taskObj_p[mytargetid_p][keys]==true){
                    taskObj_p[mytargetid_p].completeStatus = false;
                   // taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':false};
                }else if(keys == 'completeStatus' && taskObj_p[mytargetid_p][keys]==false){
                    taskObj_p[mytargetid_p].completeStatus = true;
                    //taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':true};
                }
              }
        //}
       // showtask();        
        localStorage.setItem("localtask_p", JSON.stringify(taskObj_p));
        showtask();
    }
    })

    



// deleteall
let deleteallbtn_p = document.getElementById("deleteallbtn_p");
deleteallbtn_p.addEventListener("click", function(){
    let savetaskbtn_p = document.getElementById("savetaskbtn_p");
    let addtaskbtn_p = document.getElementById("addtaskbtn_p");
    let webtask_p = localStorage.getItem("localtask_p");
    let taskObj_p = JSON.parse(webtask_p);
    if(webtask_p == null){
        taskObj_p = [];
    }
    else{
        taskObj_p = JSON.parse(webtask_p);
        taskObj_p = [];
    }
    savetaskbtn_p.style.display="none";
    addtaskbtn_p.style.display="block";
    localStorage.setItem("localtask_p", JSON.stringify(taskObj_p));
    showtask();

})


// serachlist
let searchtextbox = document.getElementById("searchtextbox");
searchtextbox.addEventListener("input", function(){
    let trlist = document.querySelectorAll("tr");
    Array.from(trlist).forEach(function(item){
        let searchedtext = item.getElementsByTagName("td")[0].innerText;
        let searchtextboxval = searchtextbox.value;
        let re = new RegExp(searchtextboxval, 'gi');
        if(searchedtext.match(re)){
            item.style.display="table-row";
        }
        else{
            item.style.display="none";
        }
    })
})














