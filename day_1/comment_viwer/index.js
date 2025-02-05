

async function fetchData(){

    try{
        let res=await fetch('https://jsonplaceholder.typicode.com/posts')
        let data=await res.json()
        console.log(data)
        showData(data)

    }catch(e){
        console.log('failed to fetch data')
    }
}


function showData(data){

    document.getElementById('showData').innerHTML='';

    data.forEach((item,id)=>{
         document.getElementById('showData').innerHTML+=`
            <div>
            <h3>Title : ${item.title}</h3>
            <p>body : ${item.body}</p>
            <button id='comment'>View comment</button>
        </div> `
    })


}


 document.getElementById('comment').addEventListener('click' ,commentClick())

 function commentClick(id){
 
    


 }




fetchData()