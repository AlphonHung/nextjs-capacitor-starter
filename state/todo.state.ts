import { atom, selector } from 'recoil';
import { TodoItemType } from '~/domain';

// Recoil教學文 https://ithelp.ithome.com.tw/articles/10251071

/** State: 工作列表 */
export const todoListState = atom<TodoItemType[]>({
    key: 'todoListState',
    default: [],
});

/** State: 過濾器狀態 */
export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All',
});

/** Computed: 整合原始列表與過濾器狀態，整理出應顯示出的列表 */
export const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({ get }) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch (filter) {
            case 'Show Completed':
                return list.filter((item) => item.isComplete);
            case 'Show Uncompleted':
                return list.filter((item) => !item.isComplete);
            default:
                return list;
        }
    },
});

/** Computed: 計算目前列表各種數值 */
export const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({ get }) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;

        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted,
        };
    },
});