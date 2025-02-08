import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Sidebar from './component/Sidebar/Sidebar';

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className='app-componet'>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
