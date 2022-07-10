let addbtn = document.querySelector("#addbtn");
showcomment();
addbtn.addEventListener("click", function (element) {
    
  let addtxt = document.querySelector("#addtxt");
  let comment = localStorage.getItem("comment");
  let commentobj;
  if (comment == null) {
    commentobj = [];
  } else {
    commentobj = JSON.parse(comment);
  }
  commentobj.push(addtxt.value);
  localStorage.setItem("comment", JSON.stringify(commentobj));
  addtxt.value = "";
  console.log(commentobj);
  showcomment(); 
 
});
function showcomment() {
    
  let comment = localStorage.getItem("comment");
  let commentobj;
  if (comment == null) {
    commentobj = [];
  } else {
    commentobj = JSON.parse(comment);
  }
  let html = "";
  commentobj.forEach(function (element, index) {
    
 

    html += `
    <div class="card my-3">
        <div class="card-body">
          <h5 class="card-title">Comment  ${index + 1}</h5>
          <p class="card-text yourtxt">
            ${element}
          </p>
          <button onclick="deletecomment()"  class="btn btn-primary" >delete Comment</button>
        </div>
      </div>`;
     
      
  }); 
 
  let commentele = document.getElementById("comment");

 
  if (commentobj.length != 0) {
    commentele.innerHTML = html;
  } else {
    commentele.innerHTML = `Nothing to show! Use "Post Comment" section above to add Comment.`;
  }
}
function deletecomment(element, index) {
  let comment = localStorage.getItem("comment");
  let commentobj;
  if (comment == null) {
    commentobj = [];
  } else {
    commentobj = JSON.parse(comment);
  }
  console.log(index);
  commentobj.splice(index, 1);
  localStorage.setItem("comment", JSON.stringify(commentobj));
  showcomment();
}

function search() {
  let addtxt = document.querySelector("#addtxt");
  let comment = localStorage.getItem("comment");
  let commentobj;
  if (comment == null) {
    commentobj = [];
  } else {
    commentobj = JSON.parse(comment);
  }
  let search = document.getElementById("search");
  let result = JSON.stringify(search);
  let searchfor = JSON.stringify(commentobj);
  if (searchfor.includes(result)) {
    document.body.innerHTML = searchfor;
  } else {
    document.body.innerHTML = "not found";
  }
}

