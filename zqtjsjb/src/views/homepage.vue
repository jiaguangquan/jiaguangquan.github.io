<template>
	<div class="clearfix" v-cloak>
		<div class="box">
			<div class="banner">
				<img src="../assets/img/banner1.jpg" alt="">
			</div>
			
			
			<div class="list">
				<ul v-if="!empty">
					<van-list
					v-model="loading"
					:finished="finished"
					finished-text="没有更多了"
					@load="onLoad"
					:immediate-check="false"
					>
					<li v-for="user in obj" :key="user.id" @click="jump(user)">
						<div class="list_top">
							<p class="list_top_title">{{user.title}}</p>
							<p class="list_top_state" :class="changeStateColor1(user)">{{user.state}}</p>
						</div>
						<div class="list_center">
							<p>申办状态:	
								<img :src="changeStateColor(user)" />
								<span class="list_center_state" :class="changeStateColor1(user)">{{user.state}}</span>
							</p>
						</div>
						<div class="list_bottom">
							<p>提交时间:<span>{{user.submitdate}}</span></p>
						</div>
					</li>
					</van-list>
				</ul>
				<div class="list_empty" v-else>
					<img src="../assets/img/empty.png" alt="">
					<p>您暂无诉求进行处理</p>
				</div>
			</div>
			<div class="whitebg">
				<button class="releaseButton" @click="release()">提交办件</button>
			</div>
		</div>
	</div>
</template>



<script>
	import { baseUrl,ytcmsbaseUrl } from '../HTTP.js';

	export default {
		data() {
			return {
				empty:false,
				obj:[],
				token:'',
				usertype:'',
				companyName:[],
				companyAddress:[],
				companyCreditcode:[],
				companyContactPerson:[],
				companyContactPhone:[],
				companyUnit:[],
				useruuid:'',
				isCommissioner:false,   //该状态为true时，则代表发布诉求按钮可以正常点击，否则不能正常点击
				pageNum:1,
				loading: false,
				finished: false,
				total:0,
				blue:require('../assets/img/blue.png'),
				yellow:require('../assets/img/yellow.png'),
				green:require('../assets/img/green.png'),
				red:require('../assets/img/red.png'),
				color:''
			};
		},
		created() {
			// let url = 'http://www.baidu.com/getUser?token=100000000000&usertype=1'
			let url = window.location.href
			console.log(url)
			let tokenPre = url.indexOf('token=') + 6
			let tokenNext = url.indexOf('&usertype=')
			let usertypePre = tokenNext + 10
			let usertypeNext = usertypePre + 1
			// console.log(tokenPre,tokenNext)
			let token = url.slice(tokenPre,tokenNext)
			console.log(token,'token')
			let usertype = url.slice(usertypePre,usertypeNext)
			console.log(usertype)
			let isCommissioner = false
			this.isCommissioner = isCommissioner
			// console.log(token,usertype)
			this.$toast.loading({
				message: '加载中...',
				forbidClick: true,
			});
			sessionStorage.setItem('usertoken',token)
			sessionStorage.setItem('usertype',usertype)
			let params = new URLSearchParams();
			params.append('token', token);
			if(usertype == '1'){
				console.log('个人用户')
				this.$Axios.post(baseUrl + '/getInfoByToken',params)
				.then(res=>{
					console.log(res)
					if(res.data.code == '0'){
						this.mation = res
						sessionStorage.setItem("userData",res)
						let userInfomation = res.data.data;
						sessionStorage.setItem('useruuid',userInfomation.uuid)
						this.useruuid = userInfomation.uuid
						sessionStorage.setItem('username',userInfomation.name)
						sessionStorage.setItem('userphone',userInfomation.mobile)
						let newparams = new URLSearchParams();
						newparams.append('name', userInfomation.name);
						newparams.append('idCard', userInfomation.papersnumber);
						this.$Axios.post(ytcmsbaseUrl + '/ytzckgl/interface/ent/query.do',newparams)
						.then(res=>{
							console.log(res)
							this.empty = false
							let arr = res.data.params.ent
							if(arr.length != 0){
								for(let i = 0;i<arr.length;i++){
									this.companyName.push(arr[i].comName)
									this.companyAddress.push(arr[i].comDetial)
									this.companyCreditcode.push(arr[i].unifiedCreditCode)
									this.companyContactPerson.push(arr[i].liaisonMan)
									this.companyContactPhone.push(arr[i].liaisonManTel)
									this.companyUnit.push(arr[i].unit)
								}
								sessionStorage.setItem('companyName',this.companyName)
								sessionStorage.setItem('companyAddress',this.companyAddress)
								sessionStorage.setItem('companyCreditcode',this.companyCreditcode)
								sessionStorage.setItem('companyContactPerson',this.companyContactPerson)
								sessionStorage.setItem('companyContactPhone',this.companyContactPhone)
								sessionStorage.setItem('companyUnit',this.companyUnit)
								this.getHandling(userInfomation.uuid)
								this.isCommissioner = true
							}else{
								this.isCommissioner = false
								this.$Dialog.alert({
									message: '您的账号并非企业服务专员，无法使用该应用',
									confirmButtonText:'退出',
									confirmButtonColor:'#2DA8E2',
									className:'dialogContent'
								})
								setTimeout(()=>{
									this.$toast.clear()
								},1000)
							}
						})
						.catch(err=>{
							console.log(err)
							this.isCommissioner = false
						})
					}else{
						this.$toast.fail(res.data.msg)
						this.isCommissioner = false
					}
				}).catch(err=>{
					console.log(err)
					// this.$toast.fail(err.data.msg)
					// setTimeout(()=>{
					// 	this.$toast.clear()
					// },1000)
				})
			}else if(usertype == '2') {
				console.log('法人用户')
				this.$Axios.post(baseUrl + '/findCorUserByToken',params)
				.then(res=>{
					console.log(res)
					this.$toast({
						message:'您好，请切换至个人账号进行业务查询和处理',
						forbidClick: true,
					})
					setTimeout(()=>{
						this.$toast.clear()
					},2000)
				}).catch(err=>{
					console.log(err)
					this.isCommissioner = false
				})
			}else{
				console.log("暂无可用的身份信息")
				this.isCommissioner = false
			}
			if(this.obj.length == 0){
				this.empty = true
			}
		},
		methods: {
			changeStateColor(data){
				// if(data.statenum == '1'){
				// 	return this.isImgRed(data)
				// 	return this.green
				// }else if(data.statenum == '2'){
				// 	return this.isImgRed(data)
				// 	return this.yellow
				// }else{
				// 	return this.blue
				// }
				// console.log(data,'改变图标颜色')
				if(data.statenum == '1'){  //需求增加逾期状态后，删除此段，使用上面的逻辑
					return this.green
				}else if(data.statenum == '2'){
					return this.yellow
				}else{
					return this.blue
				}
			},
			changeStateColor1(data){   //需求增加逾期状态后，删除此段，使用下面注释的逻辑
				// console.log(data,'改变图标颜色')
				if(data.statenum == '1'){
					return 'green'
				}else if(data.statenum == '2'){
					return 'yellow'
				}else{
					return 'blue'
				}
			},
			// isImgRed(data){
			// 	let submitDate = new Date(data.submitdate).getTime();
			// 	let nowDate = new Date().getTime();
			// 	if(nowDate - submitDate > 432000){
			// 		return this.red
			// 	}
			// },
			
			
			
			
			
			// changeStateColor1(data){
			// 	if(data.statenum == '1'){
			// 		return this.isTextRed(data)
			// 		return 'green'
			// 	}else if(data.statenum == '2'){
			// 		return this.isTextRed(data)
			// 		return 'yellow'
			// 	}else{
			// 		let b = ''
			// 		this.finishIsTextRed(data).then(res=>{
			// 			console.log(res)
			// 		})
			// 		// console.log(b)
			// 		// return b
			// 	}
			// },
			// isTextRed(data){
			// 	let submitDate = new Date(data.submitdate).getTime();
			// 	let nowDate = new Date().getTime();
			// 	if(nowDate - submitDate > 432000){
			// 		return 'red'
			// 	}
			// },
			// async finishIsTextRed(data){
			// 	// console.log(data)
			// 	let submitDate = new Date(data.submitdate).getTime();
			// 	let nowDate = new Date().getTime();
			// 	let newparams = new URLSearchParams();
			// 	newparams.append('sysid',53)
			// 	newparams.append('transactid',data.id)
			// 	let a = ''
			// 	await this.$Axios.post(ytcmsbaseUrl + '/jact/interface/transactinfo/getTransactByIdForJson4YST.jsp',newparams)
			// 	.then(res=>{
			// 		let aDate = new Date(res.data.handle.slice(-1)[0].handletime).getTime()
			// 		if(aDate - submitDate > 432000){
			// 			a = 'red'
			// 			return a;
			// 		}else{
			// 			a = 'green'
			// 			return a;
			// 		}
			// 	})
			// 	.catch(err=>{
			// 		console.log(err)
			// 	})
			// 	return a
			// },
			obj1(){
				console.log(this.obj.length)
			},
			jump(data) {
				sessionStorage.setItem('userState',JSON.stringify(data))
				this.$router.push({
					name: "details",
				});
				console.log(data)
			},
			release(){
				if(this.isCommissioner){
					this.$router.push({
						name: "release",
					});
				}else{
					this.$toast.fail('非企业联络员，请退出')
					setTimeout(()=>{
						this.$toast.clear()
					},3000)
				}	
			},
			getHandling(data){
				let newparams = new URLSearchParams();
				newparams.append('sysid','53')
				newparams.append('useruuid',data)
				newparams.append('pagenum',this.pageNum)
				this.$Axios.post(ytcmsbaseUrl + '/jact/interface/transactinfo/getTransactList4YST.jsp',newparams)
				// this.$Axios.post('/proxyServer/jact/interface/transactinfo/getTransactList4YST.jsp',newparams)
				.then(res=>{
					this.obj = res.data.transactlist
					// console.log(res.data.transactlist)
					this.$toast.clear()
				})	
				.catch(err=>{
					console.log(err)
				})
			},

			getHandling1(){
				let newparams = new URLSearchParams();
				newparams.append('sysid','53')
				newparams.append('useruuid',this.useruuid)
				newparams.append('pagenum',this.pageNum)
				this.$Axios.post(ytcmsbaseUrl + '/jact/interface/transactinfo/getTransactList4YST.jsp',newparams)
				.then(res=>{
					let rows = res.data.transactlist; //请求返回当页的列表
					// console.log(rows)
					this.loading = false;
					this.total = res.data.totalnum; 
					if (rows == null || rows.length == 0) {
						// 加载结束
						this.finished = true;
						return;
					}
					// 将新数据与老数据进行合并
					this.obj = this.obj.concat(rows);
				//如果列表数据条数>=总条数，不再触发滚动加载
					if (this.obj.length >= this.total) {
						this.finished = true;
					}
					this.$toast.clear()
				})	
				.catch(err=>{
					console.log(err)
				})
			},
			onLoad(){
				this.pageNum ++
				this.getHandling1()
			}
			}
		}
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
	}

	.box {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.banner {
		width: 100%;
		height: auto;
	}

	.banner img {
		width: 100%;
	}

	.list {
		width: 100%;
		padding-bottom: 150px;
	}

	.list_empty{
		width: 100%;
		display: flex;
		justify-content: center;
		align-content: center;
		flex-wrap: wrap;
		margin-top: 200px;
	}
	.list_empty img{
		width: 500px;
	}
	.list ul li {
		width: 94%;
		margin: auto;
		border-bottom: 1px solid #ccc;
	}

	.list_top {
		display: flex;
		justify-content: space-between;
		align-content: center;
	}

	.list_top_title {
		font-weight: 600;
		font-size: 36px;
		margin: 30px 0;
		width: 80%;
	}

	.list_top_state {
		width: 120px;
		height: 60px;
		margin-top: 30px;
		text-align: center;
		line-height: 60px;
		border-radius: 10px;
	}

	.green {
		color: green;
	}

	.blue {
		color: skyblue;
	}
	.yellow{
		color: orange;
	}
	.red{
		color: red;
	}

	.bg_green {
		background: #e9ffee;
	}

	.bg_blue {
		background: #EDF7FF;
	}

	.list_center p {
		display: flex;
	}

	.list_center img{
		width: 20px;
		height: 28px;
		margin-left: 6px;
		margin-top: 3px;
	}
	.list_center_state {
		display: block;
		margin-left: 10px;
	}

	.list_bottom {
		margin: 30px 0;
	}

	.list_bottom p {
		display: flex;
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
		background: #2DA8E2;
		border-radius: 50px;
		color: #fff;
		text-align: center;
		line-height: 100px;
		height: 100px;
		font-size: 40px;
	}
	
</style>
