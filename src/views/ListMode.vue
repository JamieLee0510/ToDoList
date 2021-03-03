<template>
  <div class="list_mode">
    <div class="input_area">
      <el-row :gutter="20">
        <el-col :xs="4" :md="5">
          <error v-if="!jobname && unfilledName">名稱不能空白</error>
          <p v-else>&nbsp</p>
        </el-col>
        <el-col :xs="20" :md="10">
          <error v-if="!choosetimerange[0] && unfilledDate"
            >日期不能為空白</error
          >
          <p v-else>&nbsp</p>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :xs="4" :md="5">
          <el-input
            size="large"
            placeholder="請輸入任務名稱"
            suffix-icon="el-icon-s-order"
            v-model="jobname"
            style="width:280px"
          >
          </el-input>
        </el-col>
        <el-col :xs="20" :md="10">
          <el-date-picker
            v-model="choosetimerange"
            value-format="yyyy-MM-dd"
            type="daterange"
            start-placeholder="選擇開始日期"
            end-placeholder="選擇結束日期"
          >
          </el-date-picker>

          <el-button
            style="margin-left: 20px"
            icon="el-icon-plus"
            @click="newJob"
          ></el-button>
        </el-col>
      </el-row>
    </div>
    <div class="display_jobs_area">
      <div style="width: 180px">
        <h2>任務列表</h2>
      </div>
      <el-table :data="todoJobs" empty-text="還沒有任何代辦任務喔～">
        <el-table-column prop="title" label="任務項目" width="180">
        </el-table-column>
        <el-table-column prop="start" label="開始日期" width="180">
        </el-table-column>
        <el-table-column prop="end" label="結束日期"> </el-table-column>
        <el-table-column>
          <!-- 暫時性的利用row數來對標到array的index -->
          <template slot-scope="scope">
            <el-button
              icon="el-icon-finished"
              @click="finishJob(scope.$index)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="display_done_area">
      <div style="width: 180px">
        <h2>完成事項</h2>
      </div>
      <el-table
        :data="doneJobs"
        empty-text=" "
        :cell-style="{ 'font-style': 'oblique' }"
      >
        <el-table-column prop="title" label="任務項目" width="180">
        </el-table-column>
        <el-table-column prop="start" label="開始日期" width="180">
        </el-table-column>
        <el-table-column prop="end" label="結束日期"> </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button
              icon="el-icon-refresh"
              @click="recoverJob(scope.$index)"
            ></el-button>
            <el-button
              icon="el-icon-delete"
              @click="deleteJob(scope.$index)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import error from "../components/Error";
export default {
  data() {
    return {
      jobname: "",
      choosetimerange: [],
      todoJobs: this.$store.state.todoJobs,
      doneJobs: this.$store.state.doneJobs,
      unfilledName: false,
      unfilledDate: false,
    };
  },
  methods: {
    newJob() {
      if (!this.jobname && !this.choosetimerange[0]) {
        this.unfilledName = true;
        this.unfilledDate = true;
      } else if (!this.choosetimerange[0]) {
        this.unfilledDate = true;
        this.unfilledName = false;
      } else if (!this.jobname) {
        this.unfilledDate = false;
        this.unfilledName = true;
      } else {
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
          this.unfilledName = false;
          this.unfilledDate = false;
        }, 0);
      }
    },
    finishJob(index) {
      this.$store.commit("finishJob", index);
    },
    recoverJob(index) {
      this.$store.commit("recoverJob", index);
    },
    deleteJob(index) {
      this.$store.commit("deleteJob", index);
    },

    cellStyle() {
      return "font-style:oblique";
    },
  },
  computed: {
    getTableData() {
      return this.$store.state.todoJobs, this.$store.state.doneJobs;
    },
  },
  components: {
    error,
  },
};
</script>

<style>
.input_area {
  text-align: center;
}
/* .list_mode {
  display: flex;
  align-items: center;
  justify-content: center;
} */
</style>
