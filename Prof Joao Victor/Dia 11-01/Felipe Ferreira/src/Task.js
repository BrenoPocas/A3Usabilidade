import React from 'react';

function Task({ task, index}) {
    return (
        <div className="task">
            <p>{index + 1} • {task}</p>
        </div>
    );
}

export default Task;