import { useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { TodoItemType } from '~/domain';
import { todoListState, todoListStatsState, filteredTodoListState, todoListFilterState } from '~/state';
import Layout from '~/components/layout/Layout';

let todoId = 0;
function getId() {
    return todoId++;
}

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

/** 組件：新建任務 */
const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('');
    };

    return (
        <div className={`bg-gray-100`}>
            <input className={`bg-gray-100 rounded-l-sm`} type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
            <button className={`bg-gray-200 rounded-r-sm px-2`} onClick={addItem}>Add</button>
        </div>
    );
}

/** 組件：顯示任務item */
const TodoItem = ({ item }: { item: TodoItemType }) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemText = ({ target: { value } }) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        });
        setTodoList(newList);
    };

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });
        setTodoList(newList);
    };

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);
        setTodoList(newList);
    };

    return (
        <div>
            <input type="text" value={item.text} onChange={editItemText} />
            <input
                type="checkbox"
                checked={item.isComplete}
                onChange={toggleItemCompletion}
            />
            <button onClick={deleteItem}>X</button>
        </div>
    );
}

/** 組件：目前任務的統計數值 */
const TodoListStats = () => {
    const todoListStats = useRecoilValue(todoListStatsState);
    const formattedPercentCompleted = Math.round(todoListStats.percentCompleted);

    return (
        <ul>
            <li>Total items: {todoListStats.totalNum}</li>
            <li>Items completed: {todoListStats.totalCompletedNum}</li>
            <li>Items not completed: {todoListStats.totalUncompletedNum}</li>
            <li>Percent completed: {formattedPercentCompleted}</li>
        </ul>
    );
}

/** 組件：過濾器 */
const TodoListFilters = () => {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({ target: { value } }) => {
        setFilter(value);
    };

    return (
        <>
            Filter:
            <select value={filter} onChange={updateFilter}>
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
        </>
    );
}

/** 頁面：任務列表 */
const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState); // useRecoilValue可直接取得atom狀態值
    return (
        <Layout header={{ title: 'Todo' }} seo={{ pageTitle: 'Todo' }}>
            <TodoListStats />
            <TodoListFilters />
            <TodoItemCreator />
            {todoList.map((todoItem) => (
                <TodoItem key={todoItem.id} item={todoItem} />
            ))}
        </Layout>
    );
}

export default TodoList;