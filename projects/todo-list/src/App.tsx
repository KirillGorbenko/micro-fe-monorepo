import React from "react";
import TodoList from "./components/TodoList/TodoList";

import styles from './index.module.scss';

const App = () => {
    return (
        <div className={styles.appWrapper}>
            <h1>React</h1>
            <TodoList />
        </div>
    );
};

export default App;