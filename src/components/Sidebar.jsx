import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <div>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}

          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50">

          </img>
          
        <div className={styles.profile}>
          <strong>Reinaldo Ramos</strong>

          <span>Web Dev</span>

          <footer className={styles.footer}>
            <a href="#">Editar Perfil</a>
          </footer>
        </div>
      </aside>
    </div>
  );
}
