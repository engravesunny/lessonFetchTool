import axios from 'axios'
import { cName,cType,cRwlx,bklx_id,cTeacher,xkxskcgskg } from './config.js'

const request = axios.create({
    baseURL:''
})
const getTotalList = () => request({
    method: 'POST',
    url:'http://jwxt.cumt.edu.cn/jwglxt/xsxk/zzxkyzb_cxZzxkYzbPartDisplay.html?gnmkdm=N253512&su=08212798',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Cookie': 'JSESSIONID=456267C6828E75477E42915F115B9180',
    },
    data: {
        'rwlx': cRwlx,
        'xkly': '0',
        'bklx_id': bklx_id?bklx_id:'0',
        'sfkkjyxdxnxq': '0',
        'xqh_id': '2',
        'jg_id': '08',
        'njdm_id_1': '2021',
        'zyh_id_1': '0810',
        'zyh_id': '0810',
        'zyfx_id': 'C2911FB8EA500010E053C0A86D5D7529',
        'njdm_id': '2021',
        'bh_id': 'DAE5676D2E5F6DAEE0531E70A8C0F500',
        'bjgkczxbbjwcx': '0',
        'xbm': '1',
        'xslbdm': 'wlb',
        'mzm': '01',
        'xz': '4',
        'ccdm': '3',
        'xsbj': '4294967296',
        'sfkknj': '0',
        'sfkkzy': '0',
        'kzybkxy': '0',
        'sfznkx': '0',
        'zdkxms': '0',
        'sfkxq': '1',
        'sfkcfx': '0',
        'kkbk': '0',
        'kkbkdj': '0',
        'sfkgbcx': '0',
        'sfrxtgkcxd': '0',
        'tykczgxdcs': '0',
        'xkxnm': '2023',
        'xkxqm': '3',
        'kklxdm': cType,
        'bbhzxjxb': '0',
        'rlkz': '0',
        'xkzgbj': '0',
        'kspage': '1',
        'jspage': '10',
        'jxbzb': ''
    }
})
const getTargetList = (targetId) => request({
    method: 'POST',
    url:'http://jwxt.cumt.edu.cn/jwglxt/xsxk/zzxkyzbjk_cxJxbWithKchZzxkYzb.html?gnmkdm=N253512&su=08212798',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Cookie': 'JSESSIONID=456267C6828E75477E42915F115B9180',
    },
    data: {
        'rwlx': cRwlx,
        'xkly': '0',
        'bklx_id': bklx_id?bklx_id:'0',
        'sfkkjyxdxnxq': '0',
        'xqh_id': '2',
        'jg_id': '08',
        'zyh_id': '0810',
        'zyfx_id': 'C2911FB8EA500010E053C0A86D5D7529',
        'njdm_id': '2021',
        'bh_id': 'DAE5676D2E5F6DAEE0531E70A8C0F500',
        'xbm': '1',
        'xslbdm': 'wlb',
        'mzm': '01',
        'xz': '4',
        'ccdm': '3',
        'xsbj': '4294967296',
        'sfkknj': '0',
        'sfkkzy': '0',
        'kzybkxy': '0',
        'sfznkx': '0',
        'zdkxms': '0',
        'sfkxq': '1',
        'sfkcfx': '0',
        'bbhzxjxb': '0',
        'kkbk': '0',
        'kkbkdj': '0',
        'xkxnm': '2023',
        'xkxqm': '3',
        'xkxskcgskg':xkxskcgskg?xkxskcgskg:'0',
        'rlkz': '0',
        'kklxdm': cType,
        'kch_id': targetId,
        'jxbzcxskg': '0',
        'xkkz_id': 'FF2DB94316A7FA5AE0531F70A8C014C2',
        'cxbj': '0',
        'fxbj': '0'
    }
})
const getTargetList_P = (targetId) => request({
    method: 'POST',
    url:'http://jwxt.cumt.edu.cn/jwglxt/xsxk/zzxkyzbjk_cxJxbWithKchZzxkYzb.html?gnmkdm=N253512&su=08212798',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Cookie': 'JSESSIONID=456267C6828E75477E42915F115B9180',
        'Origin': 'http://jwxt.cumt.edu.cn',
        'Referer': 'http://jwxt.cumt.edu.cn/jwglxt/xsxk/zzxkyzb_cxZzxkYzbIndex.html?gnmkdm=N253512&layout=default&su=08212798',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.0.0',
        'X-Requested-With': 'XMLHttpRequest'
    },
    data: {
        'rwlx': '3',
        'xkly': '0',
        'bklx_id': '6CD4D518D7AB0172E053C0A86D5CCBB1',
        'sfkkjyxdxnxq': '0',
        'xqh_id': '2',
        'jg_id': '08',
        'zyh_id': '0810',
        'zyfx_id': 'C2911FB8EA500010E053C0A86D5D7529',
        'njdm_id': '2021',
        'bh_id': 'DAE5676D2E5F6DAEE0531E70A8C0F500',
        'xbm': '1',
        'xslbdm': 'wlb',
        'mzm': '01',
        'xz': '4',
        'ccdm': '3',
        'xsbj': '4294967296',
        'sfkknj': '0',
        'sfkkzy': '0',
        'kzybkxy': '0',
        'sfznkx': '0',
        'zdkxms': '0',
        'sfkxq': '1',
        'sfkcfx': '0',
        'bbhzxjxb': '0',
        'kkbk': '0',
        'kkbkdj': '0',
        'xkxnm': '2023',
        'xkxqm': '3',
        'xkxskcgskg': '0',
        'rlkz': '0',
        'kklxdm': '06',
        'kch_id': targetId,
        'jxbzcxskg': '0',
        'xkkz_id': 'FF2DB9431697FA5AE0531F70A8C014C2',
        'cxbj': '0',
        'fxbj': '0'
    }
})

const selectTarget = (jxb_ids,kch_id,kch_Q,credit) => request({
    method: 'POST',
    url:"http://jwxt.cumt.edu.cn/jwglxt/xsxk/zzxkyzbjk_xkBcZyZzxkYzb.html?gnmkdm=N253512&su=08212798",
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        'Cookie': 'JSESSIONID=456267C6828E75477E42915F115B9180',
        'Origin': 'http://jwxt.cumt.edu.cn',
        'Referer': 'http://jwxt.cumt.edu.cn/jwglxt/xsxk/zzxkyzb_cxZzxkYzbIndex.html?gnmkdm=N253512&layout=default&su=08212798',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.0.0',
        'X-Requested-With': 'XMLHttpRequest'
    },
    data: {
        jxb_ids: jxb_ids,
        kch_id: kch_id,
        kcmc: `(${kch_Q})${cName} - ${credit} 学分`,
        rwlx: cRwlx,
        rlkz: '0',
        rlzlkz: '1',
        sxbj: '1',
        xxkbj: '0',
        qz: '0',
        cxbj: '0',
        xkkz_id: 'FF2DB94316A7FA5AE0531F70A8C014C2',
        njdm_id: '2021',
        zyh_id: '0810',
        kklxdm: cType,
        xklc: '1',
        xkxnm: '2023',
        xkxqm: '3',
    }
})
const get =async () => {
    try {
        const {data:totalList} = await getTotalList()
        const cList = totalList?.tmpList
        const target = cList.filter(item=>item.kcmc===cName)[0]
        const kch_id = target.kch_id    // 课程名的课程组id
        const kch_Q = target.kch        // 课程号
        const credit = target.xf        // 学分
        let targetList;
        const res1 = await getTargetList_P(kch_id)
        const res2 = await getTargetList(kch_id)
        if(bklx_id){
            targetList = res1.data
        } else {
            targetList = res2.data
        }
        const targetItem = cTeacher?targetList.filter(item=>item.jsxx.includes(cTeacher))[0]:targetList[0]
        console.log(targetItem);
        const jxb_ids = targetItem.do_jxb_id 
        const { data:flag } = await selectTarget(jxb_ids,kch_id,kch_Q,credit)
        console.log(flag);
    } catch (error) {
        console.log('出错了',error);
    }
}
// get()

const getTest = () => request({
    url:'http://jwxt.cumt.edu.cn/jwglxt/xsxk/zzxkyzb_cxZzxkYzbIndex.html?gnmkdm=N253512&layout=default&su=08212798',
    headers:{
        'Cookie': 'JSESSIONID=456267C6828E75477E42915F115B9180',
    }
})

const test =() => {
    getTest().then(res=>{
        console.log(typeof res.data);
    })
}

test()