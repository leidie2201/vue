<template>
    <div>
        <header>
            <h3>
                <a href="../index.html" class="iconfont icon-xiangzuo"></a>
                项目服务
            </h3>
        </header>
        <div class="proBanner">
            <img src="../../../static/images/sever_1.jpg" alt="">
        </div>
        <div class="proMenu">
            <ul class="tabMenu clearfix">
                <li v-for="(item,index) in tabs"
                    :class="{active:index == num}"
                    @click="tab(index)">{{item}}</li>
            </ul>
            <div class="tabCon">
                <div class="menuinfo" id="projectService">
                    <div class="bannerimg">
                        <img src="../../../static/images/sever.jpg" alt="">
                    </div>
                    <div class="train">
                        <p>
                            ADS作为SAP在华中区域资深服务商，
                            拥有一支超过10年SAP咨询实施服务经验的项目团队，为客户创造价值。
                            实施服务为企业出具各阶段产出的主要标志性文档，每个关键节点都有项目成果交付给企业，
                            并针对项目成果来进行验收和确认，并确保项目能够进行知识转移，并为企业培养系统人才做人才储备。
                            建立内部的业务运作的支持体系；
                            建立内部考核的管理制度及相关指标；
                            建立问题汇报处理及执行的管理体系；
                            建立以ERP为核心的经营管理会议体系；
                        </p>
                        <img src="../../../static/images/serve_15.jpg" alt="">
                    </div>
                </div>
                <div class="menuinfo" id="maintenanceServices">
                    <div class="bannerimg">
                        <img src="../../../static/images/sever_2.jpg" alt="">
                    </div>
                    <div class="train">
                        <p>系统运维及支持服务
                            为确保客户正常使用SAP系统，保证用户的满意度，为客户提供增值服务，ADS提供下列SAP系统维护服务；
                            1、 ERP系统包的应用功能；
                            2、 转告ERP系统新版本的通告；
                            3、 转告ERP系统新的补丁程序包的通告；
                            4、 ERP系统新功能的解释；
                            5、 ERP系统的系统管理指导；
                            6、 通告ERP系统Bug问题；
                            7、 诊断 ERP系统 Bug 问题；
                            8、 帮助甲方测试由ERP公司提供的解决系统Bug问题的补丁程序，并确定Bug问题的解决结果；
                            9、 ERP系统的问题解答及基本的在线培训；</p>
                        <img src="../../../static/images/serve_22.jpg" alt="">
                        <p>
                            系统运维及支持服务
                            为确保客户正常使用SAP系统，保证用户的满意度，为客户提供增值服务，ADS提供下列SAP系统维护服务；
                            1、 ERP系统包的应用功能；
                            2、 转告ERP系统新版本的通告；
                            3、 转告ERP系统新的补丁程序包的通告；
                            4、 ERP系统新功能的解释；
                            5、 ERP系统的系统管理指导；
                            6、 通告ERP系统Bug问题；
                            7、 诊断 ERP系统 Bug 问题；
                            8、 帮助甲方测试由ERP公司提供的解决系统Bug问题的补丁程序，并确定Bug问题的解决结果；
                            9、 ERP系统的问题解答及基本的在线培训；
                        </p>
                    </div>
                </div>
                <div class="menuinfo" id="trainingServices">
                    <div class="bannerimg">
                        <img src="../../../static/images/sever_3.jpg" alt="">
                    </div>
                    <div class="train">
                        <img src="../../../static/images/train_1.png" alt="">
                        <img src="../../../static/images/train_2.png" alt="">
                        <img src="../../../static/images/train_3.png" alt="">
                        <img src="../../../static/images/train_4.png" alt="">
                    </div>
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
                tabs: ["项目服务", "运维服务","培训服务"],
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
        margin-bottom: 0.6rem;
    }
    .tabMenu {
        width:5.8rem;
        height:0.8rem;
        margin:0.35rem auto;
        background-color: #79c4ee;
    }
    .tabMenu li {
        float: left;
        width:33.3%;
        font-size: 12px;
        color: #fff;
        line-height: 0.8rem;
        text-align: center;
    }
    .tabMenu li.active {
        background-color: #2796cc;
    }
    .bannerimg img {
        width:100%;
    }
    .train {
        padding: 0 0.2rem;
    }
    .train p {
        text-indent: 0.52rem;
        margin:0.2rem 0.1rem 0;
    }
    .train img {
        width:100%;
        margin-top:0.2rem;
    }
</style>