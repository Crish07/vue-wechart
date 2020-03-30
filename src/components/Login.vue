<!--
-- Created by crish on 2019/8/22
-->

<template lang="pug">
  div(class="login")
    span(class="crish") Crish
</template>

<script>
export default {
  name: "Login",
  data () {
    return {};
  },
  created () {
    let that = this;
    // setTimeout(function() {
    //   that.$router.push({
    //     name: 'home_index'
    //   });
    // }, 2000)
    this.getCode();

    // 检测是浏览器端还是微信端
    let ua = navigator.userAgent.toLowerCase();
    if(String(ua.match(/MicroMessenger/i)) === "micromessenger") {
      this.isWechat = true;
    } else {
      this.isWechat = false;
    }
    if(this.isWechaty) {
      //如果为微信端就进行code
      console.log("是微信端");
      this.getCode();
    }
  },
  methods: {
    getCode () {
      let Appid = ""; //为测试号id
      let code = this.getUrlParam("code"); //是否存在code

      let local = ""; // 内网穿透地址
      if(code == null || code == "") {
        //不存在就打开上面的地址进行授权
        window.location.href =
          "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" +
          Appid + "&redirect_uri=" + encodeURIComponent(local) +
          "&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect";
      } else {
        //存在则通过code传向后台调用接口返回微信的个人信息
      }
    },
    //判断code信息是否存在
    getUrlParam (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if(r != null) {
        return unescape(r[2]);
      }
      return null;
    }
  }
};
</script>

<style lang="less">
@import "login.less";
</style>
