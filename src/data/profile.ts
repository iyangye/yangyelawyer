export interface Skill {
  title: string;
  description: string;
  tags: string[];
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Profile {
  name: string;
  englishName: string;
  tagline: string;
  subTagline: string;
  bio: string[];
  skills: Skill[];
  stats: Stat[];
  email: string;
  phone: string;
  wechat: string;
  offices: {
    name: string;
    address: string;
  }[];
}

export const profile: Profile = {
  name: "杨也律师",
  englishName: "",
  tagline: "",
  subTagline: "",
  bio: [
    "杨也律师毕业于上海交通大学法律硕士专业，本科毕业于华东理工大学化学专业、信息技术与应用第二专业，持有专利代理师资格证书、CompTIA Project+项目管理认证等资质，具有外企、银行、律所的多元工作背景。2019年起开始执业专职从事律师业务，现于上海市杰豪律师事务所从业，执业以来，承办知识产权、公司股权、婚姻家事、劳动人事等民商事诉讼及非诉业务数百起；审阅、修订、起草各类合同逾千份；现担任多家企业常年法律顾问，专业素质和服务能力得到客户的肯定与好评。",
    "代表性案件",
    "2025年代理某公司作为原告起诉侵权方侵害商标权及不正当竞争纠纷案，一审、二审均获全面胜诉。法院采纳代理意见，认定被告构成商标侵权及不正当竞争，判令停止侵权、变更企业名称并赔偿损失，并要求其股东在出资范围内承担补充赔偿责任。",
    "2020年武警上海市总队某支队战士遭遇交通事故。杨律师作为系列案件诉讼代理人，为涉案战士及家属提供法律援助，依法维护他们的合法权益。",
    "2021年杨律师为北京某国资控股企业增资扩股项目提供法律服务，出具法律意见书。"
  ],
  skills: [
    {
      title: "民商事争议解决",
      description: "代理合同纠纷、股权争议、婚姻家事、劳动人事等民商事诉讼与仲裁，提供全流程争议解决方案。",
      tags: ["诉讼与仲裁", "合同纠纷", "股权争议"]
    },
    {
      title: "知识产权保护和维权",
      description: "商标、专利、著作权代理与侵权诉讼，商业秘密保护及不正当竞争纠纷处理，企业知识产权布局。",
      tags: ["商标专利", "侵权诉讼", "不正当竞争"]
    },
    {
      title: "公司常年法律顾问",
      description: "为中小企业提供日常法律支持，审阅修订各类合同，防范经营风险，助力企业稳健发展。",
      tags: ["合同审查", "风险防控", "法律咨询"]
    }
  ],
  stats: [
    { value: 8, suffix: "+", label: "年从业经验" },
    { value: 45, suffix: "+", label: "完成项目" },
    { value: 12, suffix: "", label: "合作客户" },
    { value: 3, suffix: "", label: "设计奖项" }
  ],
  email: "info@yangyelawyer.com",
  phone: "18516093524",
  wechat: "eyangye",
  offices: [
    { name: "浦西办公室", address: "黄浦区陆家浜路1332号南开大厦1404~1405室" },
    { name: "浦东办公室", address: "浦东新区东靖路1831号先行国际综合商务楼806室" }
  ]
};
