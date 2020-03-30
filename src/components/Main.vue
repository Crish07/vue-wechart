<!--
-- Created by crish on 2019/8/22
-->

<template>
  <van-collapse v-model="activeNames">
    <van-collapse-item name="1">
      <div slot="title">标题1
        <van-icon name="question-o" />
      </div>
      内容
    </van-collapse-item>

    <van-collapse-item title="标题2"
                       name="2"
                       icon="shop-o">
      内容
    </van-collapse-item>
  </van-collapse>
</template>

<script>
export default {
  name: "Main",
  components: {},
  computed: {
    menuList() {
      return this.$store.state.app.menuList;
    }
  },
  data() {
    return {
      activeNames: ['1']
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$store.commit("app/updateMenulist");
    }
  },
  watch: {
    $route(to) {
      console.log(to);
    }
  }
};
</script>

<style lang="less">
@import "main.less";
</style>
