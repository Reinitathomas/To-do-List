showtask();
let addtaskinput_mo = document.getElementById("addtaskinput_mo");
let addtaskbtn_mo = document.getElementById("addtaskbtn_mo");

addtaskbtn_mo.addEventListener("click", function(){
    addtaskinputval_mo = addtaskinput_mo.value;
    if(addtaskinputval_mo.trim()!=0){
        let webtask_mo = localStorage.getItem("localtask_mo");
        if(webtask_mo == null){
            taskObj_mo = [];
        }
        else{
            taskObj_mo = JSON.parse(webtask_mo);
        }
        taskObj_mo.push({'task_name_mo':addtaskinputval_mo, 'completeStatus':false});
		// console.log(taskObj, 'Ashendra');
        localStorage.setItem("localtask_mo", JSON.stringify(taskObj_mo));
        addtaskinput_mo.value = '';
    }
    showtask();
})

// showtask
function showtask(){
    let webtask_mo = localStorage.getItem("localtask_mo");
    if(webtask_mo == null){
        taskObj_mo = [];
    }
    else{
        taskObj_mo = JSON.parse(webtask_mo);
    }
    let html = '';
    let addedtasklist_mo = document.getElementById("addedtasklist_mo");
    taskObj_mo.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue_mo = `<td class="completed">${item.task_name_mo}</td>`;
        }else{
            taskCompleteValue_mo = `<td>${item.task_name_mo}</td>`;
        }
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    ${taskCompleteValue_mo}
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
    });
    addedtasklist_mo.innerHTML = html;
}

// edittask
function edittask(index){
    let saveindex_mo = document.getElementById("saveindex_mo");
    let addtaskbtn_mo = document.getElementById("addtaskbtn_mo");
    let savetaskbtn_mo = document.getElementById("savetaskbtn_mo");
    saveindex_mo.value = index;
    let webtask_mo = localStorage.getItem("localtask_mo");
    let taskObj_mo = JSON.parse(webtask_mo); 
    
    addtaskinput_mo.value = taskObj_mo[index]['task_name_mo'];
    addtaskbtn_mo.style.display="none";
    savetaskbtn_mo.style.display="block";
}

// savetask
let savetaskbtn_mo = document.getElementById("savetaskbtn_mo");
savetaskbtn_mo.addEventListener("click", function(){
    let addtaskbtn_mo = document.getElementById("addtaskbtn_mo");
    let webtask_mo = localStorage.getItem("localtask_mo");
    let taskObj_mo = JSON.parse(webtask_mo); 
    let saveindex_mo = document.getElementById("saveindex_mo").value;
    
    for (keys in taskObj_mo[saveindex_mo]) {
        if(keys == 'task_name_mo'){
            taskObj_mo[saveindex_mo].task_name_mo = addtaskinput_mo.value;
        }
      }
    // taskObj[saveindex] = {'task_name':addtaskinput.value, 'completeStatus':false} ;
  //  taskObj[saveindex][task_name] = addtaskinput.value;
    savetaskbtn_mo.style.display="none";
    addtaskbtn_mo.style.display="block";
    localStorage.setItem("localtask_mo", JSON.stringify(taskObj_mo));
    addtaskinput_mo.value='';
    showtask();
})
// deleteitem
function deleteitem(index){
    let webtask_mo = localStorage.getItem("localtask_mo");
    let taskObj_mo = JSON.parse(webtask_mo);
    taskObj_mo.splice(index, 1);
    localStorage.setItem("localtask_mo", JSON.stringify(taskObj_mo));
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
let addedtasklist_mo = document.getElementById("addedtasklist_mo");
    addedtasklist_mo.addEventListener("click", function(e){
       // console.log(e);
        
        // showtask();
        let webtask_mo = localStorage.getItem("localtask_mo");
        let taskObj_mo = JSON.parse(webtask_mo);
        
        let mytarget_mo = e.target;
        if(mytarget_mo.classList[0] === 'text-success'){
        let mytargetid_mo = mytarget_mo.getAttribute("id");
        
        
        // let taskValue = taskObj[mytargetid]['task_name'];
        
        mytargetpresibling_mo = mytarget_mo.parentElement.previousElementSibling.previousElementSibling;
            
            // let mynewelem = mytargetpresibling.classList.toggle("completed");
            // taskObj.splice(mytargetid,1,mynewelem);
            for (keys in taskObj_mo[mytargetid_mo]) {
                if(keys == 'completeStatus' && taskObj_mo[mytargetid_mo][keys]==true){
                    taskObj_mo[mytargetid_mo].completeStatus = false;
                   // taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':false};
                }else if(keys == 'completeStatus' && taskObj_mo[mytargetid_mo][keys]==false){
                    taskObj_mo[mytargetid_mo].completeStatus = true;
                    //taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':true};
                }
              }
        //}
       // showtask();        
        localStorage.setItem("localtask_mo", JSON.stringify(taskObj_mo));
        showtask();
    }
    })

    



// deleteall
let deleteallbtn_mo = document.getElementById("deleteallbtn_mo");
deleteallbtn_mo.addEventListener("click", function(){
    let savetaskbtn_mo = document.getElementById("savetaskbtn_mo");
    let addtaskbtn_mo = document.getElementById("addtaskbtn_mo");
    let webtask_mo = localStorage.getItem("localtask_mo");
    let taskObj_mo = JSON.parse(webtask_mo);
    if(webtask_mo == null){
        taskObj_mo = [];
    }
    else{
        taskObj_mo = JSON.parse(webtask_mo);
        taskObj_mo = [];
    }
    savetaskbtn_mo.style.display="none";
    addtaskbtn_mo.style.display="block";
    localStorage.setItem("localtask_mo", JSON.stringify(taskObj_mo));
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














