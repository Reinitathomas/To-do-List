showtask();
let addtaskinput_l = document.getElementById("addtaskinput_l");
let addtaskbtn_l = document.getElementById("addtaskbtn_l");

addtaskbtn_l.addEventListener("click", function(){
    addtaskinputval_l = addtaskinput_l.value;
    if(addtaskinputval_l.trim()!=0){
        let webtask_l = localStorage.getItem("localtask_l");
        if(webtask_l == null){
            taskObj_l = [];
        }
        else{
            taskObj_l = JSON.parse(webtask_l);
        }
        taskObj_l.push({'task_name_l':addtaskinputval_l, 'completeStatus':false});
		// console.log(taskObj, 'Ashendra');
        localStorage.setItem("localtask_l", JSON.stringify(taskObj_l));
        addtaskinput_l.value = '';
    }
    showtask();
})

// showtask
function showtask(){
    let webtask_l = localStorage.getItem("localtask_l");
    if(webtask_l == null){
        taskObj_l = [];
    }
    else{
        taskObj_l = JSON.parse(webtask_l);
    }
    let html = '';
    let addedtasklist_l = document.getElementById("addedtasklist_l");
    taskObj_l.forEach((item, index) => {

        if(item.completeStatus==true){
            taskCompleteValue_l = `<td class="completed">${item.task_name_l}</td>`;
        }else{
            taskCompleteValue_l = `<td>${item.task_name_l}</td>`;
        }
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    ${taskCompleteValue_l}
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
                    <td><button type="button" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
                    <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
    });
    addedtasklist_l.innerHTML = html;
}

// edittask
function edittask(index){
    let saveindex_l = document.getElementById("saveindex_l");
    let addtaskbtn_l = document.getElementById("addtaskbtn_l");
    let savetaskbtn_l = document.getElementById("savetaskbtn_l");
    saveindex_l.value = index;
    let webtask_l = localStorage.getItem("localtask_l");
    let taskObj_l = JSON.parse(webtask_l); 
    
    addtaskinput_l.value = taskObj_l[index]['task_name_l'];
    addtaskbtn_l.style.display="none";
    savetaskbtn_l.style.display="block";
}

// savetask
let savetaskbtn_l = document.getElementById("savetaskbtn_l");
savetaskbtn_l.addEventListener("click", function(){
    let addtaskbtn_l = document.getElementById("addtaskbtn_l");
    let webtask_l = localStorage.getItem("localtask_l");
    let taskObj_l = JSON.parse(webtask_l); 
    let saveindex_l = document.getElementById("saveindex_l").value;
    
    for (keys in taskObj_l[saveindex_l]) {
        if(keys == 'task_name_l'){
            taskObj_l[saveindex_l].task_name_l = addtaskinput_l.value;
        }
      }
    // taskObj[saveindex] = {'task_name':addtaskinput.value, 'completeStatus':false} ;
  //  taskObj[saveindex][task_name] = addtaskinput.value;
    savetaskbtn_l.style.display="none";
    addtaskbtn_l.style.display="block";
    localStorage.setItem("localtask_l", JSON.stringify(taskObj_l));
    addtaskinput_l.value='';
    showtask();
})
// deleteitem
function deleteitem(index){
    let webtask_l = localStorage.getItem("localtask_l");
    let taskObj_l = JSON.parse(webtask_l);
    taskObj_l.splice(index, 1);
    localStorage.setItem("localtask_l", JSON.stringify(taskObj_l));
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
let addedtasklist_l = document.getElementById("addedtasklist_l");
    addedtasklist_l.addEventListener("click", function(e){
       // console.log(e);
        
        // showtask();
        let webtask_l = localStorage.getItem("localtask_l");
        let taskObj_l = JSON.parse(webtask_l);
        
        let mytarget_l = e.target;
        if(mytarget_l.classList[0] === 'text-success'){
        let mytargetid_l = mytarget_l.getAttribute("id");
        
        
        // let taskValue = taskObj[mytargetid]['task_name'];
        
        mytargetpresibling_l = mytarget_l.parentElement.previousElementSibling.previousElementSibling;
            
            // let mynewelem = mytargetpresibling.classList.toggle("completed");
            // taskObj.splice(mytargetid,1,mynewelem);
            for (keys in taskObj_l[mytargetid_l]) {
                if(keys == 'completeStatus' && taskObj_l[mytargetid_l][keys]==true){
                    taskObj_l[mytargetid_l].completeStatus = false;
                   // taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':false};
                }else if(keys == 'completeStatus' && taskObj_l[mytargetid_l][keys]==false){
                    taskObj_l[mytargetid_l].completeStatus = true;
                    //taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':true};
                }
              }
        //}
       // showtask();        
        localStorage.setItem("localtask_l", JSON.stringify(taskObj_l));
        showtask();
    }
    })

    



// deleteall
let deleteallbtn_l = document.getElementById("deleteallbtn_l");
deleteallbtn_l.addEventListener("click", function(){
    let savetaskbtn_l = document.getElementById("savetaskbtn_l");
    let addtaskbtn_l = document.getElementById("addtaskbtn_l");
    let webtask_l = localStorage.getItem("localtask_l");
    let taskObj_l = JSON.parse(webtask_l);
    if(webtask_l == null){
        taskObj_l = [];
    }
    else{
        taskObj_l = JSON.parse(webtask_l);
        taskObj_l = [];
    }
    savetaskbtn_l.style.display="none";
    addtaskbtn_l.style.display="block";
    localStorage.setItem("localtask_l", JSON.stringify(taskObj_l));
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














