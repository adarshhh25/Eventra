import React, {useState} from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Slidebar from '../Header/Slidebar';

function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(prev => !prev);

  return (
    <div>
    <Header onProfileClick={toggleSidebar}/>
    <Slidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    <h1>Main Content</h1>
    <Footer/>
    </div>
  )
}

export default Home;
