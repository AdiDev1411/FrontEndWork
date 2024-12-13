const P = new Promise((resolve)=>{
    console.log("At the beggning")
    add(()=>{
        console.log("HI1");
        resolve();
    });

}).then(()=>{
    console.log("hi 2");
})

function add(x){
    console.log("this is add function calling");
    x();
}