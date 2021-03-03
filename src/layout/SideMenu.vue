<template>
  <el-menu
    default-active="1"
    class="el-menu"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="collapse"
    style="height: 100%"
  >
    <!-- 測試在父組件做collapse -->
    <!-- <el-menu
    default-active="1"
    class="el-menu"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    style="min-height: 100vh"
  > -->
    <el-menu-item index="1" @click="() => $router.push('/todolist-item')">
      <i class="el-icon-document-checked"></i>
      <span slot="title">Todolist</span>
    </el-menu-item>
    <el-menu-item index="2" @click="() => $router.push('/todolist-calendar')">
      <i class="el-icon-date"></i>
      <span slot="title">Calender</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  props: {
    collapse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
