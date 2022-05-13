<template>
	<div class="clearfix" v-cloak>
		<div class="box">
            <van-form @submit="onSubmit">
			<div class="top">
                <div class="top_title">
					<div class="block"></div>
					<p class="top_title_text">基本信息</p>
				</div>
            </div>
            <div class="content">
                    <van-cell-group inset>
                        <van-field
                            v-model="username1"
                            name="name"
                            label="姓名"
                            placeholder="请输入姓名"
                            input-align="right"
                            required
                            readonly
                            :rules="[{ required: true}]"
                        />
                        <van-field
                            readonly
                            clickable
                            label="企业名称"
                            name="companyName"
                            :value="cpyvalue"
                            placeholder="请选择企业"
                            @click="cpyShowPicker = true"
                            input-align="right"
                            is-link
                            class="requiredStar"
                        />
                        <van-popup v-model="cpyShowPicker" round position="bottom">
                            <van-picker
                                show-toolbar
                                :columns="cpyColumns"
                                @cancel="cpyShowPicker = false"
                                @confirm="onConfirmcpy"
                            />
                        </van-popup>

                        <van-field
                            v-model="companyUnit"
                            name="companyUnit"
                            label="专员所属单位"
                            input-align="right"
                            required
                            readonly
                            :rules="[{ required: true}]"
                        />




                        <van-field
                            v-model="phone1"
                            name="phone"
                            label="联系方式"
                            placeholder="请输入联系方式"
                            input-align="right"
                            required
                            readonly
                            :rules="[{ required: true}]"
                        />
                        <van-field
                            readonly
                            clickable
                            name="sfdaddress"
                            label="事发地"
                            :value="sfdvalue"
                            placeholder="请选择事发地"
                            @click="sfdShowPicker = true"
                            input-align="right"
                            is-link
                            class="requiredStar"
                        />
                        <van-popup v-model="sfdShowPicker" position="bottom">
                            <van-picker show-toolbar :columns="sfdColumns" @cancel="sfdShowPicker = false" @confirm="onConfirmsfd" @change="onChange" />
                        </van-popup>






                        <!-- 修改办件类别为二级联动 -->
                        <van-field
                            readonly
                            clickable
                            name="newsCategory"
                            label="办件类别"
                            :value="newsValue"
                            placeholder="请选择办件类别"
                            @click="newsShowPicker = true"
                            input-align="right"
                            is-link
                            class="requiredStar"
                        />
                        <van-popup v-model="newsShowPicker" round position="bottom">
                            <van-picker
                                show-toolbar
                                @change="onChange1"
                                :columns="newsColumns"
                                @cancel="newsShowPicker = false"
                                @confirm="onConfirmnews"
                            />
                        </van-popup>


                        <!-- 新增解决主体字段 -->
                        <van-field
                            readonly
                            clickable
                            name="solveCategory"
                            label="解决主体"
                            :value="newsSolve"
                            placeholder="请选择解决主体"
                            @click="solveShowPicker = true"
                            input-align="right"
                            is-link
                            class="requiredStar"
                        />
                        <van-popup v-model="solveShowPicker" round position="bottom">
                            <van-picker
                                show-toolbar
                                :columns="solveColumns"
                                @cancel="solveShowPicker = false"
                                @confirm="onConfirmSolve"
                            />
                        </van-popup>



                        <van-field name="secrecyRadio" required>
                            <template #input>
                                <div>
                                    <p class="checkraidotext">是否保密</p>
                                    <van-radio-group v-model="secrecyRadio" direction="horizontal">
                                        <van-radio name="是" style="font-size:16px">是</van-radio>
                                        <van-radio name="否" style="font-size:16px">否</van-radio>
                                    </van-radio-group>
                                </div>
                            </template>
                        </van-field>
                        <van-field name="urgentRadio" required>
                            <template #input>
                                <div>
                                    <p class="checkraidotext">紧急程度</p>
                                    <van-radio-group v-model="urgentRadio" direction="horizontal">
                                        <van-radio name="紧急" style="font-size:16px">紧急</van-radio>
                                        <van-radio name="非紧急" style="font-size:16px">非紧急</van-radio>
                                    </van-radio-group>
                                </div>
                            </template>
                        </van-field>
                        
                        <van-field class="textareaBox">
                            <template #input>
                                <div class="textarealtbox textarealtboxRequired">
                                    <p class="checkraidotext">办件标题</p>
                                    <van-field
                                        v-model="consultTitle"
                                        autosize
                                        type="textarea"
                                        placeholder="请输入办件标题"
                                        class="textareaMessage"
                                        name="consultTitle"
                                        :rules="[{ required: true }]"
                                    />  
                                </div>
                            </template>
                        </van-field>
                        <van-field class="textareaBox">
                            <template #input>
                                <div class="textarealtbox textarealtboxRequired">
                                    <p class="checkraidotext">办件内容</p>
                                    <van-field
                                        v-model="consultContent"
                                        rows="3"
                                        autosize
                                        type="textarea"
                                        placeholder="请输入办件内容"
                                        class="textareaMessage"
                                        name="consultContent" 
                                        :rules="[{ required: true }]"
                                    />  
                                </div>
                            </template>
                        </van-field>



                        <van-field  class="textareaBox">
                            <template #input>
                                <div class="textarealtbox textarealtboxRequired">
                                    <p class="checkraidotext">建议办理单位</p>
                                    <van-field
                                        v-model="handlingUnit"
                                        rows="2"
                                        autosize
                                        type="textarea"
                                        placeholder="请输入单位"
                                        class="textareaMessage"
                                        name="handlingUnit"
                                        :rules="[{ required: true}]"
                                    />  
                                </div>
                            </template>
                        </van-field>
                        
                        <!-- <van-field name="consultContent" class="textareaBox">
                            <template #input>
                                <div class="textarealtbox">
                                    <p class="checkraidotext">附件</p>
                                    
                                </div>
                            </template>
                        </van-field> -->
                        <van-field name="uploader" class="textareaBox">
                            <template #input>
                                <div class="textarealtbox">
                                    <p class="checkraidotext">附件</p>
                                    <van-uploader 
                                    :upload-icon="require('../assets/img/upload.png')" 
                                    v-model="uploader" 
                                    multiple 
                                    :max-size="10 * 1024 * 1024" 
                                    @oversize="onOversize"
                                    :preview-size="80" 
                                    upload-text="选择附件"
                                    :after-read="afterRead"
                                    :max-count="1"
                                    accept="image/*"
                                    />
                                    <p class="uploadExplain">*仅支持10M以内的图片</p>
                                </div>
                            </template>
                        </van-field>
                    </van-cell-group>
            </div>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
            </van-form>
		</div>
	</div>
</template>



<script>
import { zqtbaseUrl,ytcmsbaseUrl } from '../HTTP';
const category = {
        '问题类': ['能耗煤耗问题', '审批服务问题', '基础设施配套问题', '法律问题', '资金问题','人才用工问题','生态环保问题','安全生产问题','科技创新问题','疫情防控问题','其他个性问题'],
        '建议类': ['政策类建议', '工作类建议'],
        '咨询类': ['政策咨询', '其他咨询'],
        '其他类': ['无'],
    };
	export default {
		data() {
			return {
				username: '',
				username1: '',
                password: '',
                show: false,
                phone:'',
                phone1:'',
                cpyvalue: '',
                companyAddress:'',
                cpyShowPicker: false,
                cpyColumns: [],
                cpyUnitColumns:[],
                sfdvalue: '',
                sfdShowPicker:false,
                sfdColumns:  [{
                                values: ['请选择']
                                }, {
                                values: ['请选择']
                                }, {
                                values: ['请选择']
                                }],
                firstArr: [],
                firstCode: 0,
                secondArr: [],
                secondCode: 0,
                newsValue:'',
                newsShowPicker:false,
                newsColumns: [
                    {
                        values: Object.keys(category),
                        className: 'column1'
                    },
                    {
                        values: category['问题类'],
                        className: 'column2',
                        defaultIndex: 0
                    }
                    
                ],
                secrecyRadio:'1',
                urgentRadio:'1',
                handlingUnit:'',
                consultTitle:'',
                consultContent:'',
                uploader:[],
                filepath:'',
                useruuid:'',
                companyCreditcode:'',
                companyContactPerson:'',
                companyContactPhone:'',
                companyUnit:'',
                newsSolve:'',
                solveColumns: ['区市已解决','市级部门已解决','需区市解决','需市级部门解决','需市级专班解决'],
                solveShowPicker:false,
			};
		},
		created() {
			this.getArea()
            //获取当前用户绑定的名下企业
            this.getCompanyName()
            this.useruuid = sessionStorage.getItem('useruuid')
            this.username = sessionStorage.getItem('username')
            this.username1 = this.passName(this.username)
            this.phone = sessionStorage.getItem('userphone')
            this.phone1 = this.passMobile(this.phone)
            // console.log(this.username)
		},
		mounted() {

		},
		methods: {
            getArea() {
                // getArea(data).then(res => {
                this.$Axios.post( zqtbaseUrl +  '/ytqyfw/front/appeal/org.do?code=0').then(res => {
                console.log('getArea',res)
                this.firstArr = res.data
                let data = []
                res.data.forEach(item => {
                    data.push(item.orgname)
                })
                this.sfdColumns[0].values = ['请选择']
                this.sfdColumns[0].values.push(...data);
                // console.log(this.columns)
                })
            },
			jump() {
				this.$router.push({
					name: "homepage",
                    query: {
                        token:sessionStorage.getItem('usertoken'),
                        usertype:sessionStorage.getItem('usertype')
                    }
				});
			},
            onSubmit(values) {
                values['filepath'] = this.filepath
                if(!values.companyName){
                    this.$toast.fail('请选择企业');
                    setTimeout(()=>{
                        this.$toast.clear()
                    },2000)
                    return;
                }else if(!values.sfdaddress){
                    this.$toast.fail('请选择事发地');
                    setTimeout(()=>{
                        this.$toast.clear()
                    },2000)
                    return;
                }else if(!this.newsValue){
                    this.$toast.fail('请选择办件类别');
                    setTimeout(()=>{
                        this.$toast.clear()
                    },2000)
                    return;
                }else if(!this.newsSolve){
                    this.$toast.fail('请选择解决主体');
                    setTimeout(()=>{
                        this.$toast.clear()
                    },2000)
                    return;
                }
                console.log('submit', values);
                this.$toast.loading({
                        message: '提交中...',
                        forbidClick: true,
                });
                console.log(this.username)
                let newparams = new URLSearchParams();
				newparams.append('sysid', '53');
				newparams.append('name', this.username);
				newparams.append('qymcuq', values.companyName);
				newparams.append('mphone', this.phone);
				newparams.append('sfdkyv', values.sfdaddress);
				newparams.append('zxlblm', this.newsValue);
				newparams.append('sfbmke', values.secrecyRadio);
				newparams.append('jjcdjm', values.urgentRadio);
				newparams.append('jyblnj', values.handlingUnit);
				newparams.append('zxbtus', values.consultTitle);
				newparams.append('title', values.consultTitle);
				newparams.append('zxnrsi', values.consultContent);
				newparams.append('content', values.consultContent);
				// newparams.append('fjipvg', values.filepath);
				newparams.append('memberuuid', this.useruuid);
				newparams.append('filepath', values.filepath);
				newparams.append('qydzyf', this.companyAddress);
				newparams.append('qytypg', this.companyCreditcode);
				newparams.append('qylxof', this.companyContactPerson);
				newparams.append('qydhku', this.companyContactPhone);
				newparams.append('zyssgr', this.companyUnit);
				newparams.append('groupid', '3754');
                newparams.append('jjztne',this.newsSolve);
                // console.log(newparams)
                this.$Axios.post(ytcmsbaseUrl + '/jact/interface/transactinfo/mailwrite.jsp',newparams)
                .then(res=>{
                    console.log(res)
                    if(res.data.result == 'success'){
                        this.$toast.success(res.data.message)
                        setTimeout(()=>{
                            this.$toast.clear()
                        },1000)
                        this.jump()
                    }else{
                        this.$toast.fail(res.data.message)
                        setTimeout(()=>{
                            this.$toast.clear()
                        },1000)
                    }
                })
                .catch(err=>{
                    console.log(err)
                    this.$toast.fail('接口提交失败')
                        setTimeout(()=>{
                            this.$toast.clear()
                        },1000)
                })
            },
            showPopup() {
                this.show = true;
            },
            onConfirmcpy(value,index) {
                this.cpyvalue = value;
                this.cpyShowPicker = false;
                this.getCompanyAddress(index)
                this.getCompanyCreditcode(index)
                this.getCompanyContactPerson(index)
                this.getCompanyContactPhone(index)
                this.getCompanyUnit(index)
            },
            onConfirmcpyUnit(value){
                this.cpyUnit = value;
                this.cpyUnitShowPicker = false;
            },
            onConfirmSolve(value){
                this.newsSolve = value;
                this.solveShowPicker = false;
            },
            onConfirmsfd(value) {
                let a = value.toString()
                let b = a.replace(/,/g, '')
                let c = b.replace("请选择", '')
                let d = c.replace("请选择", '')
                this.sfdvalue = d.replace("请选择", '')
                this.sfdShowPicker = false
            },
            onChange(picker, values,index) {
            let info = picker.getValues()
        if( info[0] == '请选择') {
          this.sfdColumns[1].values = ['请选择']
          this.sfdColumns[2].values = ['请选择']
        }
        if( info[1] == '请选择') {
          this.sfdColumns[2].values = ['请选择']
        }
        if (index == 0) {
          this.firstArr.forEach(item => {
            if (item.orgname == info[0]) {
              this.firstCode = item.code
              this.$Axios.post( zqtbaseUrl +  `/ytqyfw/front/appeal/org.do?code=${this.firstCode}`).then(res => {
                this.secondArr = res.data
                let data = []
                res.data.forEach(item => {
                  data.push(item.orgname)
                })
                this.sfdColumns[1].values = ['请选择']
                this.sfdColumns[1].values.push(...data);
                this.sfdColumns[2].values = ['请选择'];
                // console.log(this.columns, "数据")
              })
            }
          })
          // picker.setColumnValues(1, cities[values[0]]);
        }
        if (index == 1) {
          this.secondArr.forEach(item => {
            if (item.orgname == info[1]) {
              this.secondCode = item.code
              // getArea(data).then(res => {
              this.$Axios.post(zqtbaseUrl + `/ytqyfw/front/appeal/org.do?code=${this.secondCode}`).then(res => {
                // console.log(res, "接口返回")
                let data = []
                res.data.forEach(item => {
                  data.push(item.orgname)
                })
                this.sfdColumns[2].values = ['请选择']
                this.sfdColumns[2].values.push(...data);
                // console.log(this.columns, "数据")
              })
            }
          })
          // picker.setColumnValues(1, cities[values[0]]);
        }
            },
            onChange1(picker, values) {
                picker.setColumnValues(1, category[values[0]]);
                // console.log(values)
            },
            onConfirmnews(value) {
                this.newsValue = value[0] + '-' + value[1]
                console.log(value)
                this.newsShowPicker = false;
            },
            afterRead(){
                this.$toast.loading({
                    message: '图片上传中...',
                    forbidClick: true,
                });
                let formData = new FormData();
                formData.append('file', this.uploader[0].file);
                let config1 = {
                    headers: { //添加请求头
                        "Content-Type": "multipart/form-data"
                    }
                };
                // console.log(data)
                this.$Axios.post(ytcmsbaseUrl + '/jact/interface/transactinfo/upfile.jsp',formData,config1)
                .then(res=>{
                    console.log(res)
                    if(res.data.result == 'success'){
                        this.filepath = res.data.message
                        this.$toast.success('图片上传成功')
                        setTimeout(()=>{
                            this.$toast.clear()
                        },1000)
                    }else{
                        this.$toast.success('图片上传失败，请重新上传图片')
                        setTimeout(()=>{
                            this.$toast.clear()
                        },1000)
                    }
                })
                .catch(err=>{
                    console.log(err)
                    this.$toast.fail('图片上传失败，请重新上传图片')
                        setTimeout(()=>{
                            this.$toast.clear()
                        },1000)
                })

            },
            onOversize() {
                this.$toast('图片大小不能超过 10M');
                setTimeout(()=>{
                            this.$toast.clear()
                        },1000)
            },
            getCompanyName(){
               let companyName = sessionStorage.getItem('companyName')
                this.cpyColumns = companyName.split(',')
            },

            getCompanyUnit(index){
                let companyUnit = sessionStorage.getItem('companyUnit')
                let cpyUnitColumns = companyUnit.split(',')
                this.companyUnit =  cpyUnitColumns[index]
                console.log(this.companyUnit)
            },

            getCompanyAddress(index){
                let companyAddress = sessionStorage.getItem('companyAddress')
                let cpyadColumns = companyAddress.split(',')
                this.companyAddress =  cpyadColumns[index]
                console.log(this.companyAddress)
            },
            getCompanyCreditcode(index){
                let companyCreditcode = sessionStorage.getItem('companyCreditcode')
                let cpyadColumns = companyCreditcode.split(',')
                this.companyCreditcode =  cpyadColumns[index]
                console.log(this.companyCreditcode)
            },
            getCompanyContactPerson(index){
                let companyContactPerson = sessionStorage.getItem('companyContactPerson')
                let cpyadColumns = companyContactPerson.split(',')
                this.companyContactPerson =  cpyadColumns[index]
                console.log(this.companyContactPerson)
            },
            getCompanyContactPhone(index){
                let companyContactPhone = sessionStorage.getItem('companyContactPhone')
                let cpyadColumns = companyContactPhone.split(',')
                this.companyContactPhone =  cpyadColumns[index]
                console.log(this.companyContactPhone)
            },
            // getCategory(){
            //     let newparams = new URLSearchParams();
			// 	newparams.append('dicmark', 'Dic0000000032');
            //     this.$Axios.post(ytcmsbaseUrl + '/jact/interface/transactinfo/getValueByDicmark.jsp',newparams)
            //     .then(res=>{
            //         let arr = res.data.dicdetail
            //         for(let i = 0;i<arr.length;i++){
            //             this.newsColumns.push(arr[i].name)
            //         }
            //     })
            //     .catch(err=>{
            //         console.log(err)
            //     })
            // },
            //手机号脱敏
			passMobile(str) {
				// str = str.toString();
				if (null != str && str != undefined) {
				var pat = /(\d{3})\d*(\d{4})/;
				return str.replace(pat, "$1****$2");
				} else {
				return "";
				}
			},
			//姓名脱敏
			passName(str) {
				// str = str.toString();
				if (null != str && str != undefined) {
				if (str.length <= 3) {
					return "*" + str.substring(1, str.length);
				} else if (str.length > 3 && str.length <= 6) {
					return "**" + str.substring(2, str.length);
				} else if (str.length > 6) {
					return str.substring(0, 2) + "****" + str.substring(6, str.length);
				}
				} else {
				return "";
				}
			},

		},
	};
</script>
<style lang='less' scoped>
	[v-cloak] {
		display: none;
	}

	p,
	span,
    input{
		font-size: 40px;
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
	.green {
		color: green;
	}

	.blue {
		color: skyblue;
	}

    .top {
		background: #fff;
		width: calc(100%-40px);
		height: auto;
		padding: 30px 0;
		padding-left: 40px;
	}
    .top_title {
		display: flex;
	}

	.block {
		width: 8px;
		height: 40px;
		background: #2DA8E2;
		margin-top: 2px
	}

	.top_title_text {
		font-weight: 600;
		font-size: 36px;
		color: #2DA8E2;
		margin-left: 20px;
	}
    .checkraidotext{
        font-size: 30px;
        color: #646566;
    }
    .van-radio-group--horizontal{
        margin-top: 10px;
    }
    .textareaBox{
        width: 100%;
    }
    .textarealtbox{
        width: 100%;
    }
    .textarealtboxRequired{
        display: flex;
        flex-wrap: wrap;
    }
    .textarealtboxRequired::before{
        position: absolute;
        left: -15px;
        color: #ee0a24;
        font-size: 28px;
        content: '*';
    }
    .textareaMessage{
        padding: 10px 0px;
    }
    .uploadExplain{
        color: red;
        font-size: 32px;
    }
    .van-uploader{
        margin: 10px auto;
    }
    /deep/ .van-uploader__upload input{
        margin: 0;
        width: 100%;
    }
    .van-uploader__upload{
        width: 320px !important;
        height: 200px !important;
    }
    .requiredStar::before{
        position: absolute;
        left: 15px;
        color: #ee0a24;
        font-size: 30px;
        content: '*';
    }
    /deep/ .van-uploader__upload{
        width: 150px !important;
        height: 120px !important;
    }
    /deep/ .van-field__error-message{
        text-align: right;
    }
	// .whitebg {
	// 	width: 100%;
	// 	position: fixed;
	// 	height: 152px;
	// 	background: #fff;
	// 	left: 0;
	// 	bottom: 0;
	// 	text-align: center;
	// 	line-height: 152px;
	// }

	// .releaseButton {
	// 	width: 94%;
	// 	background: #2DA8E2;
	// 	border-radius: 50px;
	// 	color: #fff;
	// 	text-align: center;
	// 	line-height: 100px;
	// 	height: 100px;
	// 	font-size: 40px;
    //     display: initial;
	// }

</style>
