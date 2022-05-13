<template>
  <div class="clearfix" v-cloak>
    <div class="box">
      <div class="top">
        <p class="top_title">{{ user.title }}</p>
        <p class="top_state">诉求企业：{{this.companyName}}</p>
        <p class="top_state">联系人：{{this.companyPerson}}</p>
        <p class="top_state">联系电话:{{this.companyPhone}}</p>
        <p class="top_state">企业地址:{{this.companyAddress}}</p>
        <p class="top_date">诉求日期：{{this.submitDate}}</p>
        <div class="top_center">
          <p class="top_state2">是否回复:{{this.schedule.length > 0 ? '是' : '否'}}</p>
          <p class="top_state2">问题描述：{{this.content}}</p>
          <p class="top_state2">
            办理状态:<span :class="changeStateColor(user.statenum)">
              {{user.state}}
            </span>
          </p>
          <!-- <p class="top_date">提交时间:<span>{{this.submitDate}}</span></p> -->
          <div class="top_schedule">
            <span class="top_state">处理流程:</span> 
            <div class="top_schedule_state">
              <ul>
                <li v-for="item in schedule" :key='item.handletime'>
                  <p>处理人：{{item.handleuser}}</p>
                  <p>答复内容：{{item.handlecontent}}</p>
                  <p>处理时间：{{item.handletime}}</p>
                  <p class="arrow"></p>
                </li>
              </ul>
            </div>
          </div>
          <div class="top_schedule" v-if="isSchedule">
            <span class="top_state">处理结果:</span> 
            <div class="top_schedule_state">
              <ul>
                <li>
                  <p>处理人：{{this.scheduleResult.handleuser}}</p>
                  <p>答复内容：{{this.scheduleResult.handlecontent}}</p>
                  <p>处理时间：{{this.scheduleResult.handletime}}</p>
                  <p class="arrow"></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="center">
        <div class="center_title">
          <div class="block"></div>
          <p class="center_title_text">办理内容</p>
        </div>
        <div class="center_content">
          <p>
            {{content}}
          </p>
        </div>
      </div> -->
      <div :class="{'none': state, 'none1': !isevaluate }" class="bottom">
        <div class="bottom_title">
          <div class="block"></div>
          <p class="bottom_title_text">我的评价</p>
        </div>
        <div class="bottom_content">
          <p class="bottom_content_text">
            {{evaluateContent}}
          </p>
          <div class="bottom_content_show">
            <div class="star">
              <van-rate v-model="value" readonly color="#feaf30"/>
            </div>
            <div class="bottom_date">{{evaluateDate}}</div>
          </div>
        </div>
      </div>
    </div>
      <div :class="{'none': state, 'none1': isevaluate }" class="whitebg">
        <button class="releaseButton" @click="jump()">评价</button>
      </div>
  </div>
</template>



<script>
import { ytcmsbaseUrl } from '../HTTP.js';
export default {
  data() {
    return {
      isevaluate: 0,
      state: false,
      value:5,
      user:{},
      content:'',
      evaluateContent:'',
      evaluateDate:'',
      schedule:[],
      scheduleResult:'',
      userName:'',
      userPhone:'',
      submitDate:'',
      companyPerson:'',
      companyPhone:'',
      companyName:'',
      companyAddress:'',
      isSchedule:false
    };
  },
  created() {
    this.user = JSON.parse(sessionStorage.getItem('userState'))
    // console.log(this.user)
    this.getMoreInformation()
    this.$toast.loading({
      message: '加载中...',
      forbidClick: true,
    });
},
  mounted() { 
  },
  methods: {
    changeStateColor(data){
				if(data == '1'){
					return 'green'
				}else if(data == '2'){
					return 'yellow'
				}else if(data == '3'){
					return 'blue'
				}else{
					return 'red'
				}
			},
    jump() {
      this.$router.push({
        name: "evaluate",
      });
    },
    getMoreInformation(){
      let that = this
      let newparams = new URLSearchParams();
			newparams.append('transactid', this.user.id);
			newparams.append('sysid', 53);
      this.$Axios.post(ytcmsbaseUrl + '/jact/interface/transactinfo/getTransactByIdForJson4YST.jsp',newparams)
      .then(res=>{
        console.log(res)
        this.content = res.data.content
        this.isevaluate = res.data.issatisfy
        this.schedule = res.data.handle
        this.scheduleResult = this.schedule.slice(0)
        this.scheduleResult = this.scheduleResult.pop()
        this.userName = res.data.name
        this.userPhone = res.data.mphone
        this.submitDate = res.data.submitdate
        this.companyPerson = res.data.qylxof
        this.companyPhone = res.data.qydhku
        this.companyName = res.data.qymcuq
        this.companyAddress = res.data.qydzyf
        that.scheduleDetails()
        if(this.isevaluate){ 
          this.evaluateContent = res.data.staisfy[0].opinion
          this.value = parseInt(res.data.staisfy[0].score)
          this.evaluateDate = res.data.staisfy[0].satisfytime
        }
        switch(res.data.state){
          case "办理完毕":
            this.state = false
            break
          default:
            this.state = true
            break
        }
        setTimeout(()=>{
          this.$toast.clear()
        },1000)
      })
      .catch(err=>{
        console.log(err)
        setTimeout(()=>{
          this.$toast.clear()
        },1000)
      })
    },
    scheduleDetails(){
      if(this.schedule.length == 0){
        this.isSchedule = false
      }else{
        if(this.scheduleResult.handlecontent == "结束"){
          this.isSchedule = true
        }else{
          this.isSchedule = false
        }
      }
    }
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
  background: #f3f4f6;
  position: relative;
}

.box {
  width: 100%;
  // height: 100%;
  padding-bottom: 152px;
}
.top_title {
  font-weight: 600;
  font-size: 36px;
  padding: 30px 0;
  // width: 80%;
  margin: auto;
  text-align: center;
  background: #fff;
}

.green {
  color: green;
}
.yellow{
  color: orange;
}
.red{
  color: red;
}
.blue {
  color: skyblue;
}

.top_date {
  padding: 10px 0px;
  padding-left: 40px;
  padding-bottom: 20px;
  background: #fff;
}
.top_state{
  padding: 10px 0px;
  padding-left: 40px;
  background: #fff;
}
.top_state1{
  background: #fff;
  margin: 10px auto;
  padding: 20px 0px;
  padding-left: 40px;
}
.top_state2{
  background: #fff;
  margin: 10px auto;
  padding: 20px 0px;
  padding-left: 40px;
}

.top_schedule{
  padding: 20px 0px;
  // padding-left: 40px;
  background: #fff;
  margin: 10px auto;
}

.top_schedule_state{
  padding-left: 40px;
}

.top_schedule ul li{
  float: none;
}

.top_schedule ul li:nth-last-child(1) .arrow{
  border: none;
}

.arrow{
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid skyblue;
  border-bottom: 10px solid skyblue;
  transform: rotate(45deg);
  margin-left: 100px;
}

.center {
  background: #fff;
  margin: 30px auto;
  width: calc(100%-40px);
  height: auto;
  padding: 30px 0;
  padding-left: 40px;
}

.center_title {
  display: flex;
}

.block {
  width: 8px;
  height: 40px;
  background: #2da8e2;
  margin-top: 2px;
}

.center_title_text {
  font-weight: 600;
  font-size: 36px;
  color: #2da8e2;
  margin-left: 20px;
}

.center_content {
  width: 95%;
  margin-top: 30px;
}

.bottom {
  background: #fff;
  width: calc(100%-40px);
  height: auto;
  padding: 30px 0;
  padding-left: 40px;
}

.none {
  display: none;
}
.none1{
  display: none;
}
.bottom_title {
  display: flex;
}

.block {
  width: 8px;
  height: 40px;
  background: #feaf30;
  margin-top: 2px;
}

.bottom_title_text {
  font-weight: 600;
  font-size: 36px;
  color: #feaf30;
  margin-left: 20px;
}

.bottom_content {
  width: 95%;
  margin-top: 30px;
}

.bottom_content_show {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
}

.star {
  font-size: 30px;
}


.bottom_date {
  font-size: 30px;
}

.whitebg {
  width: 100%;
  position: fixed;
  height: 152px;
  background: #f3f4f6;
  left: 0;
  bottom: 0;
  text-align: center;
  line-height: 152px;
}

.releaseButton {
  width: 94%;
  background: #feaf30;
  border-radius: 50px;
  color: #fff;
  text-align: center;
  line-height: 100px;
  height: 100px;
  font-size: 40px;
}

// .cleanfloat::after {
//   display: block;
//   clear: both;
//   content: "";
//   visibility: hidden;
//   height: 0;
// }

// ul li {
//   list-style: none;
//   float: left;
//   font-size: 30px;
//   margin: 5px;
//   color: #ccc;
//   cursor: pointer;
// }

// .hs,
// .cs {
//   color: #f00;
// }
</style>
