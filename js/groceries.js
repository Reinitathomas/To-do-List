showtask();
let addtaskinput_g = document.getElementById("addtaskinput_g");
let addtaskbtn_g = document.getElementById("addtaskbtn_g");

addtaskbtn_g.addEventListener("click", function(){
    addtaskinputval_g = addtaskinput_g.value;
    if(addtaskinputval_g.trim()!=0){
        let webtask_g = localStorage.getItem("localtask_g");
        if(webtask_g == null){
            taskObj_g = [];
        }
        else{
            taskObj_g = JSON.parse(webtask_g);
        }
        taskObj_g.push({'task_name_g':addtaskinputval_g, 'completeStatus':false});
		// console.log(taskObj, 'Ashendra');
        localStorage.setItem("localtask_g", JSON.stringify(taskObj_g));
        addtaskinput_g.value = '';
    }
    showtask();
})

// showtask
function showtask(){
    let webtask_g = localStorage.getItem("localtask_g");
    if(webtask_g == null){
        taskObj_g = [];
    }
    else{
        taskObj_g = JSON.parse(webtask_g);
    }
    let html = '';
    let addedtasklist_g = document.getElementById("addedtasklist_g");
    taskObj_g.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue_g = `<td class="completed">${item.task_name_g}</td>`;
        }else{
            taskCompleteValue_g = `<td>${item.task_name_g}</td>`;
        }
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    ${taskCompleteValue_g}
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
    });
    addedtasklist_g.innerHTML = html;
}

// edittask
function edittask(index){
    let saveindex_g = document.getElementById("saveindex_g");
    let addtaskbtn_g = document.getElementById("addtaskbtn_g");
    let savetaskbtn_g = document.getElementById("savetaskbtn_g");
    saveindex_g.value = index;
    let webtask_g = localStorage.getItem("localtask_g");
    let taskObj_g = JSON.parse(webtask_g); 
    
    addtaskinput_g.value = taskObj_g[index]['task_name_g'];
    addtaskbtn_g.style.display="none";
    savetaskbtn_g.style.display="block";
}

// savetask
let savetaskbtn_g = document.getElementById("savetaskbtn_g");
savetaskbtn_g.addEventListener("click", function(){
    let addtaskbtn_g = document.getElementById("addtaskbtn_g");
    let webtask_g = localStorage.getItem("localtask_g");
    let taskObj_g = JSON.parse(webtask_g); 
    let saveindex_g = document.getElementById("saveindex_g").value;
    
    for (keys in taskObj_g[saveindex_g]) {
        if(keys == 'task_name_g'){
            taskObj_g[saveindex_g].task_name_g = addtaskinput_g.value;
        }
      }
    // taskObj[saveindex] = {'task_name':addtaskinput.value, 'completeStatus':false} ;
  //  taskObj[saveindex][task_name] = addtaskinput.value;
    savetaskbtn_g.style.display="none";
    addtaskbtn_g.style.display="block";
    localStorage.setItem("localtask_g", JSON.stringify(taskObj_g));
    addtaskinput_g.value='';
    showtask();
})
// deleteitem
function deleteitem(index){
    let webtask_g = localStorage.getItem("localtask_g");
    let taskObj_g = JSON.parse(webtask_g);
    taskObj_g.splice(index, 1);
    localStorage.setItem("localtask_g", JSON.stringify(taskObj_g));
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
let addedtasklist_g = document.getElementById("addedtasklist_g");
    addedtasklist_g.addEventListener("click", function(e){
       // console.log(e);
        
        // showtask();
        let webtask_g = localStorage.getItem("localtask_g");
        let taskObj_g = JSON.parse(webtask_g);
        
        let mytarget_g = e.target;
        if(mytarget_g.classList[0] === 'text-success'){
        let mytargetid_g = mytarget_g.getAttribute("id");
        
        
        // let taskValue = taskObj[mytargetid]['task_name'];
        
        mytargetpresibling_g = mytarget_g.parentElement.previousElementSibling.previousElementSibling;
            
            // let mynewelem = mytargetpresibling.classList.toggle("completed");
            // taskObj.splice(mytargetid,1,mynewelem);
            for (keys in taskObj_g[mytargetid_g]) {
                if(keys == 'completeStatus' && taskObj_g[mytargetid_g][keys]==true){
                    taskObj_g[mytargetid_g].completeStatus = false;
                   // taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':false};
                }else if(keys == 'completeStatus' && taskObj_g[mytargetid_g][keys]==false){
                    taskObj_g[mytargetid_g].completeStatus = true;
                    //taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':true};
                }
              }
        //}
       // showtask();        
        localStorage.setItem("localtask_g", JSON.stringify(taskObj_g));
        showtask();
    }
    })

    



// deleteall
let deleteallbtn_g = document.getElementById("deleteallbtn_g");
deleteallbtn_g.addEventListener("click", function(){
    let savetaskbtn_g = document.getElementById("savetaskbtn_g");
    let addtaskbtn_g = document.getElementById("addtaskbtn_g");
    let webtask_g = localStorage.getItem("localtask_g");
    let taskObj_g = JSON.parse(webtask_g);
    if(webtask_g == null){
        taskObj_g = [];
    }
    else{
        taskObj_g = JSON.parse(webtask_g);
        taskObj_g = [];
    }
    savetaskbtn_g.style.display="none";
    addtaskbtn_g.style.display="block";
    localStorage.setItem("localtask_g", JSON.stringify(taskObj_g));
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














