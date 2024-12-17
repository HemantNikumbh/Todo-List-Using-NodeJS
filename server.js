import readline from "readline"

const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout

})

const todos = [];
const showmenu = () =>{
    console.log("\n1: Add Task")
    console.log("2: View Task ")
    console.log("3: Exist")
    r1.question("Choose The Task :",handleinput)
}

const handleinput = (option) =>{
    if(option==="1"){
        r1.question("Enter Task",(task)=>{
            todos.push(task)
            console.log("Task Added :",task)
            showmenu()
        })
    }else if(option==="2"){
        console.log("\n Your List");
        todos.forEach((task,index)=>{
            console.log(`${index+1}.${task}`)
        })
        showmenu();
    }else if(option==="3"){
        console.log("Good bye");
        r1.close();
    }else{
        console.log("Invalid Option ");
        showmenu(); 
    }
} 
