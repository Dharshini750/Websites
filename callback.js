// function f1(data){
//     console.log(`hello : f1: ${data}`);
//     f2();
// }
// function f2(data){
//     console.log("Hello: f2");
// }
// setTimeout(f1,300,"Hello")
// function fail()
// {
//     console.log("fail")
// }
// function success()
// {
//     console.log("Success")
// }
// function error()
// {
//     console.log("Error")
// }
// function exec(data,callback){
//     if (data){
//         console.log(`balance: ${data}`);
//     }
//     callback()
// }
// function trigger(){
//     const data="dharshu"
//     if (data > 0){
//         exec(data, success)
//     }
//     else if (data <= 0){
//         exec(data, fail)
//     }  
//     else{
//         exec("error", error)
//     }
// }
//trigger(9)
//trigger()
// async function API() {
//     const response = fetch('https://66e526dd5cc7f9b6273c6b10.mockapi.io/register')
//     const data = response.json()
//     console.log(data)
//     return data;    
// }
// const Apidata = API()
// console.log(Apidata)

// async function API() {
//     try{
//     const response =  fetch('https://66e526dd5cc7f9b6273c6b10.mockapi.io/register')
//     const data = await response.json()
//     console.table(data)
//     return data; 
//     }
//     catch (error){
//         console.log(error)
//     }   
// }
// API()

// async function API() {
//     try{
//     const response = await fetch('https://66e526dd5cc7f9b6273c6b10.mockapi.io/register')
//     const data =  response.json()
//     console.table(data)
//     return data; 
//     }
//     catch (error){
//         console.log(error)
//     }   
// }
// API()
async function API() {
        try{
        const response =  await fetch('https://66e526dd5cc7f9b6273c6b10.mockapi.io/register')
        const data = await response.json()
        //console.table(data)
        return data; 
        }
        catch (error){
            console.log(error)
        }   
    }
//API()
async function APIDATA() {
    const apidata = await API()
    console.log(apidata)
    const mockdata = [{
        "name": "hello"
    }]
    //const structuredatamapx = mockdata.map((data) => {console.log(data) })
    const activeusers =  apidata.filter(data => data.isActive)
    console.log(activeusers)
    const structuredatamap =  activeusers.map((data) => {console.log(data) })
    // const activeusers = structuredatamap
    //console.log(structuredata)
    
}
APIDATA()