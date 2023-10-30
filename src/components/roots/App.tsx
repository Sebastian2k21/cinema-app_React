import React from 'react';
import Layout from '../common/Layout';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../common/UserContext';


function App() {
  const [user, setUser] = React.useState<string | null>(localStorage.getItem("username"));

  return (
    <div>
      <UserContext.Provider value={{user: user, setUser: setUser}}>  
        <Layout/>
        <Toaster/>
      </UserContext.Provider>
    </div>
    

  );
}

export default App;
