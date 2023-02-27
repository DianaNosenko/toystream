import styles from'./App.module.css';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className={styles.App}>
      <Header className={styles.headerStyle}/>
      <Sidebar className={styles.sidebarStyle}/>
      <Content className={styles.contentStyle}/>
      <Footer className={styles.footerStyle}/>
    </div>
  );
}

export default App;
