<template>
  <div>
    <el-container style="min-height: 100vh">
      <el-aside
        :width="isCollapse ? '60px' : '256px'"
        @mouseenter.native="collapseOpen"
        @mouseleave.native="collapseClose"
      >
        <SideMenu :collapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header
          style="background: #fff; padding: 0; width: 100%;  line-height: 60px;"
        >
          <el-row>
            <el-col :span="1">
              <el-button
                :icon="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
                @click="collapseStatus"
              ></el-button>
            </el-col>
            <el-col :span="23">
              <div style="width:160px; height:70px">
                <img
                  src="../assets/todolistimg.png"
                  alt=""
                  style="width: 100%; height: 100%; object-fit: cover"
                />
              </div>
            </el-col>
          </el-row>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>

        <el-footer style="text-align: center">
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./Header";
import Footer from "./Footer";
import SideMenu from "./SideMenu";
export default {
  data() {
    return {
      collapseBtnClick: false,
      isCollapse: true,
    };
  },
  methods: {
    collapseStatus() {
      this.collapseBtnClick = this.isCollapse;
      this.isCollapse = !this.isCollapse;
    },
    collapseOpen() {
      if (this.collapseBtnClick) return;
      this.isCollapse = false;
    },
    collapseClose() {
      if (this.collapseBtnClick) return;
      this.isCollapse = true;
    },
  },
  components: {
    Header,
    Footer,
    SideMenu,
  },
};
</script>

<style>
.el-main {
  text-align: center;
}
</style>
