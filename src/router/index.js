import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ToDoList from "../views/ListMode.vue";
import ToDoCalendar from "../views/CalendarMode.vue";
import TestingCalendar from "../views/CalenderTest.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layout/BasicLayout.vue"),
    children: [
      {
        path: "/",
        redirect: "/todolist-item",
      },
      {
        path: "/todolist-item",
        component: ToDoList,
      },
      {
        path: "/todolist-calendar",
        component: ToDoCalendar,
      },
      {
        path: "/testing-calendar",
        component: TestingCalendar,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
