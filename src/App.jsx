
import './App.css'
import Card from './Comphonent/card'
import Header from './Header'


function App(){
const data = [
  { id:1, name: "Alice", age: 30 },
  { id:2, name: "Bob", age: 25 },
  { id:3, name: "Charlie", age: 35 },
  { id:4, name: "Younus", age: 28 },
  { id:4, name: "Micel", age: 28 },
  { id:4, name: "Ibrahim", age: 28 },
];
  return (
   
 
<div>
     
     <div className='first-class'>
         <h2>Hablu Vaia</h2>
     </div>
     <Header></Header>
     <h1 className='center'>Here is Cards</h1>
    <div className='displayy'>
      {
          data.map((item) =>{
            console.log(item)
          return  <Card title={item} key={item.id}></Card>
          })
      }
    </div>
</div>
  
   
  )
}

export default App
