// sino-tek.com 内容数据
// 从原站 HTML 提取，集中管理，方便后续修改

export const company = {
  name: '飞鹏盛元科技发展有限公司',
  brand: 'SINO-TEK',
  fullName: '天津飞鹏盛元科技发展有限公司',
  englishName: 'Tianjin Sino-tek Technologies Development Co.,Ltd.',
  email: 'sunny.sun@sino-tek.com',
  phone: '022-83719540',
  address: '天津市华苑产业区华天道8号海泰信息广场D座601室',
  copyright: '© Tianjin Sino-tek Technologies Development Co.,Ltd.',
}

export const nav = [
  { label: '首页', href: '#home' },
  { label: '关于我们', href: '#service' },
  { label: '新闻中心', href: '#news' },
]

export const heroSlides = [
  {
    bg: 'mhero-1.jpg',
    sub: '提供专业技术解决方案',
    title: '致力于专业技术\n为行业提供量身定制的优秀解决方案',
    btn: '探索我们的服务',
  },
  {
    bg: 'mhero-2.jpg',
    sub: '用心服务客户',
    title: '科技助推产业发展\n创新打造无限商机',
    btn: '探索我们的服务',
  },
  {
    bg: 'mhero-3.jpg',
    sub: '为用户创造价值 实现自我发展',
    title: '为用户创造价值的同时\n推动公司发展步伐\n为用户提供更专业的服务',
    btn: '探索我们的服务',
  },
  {
    bg: 'mhero-4.jpg',
    sub: '诚信·专业·责任',
    title: '诚信是基础\n专业是保障\n责任是态度',
    btn: '探索我们的服务',
  },
]

export const features = [
  {
    icon: 'icon-1.svg',
    tag: '售前',
    title: '创新的行业解决方案',
  },
  {
    icon: 'icon-2.svg',
    tag: '服务',
    title: '全程服务',
    active: true,
  },
  {
    icon: 'icon-3.svg',
    tag: '售后',
    title: '一流的客户支持',
  },
]

export const serviceIntro = {
  tag: '深耕行业领域',
  title: '致力于为行业提供系统专业的解决方案',
  desc1: '自2004年起飞鹏公司陆续服务了金融、政法科技服务、检验鉴定、医疗、教育等多个行业领域。平均行业服务年限超过5年，最长行业服务年限超过10年。能够详细并持续的了解行业领域业务需要，为客户提供精练的专业技术解决方案，获得了客户的信任和支持。',
  desc2: '先后获得ISO90001、ISO27001认证，以及CMMI3认证。多次被评为国家级高新技术企业和软件企业，并拥有五十余件软件著作权和产品登记证书。',
  stats: [
    { num: '5', unit: '年+', label: '平均行业服务年限' },
    { num: '10', unit: '年+', label: '最长行业服务年限' },
  ],
  tabs: [
    {
      id: 'cert-national',
      label: '国家认证',
      items: ['天津市高新技术企业', '国家高新技术企业认证', '软件企业、国科小企业认证'],
    },
    {
      id: 'cert-industry',
      label: '行业标准认证',
      items: ['ISO90001', 'ISO27001', 'CMMI3'],
    },
    {
      id: 'cert-software',
      label: '软著认证',
      items: ['软件著作证书', '产品登记证书'],
    },
  ],
}

export const partners = [
  '人民银行', '交通银行', '农业银行',
  '新疆中保司法鉴定中心', '广西融安司法鉴定中心',
  '中国汽车技术研究中心有限公司', '中国汽车工业工程有限公司',
  '天津市科技局', '天津市科学技术信息研究所',
  '新疆农垦建设兵团', '天津市水务局',
  '天津市高新技术成果转化中心', '天津市稀贵金属及合金产业中心',
  '天津卖买界工业联盟', '铁道部第一设计院',
  'Vishay通用半导体（中国）有限公司', 'Danaher—Setra传感控制（中国）有限公司',
  '天津医科大学总医院', '天津市第一中心医院',
  '天津骨科医院', '天津市教育科学院附属医院',
  '银行卡发股份有限公司', '霸州市梁平医院',
  '霸州市清真医院', '霸州梁平母幼保健院',
  '霸州市雄县人民医院', '山东诸葛亮妇幼保健院',
  '河南省秦岭港港口医院', '河南省通许县中顺心中医院',
  '环境保护科技公司',
]

export const projects = [
  {
    id: 1,
    title: '阿波罗麻醉质控系统',
    desc: '阿波罗质控系统建立了完整的围麻醉期工作流程，以及电子麻醉医嘱、同时，包含医护工作绩效(绩效)、质控系统各种报表的自动生成与下载等，严格根据国家最新麻醉质量控制中心要求设计。',
    img: 'project-01.jpg',
  },
  {
    id: 2,
    title: '科技项目管理平台',
    desc: '主要实现科技项目全流程统一管理，为资金预算、项目申请、项目审评、项目立项、协议签订、年度检查、经费验收等项目管理工作提供了全面的在线服务,同时平台支持科技工作相关数据与其他系统平台之间的数据交互，提高科技项目管理效率。',
    img: 'project-02.jpg',
  },
  {
    id: 3,
    title: '津门便民支付APP',
    desc: '与津门日报工业联盟合作，主要为市民的生活缴费提供便利服务。包括交通违章网款缴纳，水电煤气费用缴纳，医院预约挂号缴费等日常便民缴费功能。',
    img: 'project-03.jpg',
  },
  {
    id: 4,
    title: '天津市科技计划项目\n管理信息系统APP',
    desc: 'APP主要为科技项目管理平台提供辅助业务操作支持，包含两部分核心功能：业务审批流程支持和业务数据查询统计。',
    img: 'project-04.jpg',
  },
  {
    id: 5,
    title: '阿波罗麻醉质控\n互联平台系统',
    desc: '阿波罗麻醉质控互联平台系统主要分为系统平台和移动巡访记录两部分。移动巡访记录主要为系统平台提供辅助支持服务，方便医护人员进行每日的移动巡访记录，减轻医务人员的书写记录负担，提高工作效率。',
    img: 'project-05.jpg',
  },
  {
    id: 6,
    title: '电力电子APP',
    desc: '电力电子APP主要为电力系统的设备提供运行情况统计的功能，对电力系统业务线路的全部设备进行监控，包括摄像头、麦克风、温湿度传感器、智能断路终端、高频屏蔽传感器等，统计出设备总量，哪些场景下哪些设备存在哪方面问题，方便用户对设备的运行状态进行管理。',
    img: 'project-06.jpg',
  },
]

export const systemCategories = [
  {
    icon: 'flaticon-microchip',
    title: '管理系统',
    desc: '包括ERP、CRM、HRM、SCM、CMS、财务管理、项目管理、医疗信息、教育管理、资产管理、知识管理等。',
  },
  {
    icon: 'flaticon-cloud-storage',
    title: '云计算平台',
    desc: '包括基础设施即服务（IaaS）、平台即服务（PaaS）和软件即服务（SaaS）等。',
    active: true,
  },
  {
    icon: 'flaticon-gear',
    title: '移动端',
    desc: '包括iOS应用、Android应用、微信小程序、支付宝小程序、百度智能小程序、字节跳动小程序、快应用等。',
  },
]

export const orgStructure = [
  {
    img: 'team-01.jpg',
    title: '过程管理组',
    desc: '负责项目执行过程改进、文件更新、基线及遗留事件处理方案等。',
  },
  {
    img: 'team-02.jpg',
    title: '研发组',
    desc: '负责为项目制定专业的技术解决方案并保证实施。',
  },
  {
    img: 'team-03.jpg',
    title: '质量保证组',
    desc: '负责按照技术标准和规范对项目产品进行检验，保证产品整体质量。',
  },
  {
    img: 'team-04.jpg',
    title: '运维实施组',
    desc: '负责项目实施运维，现场调配，技术支持等。',
  },
]

export const devProcess = [
  { step: '需求分析', desc: '详细了解客户需求，确定项目目标和范围', img: '01.jpg' },
  { step: '项目规划', desc: '制定详细的项目计划，包括时间表、团队和资源分配', img: '02.jpg' },
  { step: '设计阶段', desc: '创建用户界面和体验的设计方案', img: '03.jpg' },
  { step: '开发阶段', desc: '进行前端和后端开发，确保功能实现', img: '04.jpg' },
  { step: '质量保证', desc: '进行全面的测试，确保产品质量和稳定性', img: '05.jpg' },
  { step: '项目部署', desc: '将项目上线，并确保平稳过渡', img: '06.jpg' },
  { step: '后续支持', desc: '提供持续的维护和支持服务', img: '07.jpg' },
]

export const stats = [
  { icon: 'flaticon-earth-globe', num: 35, label: '合作企业及机构' },
  { icon: 'flaticon-verified', num: 100, label: '优质的研发成果' },
  { icon: 'flaticon-financial-profit', num: 10, label: '每年的合作项目' },
  { icon: 'flaticon-infrastructure', num: 23, label: '经验丰富的工程师' },
]

export const news = [
  {
    date: '2023年9月',
    img: 'new-01.jpg',
    title: '全面响应"互联网+科技服务"政策，支持科技企业、服务机构、政府部门等用户在移动应用、应用便利性、管理科学化等方面的服务需求',
  },
  {
    date: '2022年5月',
    img: 'new-01.jpg',
    title: '铁路局小程序全部功能已开发完成，并且已于2021年7月底正式上线运行。',
  },
]

export const footerLinks = [
  { label: '深耕行业领域', href: '#service' },
  { label: '研发成果', href: '#project' },
  { label: '软件部组织结构', href: '#structure' },
  { label: '开发流程', href: '#process' },
  { label: '新闻动态', href: '#news' },
]
