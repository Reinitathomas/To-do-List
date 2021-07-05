showtask();
let addtaskinput_c = document.getElementById("addtaskinput_c");
let addtaskbtn_c = document.getElementById("addtaskbtn_c");

addtaskbtn_c.addEventListener("click", function(){
    addtaskinputval_c = addtaskinput_c.value;
    if(addtaskinputval_c.trim()!=0){
        let webtask_c = localStorage.getItem("localtask_c");
        if(webtask_c == null){
            taskObj_c = [];
        }
        else{
            taskObj_c = JSON.parse(webtask_c);
        }
        taskObj_c.push({'task_name_c':addtaskinputval_c, 'completeStatus':false});
		// console.log(taskObj, 'Ashendra');
        localStorage.setItem("localtask_c", JSON.stringify(taskObj_c));
        addtaskinput_c.value = '';
    }
    showtask();
})

// showtask
function showtask(){
    let webtask_c = localStorage.getItem("localtask_c");
    if(webtask_c == null){
        taskObj_c = [];
    }
    else{
        taskObj_c = JSON.parse(webtask_c);
    }
    let html = '';
    let addedtasklist_c = document.getElementById("addedtasklist_c");
    taskObj_c.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue_c = `<td class="completed">${item.task_name_c}</td>`;
        }else{
            taskCompleteValue_c = `<td>${item.task_name_c}</td>`;
        }
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    ${taskCompleteValue_c}
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
    });
    addedtasklist_c.innerHTML = html;
}

// edittask
function edittask(index){
    let saveindex_c = document.getElementById("saveindex_c");
    let addtaskbtn_c = document.getElementById("addtaskbtn_c");
    let savetaskbtn_c = document.getElementById("savetaskbtn_c");
    saveindex_c.value = index;
    let webtask_c = localStorage.getItem("localtask_c");
    let taskObj_c = JSON.parse(webtask_c); 
    
    addtaskinput_c.value = taskObj_c[index]['task_name_m'];
    addtaskbtn_c.style.display="none";
    savetaskbtn_c.style.display="block";
}

// savetask
let savetaskbtn_c = document.getElementById("savetaskbtn_c");
savetaskbtn_c.addEventListener("click", function(){
    let addtaskbtn_c = document.getElementById("addtaskbtn_c");
    let webtask_c = localStorage.getItem("localtask_c");
    let taskObj_c = JSON.parse(webtask_c); 
    let saveindex_c = document.getElementById("saveindex_c").value;
    
    for (keys in taskObj_c[saveindex_c]) {
        if(keys == 'task_name_c'){
            taskObj_c[saveindex_c].task_name_c = addtaskinput_c.value;
        }
      }
    // taskObj[saveindex] = {'task_name':addtaskinput.value, 'completeStatus':false} ;
  //  taskObj[saveindex][task_name] = addtaskinput.value;
    savetaskbtn_c.style.display="none";
    addtaskbtn_c.style.display="block";
    localStorage.setItem("localtask_c", JSON.stringify(taskObj_c));
    addtaskinput_c.value='';
    showtask();
})
// deleteitem
function deleteitem(index){
    let webtask_c = localStorage.getItem("localtask_c");
    let taskObj_c = JSON.parse(webtask_c);
    taskObj_c.splice(index, 1);
    localStorage.setItem("localtask_c", JSON.stringify(taskObj_c));
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
let addedtasklist_c = document.getElementById("addedtasklist_c");
    addedtasklist_c.addEventListener("click", function(e){
       // console.log(e);
        
        // showtask();
        let webtask_c = localStorage.getItem("localtask_c");
        let taskObj_c = JSON.parse(webtask_c);
        
        let mytarget_c = e.target;
        if(mytarget_c.classList[0] === 'text-success'){
        let mytargetid_c = mytarget_c.getAttribute("id");
        
        
        // let taskValue = taskObj[mytargetid]['task_name'];
        
        mytargetpresibling_c = mytarget_c.parentElement.previousElementSibling.previousElementSibling;
            
            // let mynewelem = mytargetpresibling.classList.toggle("completed");
            // taskObj.splice(mytargetid,1,mynewelem);
            for (keys in taskObj_c[mytargetid_c]) {
                if(keys == 'completeStatus' && taskObj_c[mytargetid_c][keys]==true){
                    taskObj_c[mytargetid_c].completeStatus = false;
                   // taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':false};
                }else if(keys == 'completeStatus' && taskObj_c[mytargetid_c][keys]==false){
                    taskObj_c[mytargetid_c].completeStatus = true;
                    //taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':true};
                }
              }
        //}
       // showtask();        
        localStorage.setItem("localtask_c", JSON.stringify(taskObj_c));
        showtask();
    }
    })

    



// deleteall
let deleteallbtn_c = document.getElementById("deleteallbtn_c");
deleteallbtn_c.addEventListener("click", function(){
    let savetaskbtn_c = document.getElementById("savetaskbtn_c");
    let addtaskbtn_c = document.getElementById("addtaskbtn_c");
    let webtask_c = localStorage.getItem("localtask_c");
    let taskObj_c = JSON.parse(webtask_c);
    if(webtask_c == null){
        taskObj_c = [];
    }
    else{
        taskObj_c = JSON.parse(webtask_c);
        taskObj_c = [];
    }
    savetaskbtn_c.style.display="none";
    addtaskbtn_c.style.display="block";
    localStorage.setItem("localtask_c", JSON.stringify(taskObj_c));
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














