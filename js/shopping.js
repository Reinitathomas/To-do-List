showtask();
let addtaskinput_s = document.getElementById("addtaskinput_s");
let addtaskbtn_s = document.getElementById("addtaskbtn_s");

addtaskbtn_s.addEventListener("click", function(){
    addtaskinputval_s = addtaskinput_s.value;
    if(addtaskinputval_s.trim()!=0){
        let webtask_s = localStorage.getItem("localtask_s");
        if(webtask_s == null){
            taskObj_s = [];
        }
        else{
            taskObj_s = JSON.parse(webtask_s);
        }
        taskObj_s.push({'task_name_s':addtaskinputval_s, 'completeStatus':false});
		// console.log(taskObj, 'Ashendra');
        localStorage.setItem("localtask_s", JSON.stringify(taskObj_s));
        addtaskinput_s.value = '';
    }
    showtask();
})

// showtask
function showtask(){
    let webtask_s = localStorage.getItem("localtask_s");
    if(webtask_s == null){
        taskObj_s = [];
    }
    else{
        taskObj_s = JSON.parse(webtask_s);
    }
    let html = '';
    let addedtasklist_s = document.getElementById("addedtasklist_s");
    taskObj_s.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue_s = `<td class="completed">${item.task_name_s}</td>`;
        }else{
            taskCompleteValue_s = `<td>${item.task_name_s}</td>`;
        }
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    ${taskCompleteValue_s}
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
    });
    addedtasklist_s.innerHTML = html;
}

// edittask
function edittask(index){
    let saveindex_s = document.getElementById("saveindex_s");
    let addtaskbtn_s = document.getElementById("addtaskbtn_s");
    let savetaskbtn_s = document.getElementById("savetaskbtn_s");
    saveindex_s.value = index;
    let webtask_s = localStorage.getItem("localtask_s");
    let taskObj_s = JSON.parse(webtask_s); 
    
    addtaskinput_s.value = taskObj_s[index]['task_name_s'];
    addtaskbtn_s.style.display="none";
    savetaskbtn_s.style.display="block";
}

// savetask
let savetaskbtn_s = document.getElementById("savetaskbtn_s");
savetaskbtn_s.addEventListener("click", function(){
    let addtaskbtn_s = document.getElementById("addtaskbtn_s");
    let webtask_s = localStorage.getItem("localtask_s");
    let taskObj_s = JSON.parse(webtask_s); 
    let saveindex_s = document.getElementById("saveindex_s").value;
    
    for (keys in taskObj_s[saveindex_s]) {
        if(keys == 'task_name_s'){
            taskObj_s[saveindex_s].task_name_s = addtaskinput_s.value;
        }
      }
    // taskObj[saveindex] = {'task_name':addtaskinput.value, 'completeStatus':false} ;
  //  taskObj[saveindex][task_name] = addtaskinput.value;
    savetaskbtn_s.style.display="none";
    addtaskbtn_s.style.display="block";
    localStorage.setItem("localtask_s", JSON.stringify(taskObj_s));
    addtaskinput_s.value='';
    showtask();
})
// deleteitem
function deleteitem(index){
    let webtask_s = localStorage.getItem("localtask_s");
    let taskObj_s = JSON.parse(webtask_s);
    taskObj_s.splice(index, 1);
    localStorage.setItem("localtask_s", JSON.stringify(taskObj_s));
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
let addedtasklist_s = document.getElementById("addedtasklist_s");
    addedtasklist_s.addEventListener("click", function(e){
       // console.log(e);
        
        // showtask();
        let webtask_s = localStorage.getItem("localtask_s");
        let taskObj_s = JSON.parse(webtask_s);
        
        let mytarget_s = e.target;
        if(mytarget_s.classList[0] === 'text-success'){
        let mytargetid_s = mytarget_s.getAttribute("id");
        
        
        // let taskValue = taskObj[mytargetid]['task_name'];
        
        mytargetpresibling_s = mytarget_s.parentElement.previousElementSibling.previousElementSibling;
            
            // let mynewelem = mytargetpresibling.classList.toggle("completed");
            // taskObj.splice(mytargetid,1,mynewelem);
            for (keys in taskObj_s[mytargetid_s]) {
                if(keys == 'completeStatus' && taskObj_s[mytargetid_s][keys]==true){
                    taskObj_s[mytargetid_s].completeStatus = false;
                   // taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':false};
                }else if(keys == 'completeStatus' && taskObj_s[mytargetid_s][keys]==false){
                    taskObj_s[mytargetid_s].completeStatus = true;
                    //taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':true};
                }
              }
        //}
       // showtask();        
        localStorage.setItem("localtask_s", JSON.stringify(taskObj_s));
        showtask();
    }
    })

    



// deleteall
let deleteallbtn_s = document.getElementById("deleteallbtn_s");
deleteallbtn_s.addEventListener("click", function(){
    let savetaskbtn_s = document.getElementById("savetaskbtn_s");
    let addtaskbtn_s = document.getElementById("addtaskbtn_s");
    let webtask_s = localStorage.getItem("localtask_s");
    let taskObj_s = JSON.parse(webtask_s);
    if(webtask_s == null){
        taskObj_s = [];
    }
    else{
        taskObj_s = JSON.parse(webtask_s);
        taskObj_s = [];
    }
    savetaskbtn_s.style.display="none";
    addtaskbtn_s.style.display="block";
    localStorage.setItem("localtask_s", JSON.stringify(taskObj_s));
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














