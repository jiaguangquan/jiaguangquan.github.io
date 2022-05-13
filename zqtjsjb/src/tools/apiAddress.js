const baseUrl = 'https://ystwx.yantai.gov.cn/approval/api/'
const apis = {
  getNavScene: baseUrl + 'getNavScene', // 获取场景导航
  getStatusItemGroups: baseUrl + 'getStatusItemGroups', // 根据链条叶子节点获取情形分组
  getApplicationInfo: baseUrl + 'getApplicationInfo', // 获取申报信息
  getChainGuide: baseUrl + 'getChainGuide',  // 获取办事指南信息
  submitApplicationInfoOther: baseUrl + 'submitApplicationInfoOther', // 提交申报信息
  getBusinessState: baseUrl + 'getBusinessState', // 查询办件状态
  getUserBusRecord: baseUrl + 'getUserBusRecord', // 查询用户办件记录
  getMappingField: baseUrl + 'getMappingField',//获取表单域值
  getDictInfo: baseUrl + 'getDictInfo', // 查询字典信息
  upload: baseUrl + 'upload', // 图片上传
  uploadFileForBase64:baseUrl + 'uploadFileForBase64',
  imgUrl: 'https://qqx.sdrhup.com/approval/api',
  project:{name: '校车使用许可', gov: '海阳市行政审批服务局',flowId:'D3F71B7FA781429283168A11FB7D229E' }
}
