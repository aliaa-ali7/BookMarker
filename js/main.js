let siteName= document.getElementById('siteName');
let siteUrl= document.getElementById('siteUrl');
let submit= document.getElementById('submit');

let mood= 'Submit';
let tmp;
// creat 

let DataPro;
if(localStorage.urlItem != null){
  DataPro = JSON.parse(localStorage.urlItem)
}else{
  DataPro=[]
}

submit.onclick=function () {
  let newPro={
    siteName:siteName.value,
    siteUrl:siteUrl.value,
  }

  if (mood==='Submit') {
    DataPro.push(newPro)
  }else{
    DataPro[tmp]= newPro
    mood='Submit'
  }
 
  localStorage.setItem('urlItem', JSON.stringify(DataPro))

  clearData()
   showData()
}

// clear 
function clearData() {
  siteName.value='';
  siteUrl.value='';
}

// read || showdata

function showData() {
  let cartona ='';
  for (let i = 0; i < DataPro.length; i++) {
    cartona +=`<tr>
    <td><h3 class="mx-5"> ${DataPro[i].siteName}</h3></td>
    <td> <button onclick="deleteBookmark(${i})" class="btn btn-danger mx-5">Delete </button> </td>
    <td><a onclick="updateBookmark(${i})" class="btn btn-info mx-5" href="#">Update</a> </td>
    <td><a class="btn btn-success mx-5" target="_blank" href="${DataPro[i].siteUrl}">Visit</a></td>
    
    </tr>
    `
    document.getElementById('tBody').innerHTML= cartona
  }
}
showData()

// delete 
function deleteBookmark(i) {
  console.log(i);
  DataPro.splice(i,1);
  localStorage.urlItem= JSON.stringify(DataPro);
  showData()
}

function updateBookmark(i) {
  siteName.value= DataPro[i].siteName;
  siteUrl.value= DataPro[i].siteUrl;
  submit.innerHTML='Update';
  mood='update';
  tmp = i
}



let searchMood= 'siteName';
function getSearchMood(){
  let search= document.getElementById('searchbtn')
  search.focus()
}


function searchData(value) {
  let cartona=''
  for (let i = 0; i < DataPro.length; i++) {
    if (DataPro[i].siteName.includes(value)) {
      console.log(i)
      cartona +=`<tr>
    <td><h3 class="mx-5"> ${DataPro[i].siteName}</h3></td>
    <td><a onclick="deleteBookmark(${i})" class="btn btn-danger mx-5" href="#">Delete</a> </td>
    <td><a onclick="updateBookmark(${i})" class="btn btn-info mx-5" href="#">Update</a> </td>
     <td><a class="btn btn-success mx-5" target="_blank" href="${DataPro[i].siteUrl}">Visit</a></td>
    </tr>
    `
    } 
  } document.getElementById('tBody').innerHTML= cartona

}
