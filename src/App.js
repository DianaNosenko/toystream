import styles from'./App.module.css';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <div className={styles.app_grid}>
      <Header className={styles.headerStyle}/>
      <Sidebar className={styles.sidebarStyle}/>
      <Content className={styles.contentStyle}/>
      <Footer className={styles.footerStyle}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
