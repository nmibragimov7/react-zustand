import React, {useState} from 'react';
import {useFormik} from "formik";

import BaseButton from "../components/base/BaseButton/BaseButton";
import Filter from "../components/common/Filter/Filter";
import Todos from "../components/common/Todos/Todos";
import BaseInput from "../components/base/BaseInput/BaseInput";
import Sidebar from "../components/common/Sidebar/Sidebar";
import {useTodos} from "../store";

const Main = () => {
    const [shown, setShown] = useState(false);
    const addTodo = useTodos(state => state.addTodo);
    const count = useTodos(state => state.todos.length);
    const formik = useFormik({
        initialValues: {
            title: ""
        },
        onSubmit(values) {
            setShown(false);
            addTodo(values.title);
            formik.resetForm();
        }
    });

    return (
        <>
            <div className={"container mx-auto min-h-[50vh] py-8"}>
                <Filter />
                <Todos />
            </div>
            <div className={"w-full h-px bg-gray-100"}/>
            <div className={"max-w-3xl mx-auto min-h-[50vh] py-8 flex flex-col items-center"}>
                <div className={"text-center font-bold text-dark mb-4"}>Total todos: { count }</div>
                <BaseButton className={"mb-8 max-w-xs !bg-green !text-white"} onClick={() => setShown(true)}>Add todo</BaseButton>
            </div>
            <Sidebar shown={shown} setState={setShown}>
                <BaseInput
                    name={"title"}
                    value={formik.values.title}
                    placeholder={"type here..."}
                    onChange={formik.handleChange}
                />
                <BaseButton onClick={formik.handleSubmit}>Add</BaseButton>
            </Sidebar>
        </>
    );
};

export default Main;
