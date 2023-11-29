import React, {FC} from "react";
import {Todo} from "./types";

const Todo: FC<Partial<Todo>> = ({ title, completed }) => {
    return(
        <li>
            <p>{title}</p>
            <input type="checkbox" checked={completed}/>
        </li>
    );
};

export default Todo;