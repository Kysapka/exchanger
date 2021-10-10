import React from 'react'
import './lesson_4';
import {createPromise, rejectPromise, resolvePromise} from "./lesson_4";

export const Lesson4 = () => {
    return (
        <div>
            <button onClick={createPromise} id='btn-create-promise'>Create Promise</button>
            <button onClick={resolvePromise} id='btn-resolve-promise'>Resolve Promise</button>
            <button onClick={rejectPromise} id='btn-reject-promise'>Reject Promise</button>
        </div>
    );
}

export default Lesson4;