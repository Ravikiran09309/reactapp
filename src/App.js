// import React from 'react'

// const App = () => {
//     return(
//         <div>
//             <center>
//                 <h1 style={{color:"grey",background:"black",padding:"20px"}}>Hello World</h1>
//             </center>
//         </div>
//     )
// }
// export default App;    

// import React from 'react'
// const App=() => {
//     return(
//         <div>
//             <center>
//                 <button onClick={()=> console.log("Clicked")} style={{color:"blue"}}>Click here</button>
//             </center>
        
//         </div>
//     )
// }
// export default App;

// import React,{useState} from 'react'
// const App = () => {
//     const [count,setCount] = useState(0);
//     return(
//         <div>
//             <center>
//                 <h1>{count}</h1>
//                 <button onClick={()=> setCount(count+1)}>Click me</button>
//             </center>
//         </div>
//     )
// }
// export default App;


// import React,{useState,useEffect} from 'react'
// function App () {
//     const[count,setCount] = useState(0)
//     useEffect (()=>console.log("Clicked"),[count])
//     return(
//         <div>
//             <center>
//                 <p>When you are clicked the count number is {setCount} </p>
//                 <button onClick = {() => setCount(count+1)}>Click here</button>
//             </center>
//         </div>
//     )
// }
// export default App;

// import React,{useState} from 'react'
// const App = () => {
//     const [user,setName] = useState("");
//     const handler = e => {
//         setName(e.target.value)    
//     }

//     return(
//             <div>
//                 <center>
//                     <input type="text" placeholder="username" value={user} name="user"
//                     onChange={handler}/>
//                     <br/>
//                     {user}
//                 </center>
//             </div>
//         )
// }
// export default App;


// import React, {useState} from 'react';
// function App(){
//     const [data,setData] = useState({
//         username:'',
//         password:'',
//     })
//     const {username,password} =data;
//     const changeHandler = e => {
//         setData({...data,[e.target.name]:[e.target.value]})
//     }
//     const submitHandler = e => {
//         e.preventDefault();
//         console.log(data);
//     }
//     return(
//         <div>
//             <center>
//                 <form onSubmit={submitHandler}>
//                     <input
//                      type="text"
//                      name="username"
//                      value={username}
//                      onChange={changeHandler}
//                      placeholder="Username"
//                      /><br/>
//                      <input 
//                      type="password"
//                      name="password"
//                      value={password}
//                      onChange={changeHandler}
//                      placeholder="Password"
//                      /><br/>
//                      <input
//                      type="submit"
//                      name="submit"
//                      />

//                 </form>
//             </center>
//         </div>
//     )    
// }
// export default App;

// Map() Function Concept;
// import React from 'react'
// function App(){
//     const arr = [
//         {
//             id:1,
//             title:"React.Js",
//         },
//         {
//             id:2,
//             title:"Node.Js",
//         },
//         {
//             id:3,
//             title:"Angular.Js",
//         },
//         {
//             id:4,
//             title:"Express.Js",
//         }
//     ];
//     return(
//         <div>
//             {
//                 arr.map(
//                     (value,index)=><li key={value.id}>{value.title}</li>
//                 )
//             }
//         </div>
//     )
// }
// export default App;

// Fliter() Function Concept;
// import React from 'react'
// function App(){
//     const name = ['Jhon','James','Joe','Rahul','Sai'];
//     const flitered = name.filter(name=>name.includes('J'))
//     return(
//         <div>
//             {
//                 flitered.map(item=><li>{item}</li>)
//             }
//         </div>
//     )
// }
// export default App;


// import React, {useState} from 'react'
// const App = () => {
//     const [data,setData] = useState({
//         username:'',
//         email:'',
//         password:'',
//         confirmPassword:'',
//     })
//     const {username,email,password,confirmPassword} = data;
//     const changeHandler = e => {
//         setData({...data,[e.target.name]:e.target.value})
//     }
//     const submitHandler = e => {
//         e.preventDefault();
        
//         if(password === confirmPassword){
//             console.log(data);
//         }
//         else{
//             console.log("password is in correct");
//         }
//     }
//     return(
//         <div>
//             <center>
//                 <form onSubmit={submitHandler}>
//                     <input 
//                     type="text"
//                     name="username"
//                     value={username}
                    
//                     onChange={changeHandler}
//                     /><br/>
//                     <input 
//                     type="email"
//                     name="email"
//                     value={email}
                    
//                     onChange={changeHandler}
//                     /><br/>
//                     <input 
//                     type="password"
//                     name="password"
//                     value={password}
                    
//                     onChange={changeHandler}
//                     /><br/>
//                     <input 
//                     type="password"
//                     name="confirmPassword"
//                     value={confirmPassword}
                    
//                     onChange={changeHandler}
//                     /><br/>
//                     {password!== confirmPassword? <p style={{"color":"red"}}>Password is incorrect</p>:null}
//                     <input 
//                     type="submit"
//                     name="submit"
//                     /><br/>

//                 </form>
//             </center>
//         </div>
//     );
// }
// export default App;


// import React, {useState} from 'react'
// import'./App.css';
// const App = () => {
//     const [input,setInput] = useState ("");
//     const [result,setResult] = useState (0);

//     const handler = e =>{
//         setInput(e.target.value);
//     }
//     return(
//         <div>
//             <center>
//                 <input type="text" value={input} name="input" onChange={handler}/>
//                 {/* <button onClick={()=> setResult(eval(input))}>Result</button> */}
//                 <h3>Result is : {result}</h3><br/>
//                 <button onClick={()=> setInput('')}>Clr</button>
//                 <button onClick={()=> setInput('')}>AC</button>
//                 <button onClick={()=> setInput(input+'/')}>/</button>
//                 <button onClick={()=> setInput(input+'%')}>%</button><br/>

                
//                 <button onClick={()=> setInput(input+'7')}>7</button>
//                 <button onClick={()=> setInput(input+'8')}>8</button>
//                 <button onClick={()=> setInput(input+'9')}>9</button>
//                 <button onClick={()=> setInput(input+'*')}>*</button><br/>

                
//                 <button onClick={()=> setInput(input+'4')}>4</button>
//                 <button onClick={()=> setInput(input+'5')}>5</button>
//                 <button onClick={()=> setInput(input+'6')}>6</button>
//                 <button onClick={()=> setInput(input+'-')}>-</button><br/>

                
                
//                 <button onClick={()=> setInput(input+'1')}>1</button>
//                 <button onClick={()=> setInput(input+'2')}>2</button>
//                 <button onClick={()=> setInput(input+'3')}>3</button>
//                 <button onClick={()=> setInput(input+'+')}>+</button><br/>

//                 <button onClick={()=> setInput(input+'00')}>00</button>
//                 <button onClick={()=> setInput(input+'0')}>0</button>
//                 <button onClick={()=> setInput(input+'.')}>.</button>
//                 <button onClick={()=> setResult(eval(input))}>=</button> 
//             </center>
//         </div>
//     )
// }
// export default App;


// import React, {useState} from 'react'
// import './App.css';

// const App = () => {
//     const [input,setInput] = useState("")
//     const [result,setResult] = useState(0)
//     const Handler = e =>
//         setInput(e.target.value)
//     return(
//         <div class="Main-body">
//             <center>
//                 <input type="text" value={input} name="input" onChange={Handler} /><br/>
//                 <br/>

//                 <button onClick={()=> setInput(input+'7')}>7</button>
//                 <button onClick={()=> setInput(input+'8')}>8</button>
//                 <button onClick={()=> setInput(input+'9')}>9</button>
//                 <button onClick={()=> setInput(input+'%')}>%</button>
//                 <button style={{"background-color":"pink"}}onClick={()=> setInput('')}>AC</button>
//                 <br/>

//                 <button onClick={()=> setInput(input+'4')}>4</button>
//                 <button onClick={()=> setInput(input+'5')}>5</button>
//                 <button onClick={()=> setInput(input+'6')}>6</button>
//                 <button onClick={()=> setInput(input+'*')}>*</button>
//                 <button onClick={()=> setInput(input+'')}>()</button>
//                 <br/>

//                 <button onClick={()=> setInput(input+'1')}>1</button>
//                 <button onClick={()=> setInput(input+'2')}>2</button>
//                 <button onClick={()=> setInput(input+'3')}>3</button>
//                 <button onClick={()=> setInput(input+'-')}>-</button>
//                 <button onClick={()=> setInput(input+'%')}>%</button>
//                 <br/>

//                 <button onClick={()=> setInput(input+'00')}>00</button>
//                 <button onClick={()=> setInput(input+'0')}>0</button>
//                 <button onClick={()=> setInput(input+'.')}>.</button>
//                 <button onClick={()=> setInput(input+'+')}>+</button>
//                 <button style={{"background-color":"aqua"}} onClick={()=> setInput(eval(input))}>=</button>
//                 <br/>
//             </center>
//         </div>
//     )
// }

// export default App;

// Example of Fetch Statement:

// import react,{useEffect,useState} from 'react'

// const App = () => {
//     const [data,setData] = useState([]);
//     useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/todos').then(
//         response=>response.json()).then(json=>setData(json))},[])

//     return(
//         <div>
//             {data.map(item=><li key={item.id}>{item.title}</li>)}
//         </div>
//     )
// };
// export default App;







import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact/>
      </main>
    </div>
  );
};
export default App