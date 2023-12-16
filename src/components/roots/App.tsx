import React from 'react';
import Layout from '../common/Layout';
import { Toaster } from 'react-hot-toast';
import { UserContext } from '../common/UserContext';

import "../../style/contact.css"
import "../../style/buttons.css"
import "../../style/footer.css"
import "../../style/forms.css"
import "../../style/general_styles.css"
import "../../style/navigation.css"
import "../../style/grid_layouts.css"
import "../../style/movies.css"

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
