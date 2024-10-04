export const typeCategoryId1 = "填空题";
export const typeCategoryId2 = "简答题";
export const typeCategoryId3 = "多选题";
export const typeCategoryId4 = "选择题";
export const typeCategoryId5 = "信息块";


export const typeCategoryIds = {
    typeCategoryId1, typeCategoryId2, typeCategoryId3, typeCategoryId4, typeCategoryId5
}

export const typeCategory: Array<any> = [
    { id: typeCategoryId1, title: "填空题" },
    { id: typeCategoryId2, title: "简答题" },
    { id: typeCategoryId3, title: "多选题" },
    { id: typeCategoryId4, title: "选择题" },
    { id: typeCategoryId5, title: "信息块" },
];


export const recordCategoryId1 = "不记录";
export const recordCategoryId2 = "评估程度值";
export const recordCategoryId3 = "记录程度值";
export const recordCategoryId4 = "记录数据";

export const recordCategoryIds = {
    recordCategoryId1, recordCategoryId2, recordCategoryId3, recordCategoryId4, typeCategoryId5
}

export const recordCategory: Array<any> = [
    { id: recordCategoryId1, title: "不记录", remark: "填写的信息不会被记录或参与评估" },
    { id: recordCategoryId2, title: "评估程度值", remark: "填写值对应的程度值将参与总分评估" },
    { id: recordCategoryId3, title: "记录程度值", remark: "将填写值对应的程度值记录到数据库" },
    { id: recordCategoryId4, title: "记录数据", remark: "将填写值记录到数据库" },
];

export const questionnaireTypeQuestionnaire = "Questionnaire";
export const questionnaireTypeCapture = "Capture";
export const questionnaireTypeReport = "Report";
export const questionnaireTypeMessage = "Message";

export const questionnaireTypeCategory: Array<any> = [
    { id: questionnaireTypeQuestionnaire, title: "问卷" },
    { id: questionnaireTypeCapture, title: "采集" },
    { id: questionnaireTypeReport, title: "报告" },
    { id: questionnaireTypeMessage, title: "消息" },
];

export const valueRecordChartPropertyTypeCategory: Array<any> = [
    { id: "customLine", title: "自定义线" },
    { id: "customPoint", title: "自定义标志" },
    { id: "avgLine", title: "平均线" },
    { id: "highestPoint", title: "最高位标志" },
    { id: "lowestPoint", title: "最低位标志" },
];

export const notificationSeverityTypeCategory: Array<any> = [
    { id: "info", title: "普通通知" },
    { id: "success", title: "成功通知" },
    { id: "warn", title: "警告通知" },
    { id: "error", title: "错误通知" },
    { id: "fatal", title: "严重错误通知" },
];


export const answerTypeCategory: Array<any> = [
    { id: "预设选项", title: "预设选项", disabled: false },
    { id: "自填选项", title: "自填选项", disabled: false },
];

export const sexCategory: Array<any> = [
    { id: "male", title: "男" },
    { id: "female", title: "女" },
];

export const educationCategory: Array<any> = [
    { id: "文盲", title: "文盲" },
    { id: "小学", title: "小学" },
    { id: "初中", title: "初中" },
    { id: "高中", title: "高中" },
    { id: "中专", title: "中专" },
    { id: "大学", title: "大学" },
    { id: "研究生", title: "研究生" },
    { id: "其他", title: "其他" },
];
export const userSalutationCategory: Array<any> = [
    { id: "先生", title: "先生" },
    { id: "女士", title: "女士" },
    { id: "医生", title: "医生" },
    { id: "博士", title: "博士" },
    { id: "护士", title: "护士" },
];

export const clientSalutationCategory: Array<any> = [
    { id: "先生", title: "先生" },
    { id: "女士", title: "女士" },
    { id: "太太", title: "太太" },
    { id: "小姐", title: "小姐" },
    { id: "其他", title: "其他" },
];

export const clientTypeCategory: Array<any> = [
    { id: "endUser", title: "最终用户(其他)" },
    { id: "endUser-patient", title: "病人" },
    { id: "endUser-familyMember", title: "家属" },
];
export const userTypeCategory: Array<any> = [
    { id: "businessUser", title: "企业用户" },
    { id: "businessAdmin", title: "企业管理员" },
];

export const allUserTypeCategory: Array<any> = clientTypeCategory.concat(userTypeCategory)


export const statusCategory: Array<any> = [
    { id: "注册-在家里", title: "注册-在家里" },
    { id: "注册-在医院", title: "注册-在医院" },
    { id: "已暂停", title: "已暂停" },
    { id: "已出院", title: "已出院" },
    { id: "已康复", title: "已康复" },
    { id: "已死亡", title: "已死亡" },
];
export const displayTypeCategory: Array<any> = [
    { id: "饼图", title: "饼图" },
    { id: "折线图", title: "折线图" },
    { id: "直方图", title: "直方图" },
];

export const triggerTypeCategory: Array<any> = [
    { id: "ban", title: "禁用" },
    { id: "unban", title: "解除禁用" },
    { id: "collapse", title: "隐藏" },
    { id: "display", title: "显示" },
];

export const clientNoteTypeCategory: Array<any> = [
    { id: "临床备注", title: "临床备注" },
    { id: "管理员备注", title: "管理员备注" },
    { id: "应急处理", title: "应急处理" },
    { id: "其他备注", title: "其他备注" },
];
export const clientFollowupTypeCategory: Array<any> = [
    { id: "术后随访", title: "术后随访" },
    { id: "科研随访", title: "科研随访" },
    { id: "满意度调查", title: "满意度调查" },
];

export const trackingCaseStatusCategory: Array<any> = [
    { id: "已停止", title: "已停止" },
    { id: "已开始", title: "已开始" },
];
export const medicalTypeList: Array<any> = [
    { id: "RX", title: "处方药" },
    { id: "OTC", title: "非处方药" },
];

export const reservationTypeCategory: Array<any> = [
    { id: "普通预约", title: "普通预约" },
    { id: "专家预约", title: "专家预约" },
    { id: "普通挂号", title: "普通挂号" },
    { id: "专家挂号", title: "专家挂号" },
    { id: "续方购药", title: "续方购药" },
];

export const orderStatusTypeList: Array<any> = [
    { id: "已下单", title: "已下单" },
    { id: "已支付", title: "已支付" },
    { id: "已完成", title: "已完成(正常流转完毕)" },
    { id: "已关闭", title: "已关闭(未支付的正常流转完毕)" },
    { id: "已取消", title: "已取消(包含退款的流转完毕)" },
    { id: "已退款", title: "已退款" },
];
// "A", "B", "O", "AB", "Rh+", "Rh-"
export const bloodTypeList: Array<any> = [
    { id: "A", title: "A型" },
    { id: "B", title: "B型" },
    { id: "O", title: "O型" },
    { id: "AB", title: "AB型" },
    { id: "Rh+", title: "Rh+型" },
    { id: "Rh-", title: "Rh-型" },

];

// "未婚", "已婚", "离异", "丧偶"
export const marriageTypeList: Array<any> = [
    { id: "未婚", title: "未婚" },
    { id: "已婚", title: "已婚" },
    { id: "离异", title: "离异" },
    { id: "丧偶", title: "丧偶" },
];


// "自费", "职工医保", "其他"
export const medicalInsuranceTypeList: Array<any> = [
    { id: "自费", title: "自费" },
    { id: "职工医保", title: "职工医保" },
    { id: "其他", title: "其他" },
];

export const clientNumberTypeList: Array<any> = [
    { id: "就诊卡号", title: "就诊卡号" },
];

export const payTypeList: Array<any> = [
    { id: "未支付", title: "未支付" },
    { id: "已支付", title: "已支付" },
];

export const auditTypeList: Array<any> = [
    { id: "审核中", title: "审核中" },
    { id: "已通过", title: "已通过" },
    { id: "未通过", title: "未通过" },
];

export const refundTypeList: Array<any> = [
    { id: "人工申请", title: "人工申请" },
    { id: "系统申请", title: "系统申请" },
];

// 诊断意见: 医师诊断 ，药师诊断，2：门诊诊断）
export const clinicTypeList: Array<any> = [
    { id: "医师诊断", title: "医师诊断" },
    { id: "药师诊断", title: "药师诊断" },
    { id: "门诊诊断", title: "门诊诊断" },
];

// '问诊状态 1已预约未支付 2用户取消 3超时支付取消 4已付款等待视频 5已付款已过号 6申请退款中 7已退款 8拒绝退款 9退款中 10完成就诊待评价 11已评价 12就诊中 13同意退款 14历史未就诊 15未审方 16审方通过（患者未查看待取药） 17未通过 18患者已查看（待取药）'
export const reservationStatusList: Array<any> = [
    { id: "已预约", title: "已预约未支付" },
    { id: "已取消", title: "用户取消" },
    { id: "已付款", title: "已付款等待问诊" },
    { id: "已过号", title: "已付款已过号" },
    { id: "申请退款中", title: "申请退款中" },
    { id: "已退款", title: "已退款" },
    { id: "拒绝退款", title: "拒绝退款" },
    { id: "退款中", title: "退款中" },
    { id: "待评价", title: "完成就诊待评价" },
    { id: "已评价", title: "已评价" },
    { id: "就诊中", title: "就诊中" },
    { id: "同意退款", title: "同意退款" },
];

const a = [...Array(26).keys()].map(i => String.fromCharCode(i + 65))
const b = [...Array(10).keys()].map(i => i.toString())
export const titleCategory: Array<string> = a.concat(b)

export const pickerOptions = {
    disabledDate(time) {
        var zero = new Date();
        zero.setHours(0);
        zero.setMinutes(0);
        zero.setSeconds(-1);
        return time.getTime() < zero;
    },
    shortcuts: [
        {
            text: '今天',
            onClick(picker) {
                picker.$emit('pick', new Date());
            }
        },
        {
            text: '明天',
            onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() + 3600 * 1000 * 24);
                picker.$emit('pick', date);
            }
        },
        {
            text: '后天',
            onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() + 3600 * 1000 * 24 * 2);
                picker.$emit('pick', date);
            }
        },
        {
            text: '一周后',
            onClick(picker) {
                const date = new Date();
                date.setTime(date.getTime() + 3600 * 1000 * 24 * 7);
                picker.$emit('pick', date);
            }
        }
    ]
}


export const pickerRangeOptions = {
    disabledDate(time) {
        var zero = new Date();
        zero.setHours(0);
        zero.setMinutes(0);
        zero.setSeconds(-1);
        return time.getTime() < zero;
    },
    shortcuts: [{
        text: '最近一周',
        onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
        }
    }, {
        text: '最近一个月',
        onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
        }
    }, {
        text: '最近三个月',
        onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
        }
    }]
}

export const rankTypeCategory: Array<any> = [
    { id: "评价人数", title: "评价人数", disabled: false },
    { id: "评价星级", title: "评价星级", disabled: false },
    { id: "姓名", title: "姓名", disabled: false },
];


export const employeeTitleCategory: Array<any> = [
    { id: "主任医师", title: "主任医师", disabled: false },
    { id: "副主任医师", title: "副主任医师", disabled: false },
    { id: "主治医师", title: "主治医师", disabled: false },
    { id: "医师", title: "医师", disabled: false },
    { id: "医士", title: "医士", disabled: false },
];