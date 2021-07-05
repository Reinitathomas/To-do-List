showtask();
let addtaskinput_m = document.getElementById("addtaskinput_m");
let addtaskbtn_m = document.getElementById("addtaskbtn_m");

addtaskbtn_m.addEventListener("click", function(){
    addtaskinputval_m = addtaskinput_m.value;
    if(addtaskinputval_m.trim()!=0){
        let webtask_m = localStorage.getItem("localtask_m");
        if(webtask_m == null){
            taskObj_m = [];
        }
        else{
            taskObj_m = JSON.parse(webtask_m);
        }
        taskObj_m.push({'task_name_m':addtaskinputval_m, 'completeStatus':false});
		// console.log(taskObj, 'Ashendra');
        localStorage.setItem("localtask_m", JSON.stringify(taskObj_m));
        addtaskinput_m.value = '';
    }
    showtask();
})

// showtask
function showtask(){
    let webtask_m = localStorage.getItem("localtask_m");
    if(webtask_m == null){
        taskObj_m = [];
    }
    else{
        taskObj_m = JSON.parse(webtask_m);
    }
    let html = '';
    let addedtasklist_m = document.getElementById("addedtasklist_m");
    taskObj_m.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue_m = `<td class="completed">${item.task_name_m}</td>`;
        }else{
            taskCompleteValue_m = `<td>${item.task_name_m}</td>`;
        }
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    ${taskCompleteValue_m}
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
    });
    addedtasklist_m.innerHTML = html;
}

// edittask
function edittask(index){
    let saveindex_m = document.getElementById("saveindex_m");
    let addtaskbtn_m = document.getElementById("addtaskbtn_m");
    let savetaskbtn_m = document.getElementById("savetaskbtn_m");
    saveindex_m.value = index;
    let webtask_m = localStorage.getItem("localtask_m");
    let taskObj_m = JSON.parse(webtask_m); 
    
    addtaskinput_m.value = taskObj_m[index]['task_name_m'];
    addtaskbtn_m.style.display="none";
    savetaskbtn_m.style.display="block";
}

// savetask
let savetaskbtn_m = document.getElementById("savetaskbtn_m");
savetaskbtn_m.addEventListener("click", function(){
    let addtaskbtn_m = document.getElementById("addtaskbtn_m");
    let webtask_m = localStorage.getItem("localtask_m");
    let taskObj_m = JSON.parse(webtask_m); 
    let saveindex_m = document.getElementById("saveindex_m").value;
    
    for (keys in taskObj_m[saveindex_m]) {
        if(keys == 'task_name_m'){
            taskObj_m[saveindex_m].task_name_m = addtaskinput_m.value;
        }
      }
    // taskObj[saveindex] = {'task_name':addtaskinput.value, 'completeStatus':false} ;
  //  taskObj[saveindex][task_name] = addtaskinput.value;
    savetaskbtn_m.style.display="none";
    addtaskbtn_m.style.display="block";
    localStorage.setItem("localtask_m", JSON.stringify(taskObj_m));
    addtaskinput_m.value='';
    showtask();
})
// deleteitem
function deleteitem(index){
    let webtask_m = localStorage.getItem("localtask_m");
    let taskObj_m = JSON.parse(webtask_m);
    taskObj_m.splice(index, 1);
    localStorage.setItem("localtask_m", JSON.stringify(taskObj_m));
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
let addedtasklist_m = document.getElementById("addedtasklist_m");
    addedtasklist_m.addEventListener("click", function(e){
       // console.log(e);
        
        // showtask();
        let webtask_m = localStorage.getItem("localtask_m");
        let taskObj_m = JSON.parse(webtask_m);
        
        let mytarget_m = e.target;
        if(mytarget_m.classList[0] === 'text-success'){
        let mytargetid_m = mytarget_m.getAttribute("id");
        
        
        // let taskValue = taskObj[mytargetid]['task_name'];
        
        mytargetpresibling_m = mytarget_m.parentElement.previousElementSibling.previousElementSibling;
            
            // let mynewelem = mytargetpresibling.classList.toggle("completed");
            // taskObj.splice(mytargetid,1,mynewelem);
            for (keys in taskObj_m[mytargetid_m]) {
                if(keys == 'completeStatus' && taskObj_m[mytargetid_m][keys]==true){
                    taskObj_m[mytargetid_m].completeStatus = false;
                   // taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':false};
                }else if(keys == 'completeStatus' && taskObj_m[mytargetid_m][keys]==false){
                    taskObj_m[mytargetid_m].completeStatus = true;
                    //taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':true};
                }
              }
        //}
       // showtask();        
        localStorage.setItem("localtask_m", JSON.stringify(taskObj_m));
        showtask();
    }
    })

    



// deleteall
let deleteallbtn_m = document.getElementById("deleteallbtn_m");
deleteallbtn_m.addEventListener("click", function(){
    let savetaskbtn_m = document.getElementById("savetaskbtn_m");
    let addtaskbtn_m = document.getElementById("addtaskbtn_m");
    let webtask_m = localStorage.getItem("localtask_m");
    let taskObj_m = JSON.parse(webtask_m);
    if(webtask_m == null){
        taskObj_m = [];
    }
    else{
        taskObj_m = JSON.parse(webtask_m);
        taskObj_m = [];
    }
    savetaskbtn_m.style.display="none";
    addtaskbtn_m.style.display="block";
    localStorage.setItem("localtask_m", JSON.stringify(taskObj_m));
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














