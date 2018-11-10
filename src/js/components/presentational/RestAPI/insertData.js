import axios from 'axios'; 

const insertData = ()=> { 
    // var bodyFormData = new FormData();
    // bodyFormData.set("name","Mir");
    // bodyFormData.set("age",30); 
    var bodyFormData = {name: 'Testing', age: 39};
axios.post('http://localhost:8080/insertReact',bodyFormData)
.then(res => {    
//    const episodes = res.data.response.items;
//     console.log(episodes);
console.log('SUccess');
//     this.setState((prevState) => ({
//        dataBaseName: res.data}));
})
} 
export default insertData;