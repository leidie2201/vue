<template>
    <div>
        <header>
            <h3>
                <a href="../index.html" class="iconfont icon-xiangzuo"></a>
                关于埃德森
            </h3>
        </header>
        <div class="proBanner">
            <img src="../../../static/images/new.png" alt="">
        </div>
        <div class="proMenu">
            <ul class="tabMenu clearfix">
                <li v-for="(item,index) in tabs"
                    :class="{active:index == num}"
                    @click="tab(index)">{{item}}</li>
            </ul>
            <div class="tabCon">
                <div class="menuinfo" id="enterpriseProfile" v-show=" num == 0">
                    <p>埃德森信息技术有限公司（简称ADS）是2011年创立于武汉东湖国家自主创新示范区的高新技术企业，在北京、上海、广州、成教设有办事处。是全球最大的企业管理软件供应商SAP公司授权的咨询实施服务合作伙伴。</p>
                    <p>ADS咨询实施服务范围包括企业资源规划（ERP）、业务流程管理（BPM）、客户关系管理（CRM）、产品全生命周期管理（PLM）、商务智能（BL）、等企业信息化涉及的各个领域；面向成长型企业开展IT规划、业务流程优化、管理咨询、系统实施、教育培训、应用外包、运维服务等企业信息化各领域的一站式服务，依托国际顶尖的SAP管理软件，凭借国内丰富的咨询经验和雄厚的技术实力，在汽车及汽车零部件、装备制造、石油化工、消费品及零售、专业服务、食品加工、光电子信息等行业积累了丰富的咨询经验。</p>
                    <p>ADS将依托国际顶尖的核心管理技术，凭借多年积累的行业咨询经验，矢志成为最受尊敬的信息技术综合解决方案服务商之一。</p>
                    <p>ADS希望借助世界一流的软件架构平台，结合自身行业业务实践经验，为客户提供全方位、集成化、端到端的企业信息化整体解决方案。ADS愿同客户及合作伙伴一起践行。</p>
                    <p>为社会创造财富，为客户创造最大价值，为家人创造幸福”的使命，提高企业信息化的整体应用水平，为客户持续创造价值。</p>
                </div>
                <div class="menuinfo" id="businessCulture" v-show=" num == 1">
                    <ul class="clearfix">
                        <li>
                            <img src="../../../static/images/us3.jpg" alt="">
                            <p>为客户创造价值</p>
                            <p>为家人创造幸福</p>
                            <p>为公司创造财富</p>
                        </li>
                        <li>
                            <img src="../../../static/images/us4.jpg" alt="">
                            <p>最受尊敬的技术驱动型公司</p>
                        </li>
                        <li>
                            <img src="../../../static/images/us5.jpg" alt="">
                            <p>合作&nbsp;共赢&nbsp;勤勉&nbsp;创新</p>
                        </li>
                        <li>
                            <img src="../../../static/images/us6.jpg" alt="">
                            <p>德为本&nbsp;勤为径</p>
                        </li>
                    </ul>
                </div>
                <div class="menuinfo" id="enterpriseTeam" v-show=" num == 2">
                    <ul class="clearfix">
                        <li>
                            <img src="../../../static/images/anne.jpg" alt="">
                            <p>Anne.Liu</p>
                            <p>联合创始人</p>
                        </li>
                        <li>
                            <img src="../../../static/images/steven.jpg" alt="">
                            <p>Steven.Wang</p>
                            <p>联合创始人</p>
                        </li>
                        <li>
                            <img src="../../../static/images/bang.jpg" alt="">
                            <p>Bang.Li</p>
                            <p>项目总监</p>
                        </li>
                        <li>
                            <img src="../../../static/images/shadow.jpg" alt="">
                            <p>Shadow.Li</p>
                            <p>系统架构师</p>
                        </li>
                    </ul>
                </div>
                <div class="menuinfo" id="honorAptitude" v-show=" num == 3">
                    <ul class="clearfix">
                        <li>
                            <img src="../../../static/images/us8.jpg" alt="">
                            <p>ADS门户管理平台</p>
                        </li>
                        <li>
                            <img src="../../../static/images/us8.jpg" alt="">
                            <p>ADS协同管理平台</p>
                        </li>
                        <li>
                            <img src="../../../static/images/us8.jpg" alt="">
                            <p>ADS移动协同办公管理平台</p>
                        </li>
                        <li>
                            <img src="../../../static/images/us8.jpg" alt="">
                            <p>ADS移动营销管理系统</p>
                        </li>
                        <li>
                            <img src="../../../static/images/us8.jpg" alt="">
                            <p>ADS移动营销管理系统</p>
                        </li>
                        <li>
                            <img src="../../../static/images/us8.jpg" alt="">
                            <p>ADS追溯系统</p>
                        </li>
                        <li>
                            <img src="../../../static/images/us8.jpg" alt="">
                            <p>ADS内容管理平台</p>
                        </li>
                        <li>
                            <img src="../../../static/images/us8.jpg" alt="">
                            <p>高新技术企业认定证书</p>
                        </li>
                        <li>
                            <img src="../../../static/images/us8.jpg" alt="">
                            <p>高新技术企业认定证书</p>
                        </li>
                        <li>
                            <img src="../../../static/images/us8.jpg" alt="">
                            <p>软件企业认定证书</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div style="height: 2rem;"></div>
    </div>
</template>

<script>
    import "../../../static/icon/iconfont.css";
    import "../../../static/icon/base.css";
    export default{
        data(){
            return {
                baseUrl:"http://www.adssap.com:8812",
                tabs: ["企业简介", "企业文化","企业团队","荣誉资质"],
                num:0
            }
        },
        methods:{
            tab(index) {
                this.num = index;
            }
        }
    }
</script>

<style>
    header h3 {
        padding:0.15rem 0;
        font-size: 14px;
    }
    .proBanner img {
        width:100%;
    }
    .proMenu {
        padding:0 0.2rem;
        margin-bottom: 0.4rem;
    }
    .tabMenu {
        width:7.4rem;
        height:0.8rem;
        margin:0.35rem auto;
        background-color: #79c4ee;
    }
    .tabMenu li {
        float: left;
        width:25%;
        font-size: 12px;
        color: #fff;
        line-height: 0.8rem;
        text-align: center;
    }
    .tabMenu li.active {
        background-color: #2796cc;
    }
    .menuinfo li {
        float: left;
        width:50%;
        text-align: center;
    }
    #businessCulture li:nth-child(1),
    #businessCulture li:nth-child(2) {
        height:5rem;
    }
    #enterpriseTeam li,
    #honorAptitude li {
        padding-top: 0.2rem;
    }
    #businessCulture li img {
        height:2.9rem;
    }
    #enterpriseTeam li img {
        height:4rem;
    }
    #honorAptitude li img {
        width:3rem;
    }
    .menuinfo li p {
        text-align: center;
    }
    #enterpriseProfile p {
        text-indent: 0.52rem;
        font-size: 0.3rem;
    }
</style>