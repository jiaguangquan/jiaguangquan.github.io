<template>
  <div class="clearfix" v-cloak>
    <div class="box">
      <van-form @submit="onSubmit">
          <div class="title">
            <div class="title_center">
              <div class="block"></div>
              <p class="title_center_text">您的评价</p>
            </div>
          </div>
          <div class="satisfaction">
            <div class="star">
              <van-field name="rate" label="满意度">
                <template #input>
                  <van-rate v-model="rate" color="#FFC21F"/>
                </template>
              </van-field>
            </div>
          </div>
          <div class="content">
            <!-- <textarea placeholder="请输入您的评价内容..."></textarea> -->
            <van-field
              v-model="content"
              name="content"
              placeholder="请输入您的评价内容..."
              type="textarea"
              rows="15"
              :rules="[{ required: true, message: '请填写评价内容' }]"
            />
          </div>
          <div style="margin: 16px;" class="whitebg">
                <van-button round block type="info" native-type="submit" class="releaseButton">确认评价</van-button>
            </div>
      </van-form>

    </div>
  </div>
</template>



<script>
import { ytcmsbaseUrl } from '../HTTP';
export default {
  data() {
    return {
      num: 0,
      rate: 5,
      content:"",
      user:{},
      username:'',
      useruuid:''
    };
  },
  created() {
    this.user = JSON.parse(sessionStorage.getItem('userState'))
    this.username = sessionStorage.getItem('username')
    this.useruuid = sessionStorage.getItem('useruuid')
  },
  mounted() {

  },
  methods: {
    jump() {
				this.$router.push({
					name: "details"
        });
			},
    onSubmit(values) {
      // console.log('submit', values);
      let newparams = new URLSearchParams();
			newparams.append('transactid', this.user.id);
			newparams.append('sysid', 53);
			newparams.append('opinion', values.content);
			newparams.append('score', values.rate);
			newparams.append('username', this.username);
			newparams.append('useruuid', this.useruuid);
      this.$Axios.post(ytcmsbaseUrl + '/jact/interface/transactinfo/submitSatisfy.jsp',newparams)
      .then(res=>{
        console.log(res)
        this.$toast.success("评价成功")
        setTimeout(()=>{
          this.$toast.clear()
        },1000)
        this.jump()
      }).catch(err=>{
        console.log(err)
        this.$toast.fail("接口调用失败");
      })
    },
  },
};
</script>
<style lang='less' scoped>
[v-cloak] {
  display: none;
}

p,
span {
  font-size: 30px;
}

.clearfix {
  width: 100%;
  height: 100%;
  background: #fff;
}
.box {
  width: 100%;
  height: 100%;
  position: relative;
}
.title {
  background: #fff;
  width: calc(100%-40px);
  height: auto;
  padding: 30px 0;
  padding-left: 40px;
}

.title_center {
  display: flex;
}

.block {
  width: 8px;
  height: 40px;
  background: #2da8e2;
  margin-top: 2px;
}

.title_center_text {
  font-weight: 600;
  font-size: 36px;
  color: #2da8e2;
  margin-left: 20px;
}
.satisfaction {
  display: flex;
  // width: calc(100%-40px);
  height: auto;
  //   padding: 30px 0;
  padding-left: 40px;
}
.cleanfloat {
  margin-top: -5px;
}
.cleanfloat::after {
  display: block;
  clear: both;
  content: "";
  visibility: hidden;
  height: 0;
}
.content {
  display: flex;
  width: calc(100%-40px);
  height: auto;
  padding: 30px 0;
  padding-left: 40px;
}
.content textarea {
  font-size: 30px;
  width: 95%;
  height: 500px;
  border-bottom: 1px solid #ccc;
  resize: none;
}
.whitebg {
		width: 100%;
		position: fixed;
		height: 152px;
		background: #fff;
		left: 0;
		bottom: 0;
		text-align: center;
		line-height: 152px;
    margin: auto !important;
	}

	.releaseButton {
		width: 94%;
		background: #2DA8E2;
		border-radius: 50px;
		color: #fff;
		text-align: center;
		line-height: 100px;
		height: 100px;
		font-size: 40px;
        display: initial;
	}
/deep/ .van-field__error-message{
    font-size: 18px;
  }
/deep/ .van-field__control{
  width: 95%;
}



/deep/ .van-field{
  padding: 0;
  font-size: 16px;
}

/deep/ .van-field__label{
  width: 50px;
  margin-right: 10px;
}
</style>
