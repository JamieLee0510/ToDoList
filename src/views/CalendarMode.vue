<template>
  <full-calendar :events="Events" locale="en"></full-calendar>
</template>

<script>
export default {
  data() {
    return {
      Events: this.$store.state.todoJobs,
    };
  },
  components: {
    "full-calendar": require("vue-fullcalendar"),
  },
  computed: {
    getTableData() {
      return this.$store.state.todoJobs;
    },
  },
};
</script>
