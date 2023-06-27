import styles from'./App.module.scss';
import Content from './Components/Structure/Content/Content';
import Footer from './Components/Structure/Footer/Footer';
import Header from './Components/Structure/Header/Header';
import Sidebar from './Components/Structure/Sidebar/Sidebar';
import {BrowserRouter} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <div className={styles.app_wrap}>
      <Header className={styles.headerStyle}/>
      <Sidebar className={styles.sidebarStyle}/>
      <Content className={styles.contentStyle}/>
      <Footer className={styles.footerStyle}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
