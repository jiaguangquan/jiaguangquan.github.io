//时间戳转化为日期方法
export function formatDate(date){
	// 10位数时间戳
	let newDate = new Date(date * 1000)
	// 13位时间戳
	// let newDate = new Date(date)
	let Y = newDate.getFullYear()
	let m = newDate.getMonth() + 1
	m = m < 10 ? ('0' + m) : m  
	let d = newDate.getDate()
	d = d < 10 ? ('0' + d) : d
	let HH = newDate.getHours()
	HH = HH < 10 ? ('0' + HH) : HH
	let mm = newDate.getMinutes()
	mm = mm < 10 ? ('0' + mm) : mm;    
	let ss = newDate.getSeconds()
	ss = ss < 10 ? ('0' + ss) : ss;
	// console.log(`今天是${Y}年${m}月${d}日 ${HH}时${mm}分${ss}秒`) 
	console.log(`${Y}-${m}-${d} ${HH}:${mm}:${ss}`)
}