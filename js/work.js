showtask();
let addtaskinput_w = document.getElementById("addtaskinput_w");
let addtaskbtn_w = document.getElementById("addtaskbtn_w");

addtaskbtn_w.addEventListener("click", function(){
    addtaskinputval_w = addtaskinput_w.value;
    if(addtaskinputval_w.trim()!=0){
        let webtask_w = localStorage.getItem("localtask_w");
        if(webtask_w == null){
            taskObj_w = [];
        }
        else{
            taskObj_w = JSON.parse(webtask_w);
        }
        taskObj_w.push({'task_name_w':addtaskinputval_w, 'completeStatus':false});
		// console.log(taskObj, 'Ashendra');
        localStorage.setItem("localtask_w", JSON.stringify(taskObj_w));
        addtaskinput_w.value = '';
    }
    showtask();
})

// showtask
function showtask(){
    let webtask_w = localStorage.getItem("localtask_w");
    if(webtask_w == null){
        taskObj_w = [];
    }
    else{
        taskObj_w = JSON.parse(webtask_w);
    }
    let html = '';
    let addedtasklist_w = document.getElementById("addedtasklist_w");
    taskObj_w.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue_w = `<td class="completed">${item.task_name_w}</td>`;
        }else{
            taskCompleteValue_w = `<td>${item.task_name_w}</td>`;
        }
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    ${taskCompleteValue_w}
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
    });
    addedtasklist_w.innerHTML = html;
}

// edittask
function edittask(index){
    let saveindex_w = document.getElementById("saveindex_w");
    let addtaskbtn_w = document.getElementById("addtaskbtn_w");
    let savetaskbtn_w = document.getElementById("savetaskbtn_w");
    saveindex_w.value = index;
    let webtask_w = localStorage.getItem("localtask_w");
    let taskObj_w = JSON.parse(webtask_w); 
    
    addtaskinput_w.value = taskObj_w[index]['task_name_w'];
    addtaskbtn_w.style.display="none";
    savetaskbtn_w.style.display="block";
}

// savetask
let savetaskbtn_w = document.getElementById("savetaskbtn_w");
savetaskbtn_w.addEventListener("click", function(){
    let addtaskbtn_w = document.getElementById("addtaskbtn_w");
    let webtask_w = localStorage.getItem("localtask_w");
    let taskObj_w = JSON.parse(webtask_w); 
    let saveindex_w = document.getElementById("saveindex_w").value;
    
    for (keys in taskObj_m[saveindex_w]) {
        if(keys == 'task_name_w'){
            taskObj_w[saveindex_w].task_name_w = addtaskinput_w.value;
        }
      }
    // taskObj[saveindex] = {'task_name':addtaskinput.value, 'completeStatus':false} ;
  //  taskObj[saveindex][task_name] = addtaskinput.value;
    savetaskbtn_w.style.display="none";
    addtaskbtn_w.style.display="block";
    localStorage.setItem("localtask_w", JSON.stringify(taskObj_w));
    addtaskinput_w.value='';
    showtask();
})
// deleteitem
function deleteitem(index){
    let webtask_w = localStorage.getItem("localtask_w");
    let taskObj_w = JSON.parse(webtask_w);
    taskObj_w.splice(index, 1);
    localStorage.setItem("localtask_w", JSON.stringify(taskObj_w));
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
let addedtasklist_w = document.getElementById("addedtasklist_w");
    addedtasklist_w.addEventListener("click", function(e){
       // console.log(e);
        
        // showtask();
        let webtask_w = localStorage.getItem("localtask_w");
        let taskObj_w = JSON.parse(webtask_w);
        
        let mytarget_w = e.target;
        if(mytarget_w.classList[0] === 'text-success'){
        let mytargetid_w = mytarget_w.getAttribute("id");
        
        
        // let taskValue = taskObj[mytargetid]['task_name'];
        
        mytargetpresibling_w = mytarget_w.parentElement.previousElementSibling.previousElementSibling;
            
            // let mynewelem = mytargetpresibling.classList.toggle("completed");
            // taskObj.splice(mytargetid,1,mynewelem);
            for (keys in taskObj_w[mytargetid_w]) {
                if(keys == 'completeStatus' && taskObj_w[mytargetid_w][keys]==true){
                    taskObj_w[mytargetid_w].completeStatus = false;
                   // taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':false};
                }else if(keys == 'completeStatus' && taskObj_w[mytargetid_w][keys]==false){
                    taskObj_w[mytargetid_w].completeStatus = true;
                    //taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':true};
                }
              }
        //}
       // showtask();        
        localStorage.setItem("localtask_w", JSON.stringify(taskObj_w));
        showtask();
    }
    })

    



// deleteall
let deleteallbtn_w = document.getElementById("deleteallbtn_w");
deleteallbtn_w.addEventListener("click", function(){
    let savetaskbtn_w = document.getElementById("savetaskbtn_w");
    let addtaskbtn_w = document.getElementById("addtaskbtn_w");
    let webtask_w = localStorage.getItem("localtask_w");
    let taskObj_w = JSON.parse(webtask_w);
    if(webtask_w == null){
        taskObj_w = [];
    }
    else{
        taskObj_w = JSON.parse(webtask_w);
        taskObj_w = [];
    }
    savetaskbtn_w.style.display="none";
    addtaskbtn_w.style.display="block";
    localStorage.setItem("localtask_w", JSON.stringify(taskObj_w));
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














