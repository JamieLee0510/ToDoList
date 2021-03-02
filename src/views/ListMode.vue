<template>
  <div>
    <div class="input_area">
      <el-row :gutter="20">
        <el-col :span="5">
          <el-input
            size="large"
            placeholder="請輸入任務名稱"
            suffix-icon="el-icon-s-order"
            v-model="jobname"
            style="width:256px"
          >
          </el-input>
        </el-col>
        <el-col :span="7">
          <el-date-picker
            v-model="choosetimerange"
            value-format="yyyy-MM-dd"
            type="daterange"
            start-placeholder="選擇開始日期"
            end-placeholder="選擇結束日期"
          >
          </el-date-picker>
        </el-col>
        <el-col :span="4">
          <el-button icon="el-icon-plus" @click="newJob"></el-button>
        </el-col>
      </el-row>
    </div>
    <div class="display_jobs_area">
      <h2>任務列表</h2>

      <el-table
        :data="todoJobs"
        empty-text="還沒有任何代辦任務喔～"
        style="width: 70%"
      >
        <el-table-column prop="title" label="任務項目" width="180">
        </el-table-column>
        <el-table-column prop="start" label="開始日期" width="180">
        </el-table-column>
        <el-table-column prop="end" label="結束日期"> </el-table-column>
        <el-table-column>
          <!-- 暫時性的利用row數來對標到array的index -->
          <template slot-scope="scope">
            <el-button
              icon="el-icon-delete"
              @click="deleteJob(scope.$index)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="display_done_area">
      <h2>完成事項</h2>
      <el-table
        :data="doneJobs"
        empty-text=" "
        :cell-style="{ 'font-style': 'oblique' }"
        style="width: 70%"
      >
        <el-table-column prop="title" label="任務項目" width="180">
        </el-table-column>
        <el-table-column prop="start" label="開始日期" width="180">
        </el-table-column>
        <el-table-column prop="end" label="結束日期"> </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button
              icon="el-icon-delete"
              @click="recoverJob(scope.$index)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobname: "",
      choosetimerange: [],
      todoJobs: this.$store.state.todoJobs,
      doneJobs: this.$store.state.doneJobs,
    };
  },
  methods: {
    newJob() {
      const newJobItem = {
        title: this.jobname,
        start: this.choosetimerange[0],
        end: this.choosetimerange[1],
        cssClass: "family",
        YOUR_DATA: {},
      };
      console.log(newJobItem.start);
      this.$store.commit("pushTodoJobs", newJobItem);
      setTimeout(() => {
        this.jobname = "";
        this.choosetimerange = [];
      }, 0);
    },
    deleteJob(index) {
      this.$store.commit("deleteItem", index);
    },
    recoverJob(index) {
      this.$store.commit("recoverJob", index);
    },
    cellStyle() {
      return "font-style:oblique";
    },
  },
  // watch: {
  //   "$store.state.tableDataX": () => {
  //     this.tableData = this.$store.state.tableDataX;
  //   },
  // },
  computed: {
    getTableData() {
      return this.$store.state.todoJobs, this.$store.state.doneJobs;
    },
  },
};
</script>

<style>
.input_area {
  text-align: center;
}
</style>
