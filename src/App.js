import './App.css';
import Create from './components/create/create';
import Read from './components/read/read'
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import {BrowserRouter,Routes,Route,Link,} from "react-router-dom";
import Update from './components/update/update'
import Delete from './components/delete/delete'

function App() {
  return (
    <BrowserRouter>
    <div className='main'>
      <Routes>
        <Route path="/" element={<div><Create/></div>} />
        <Route path="/read" element={<div><Read/></div>} />
        <Route exact path="/update" element={<div><Update/></div>} />
        <Route exact path="/delete" element={<div><Delete/></div>} />
        <Route exact path="/create" element={<div><Create/></div>} />
      </Routes>
      {/* <div > <Create/> </div> */}
    </div>
    </BrowserRouter>
  );
}

export default App;

// <BrowserRouter>
//       {/* <Routes> */}
//       <div className='main'>
//         {/* <Route path = '/create' component={Create} /> */}
//         {/* <div > <Create/> </div> */}
    
//         {/* <div> <Route path = '/read' component={Read} /> </div>

//         <Route path = '/update' component={Update} />

//         <Route path = '/delete' component={Delete} /> */}
//         {/* <Read/> */}
      
//         <Route path="/create" element={<Create />} />
//         <Route path="/read" element={<Read />} />
//       </div>
//       {/* </Routes> */}
//     </BrowserRouter>