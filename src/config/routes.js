import { About } from '../components/About';
import { ToDoList } from '../components/Todo';
import { TodoAppTimeline } from '../components/TodoAppTimeline';

export const routes = [
    
    {
        path: "/todo",
        component: ToDoList,
        label: "📋TODO"
    },
    {
        path: "/timeline",
        component: TodoAppTimeline,
        label: "⏰TIMELINE"
    },
    {
        path: "/about",
        component: About,
        label: "👩‍🦰ABOUT"
    }
    
];