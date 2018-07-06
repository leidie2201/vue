<template>
    <div class="tmpl">
        <div id="header">
            <img src="../../../static/images/logo.jpg" alt="">
        </div>
        <div class="slider">
            <mt-swipe :auto="2000" :show-indicators="false">
                <mt-swipe-item>
                    <img src="../../../static/images/silder1.jpg" width="100%" height="100%" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../../../static/images/silder2.jpg" width="100%" height="100%" alt="">
                </mt-swipe-item>
                <mt-swipe-item>
                    <img src="../../../static/images/silder3.jpg" width="100%" height="100%" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="categoryOfProduct">
            <div class=catProductTop>
                <router-link to="producte/productIntroduction">
                    <p><i class="iconfont icon-ziyuan i_col"></i></p>
                    <p>产品介绍</p>
                </router-link>
                <ul>
                    <li>
                        <router-link to="solution/solutionIntroduction">
                            <p><i class="iconfont icon-dengpao i_col"></i></p>
                            <p>解决方案</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="case/caseIntroduction">
                            <p><i class="iconfont icon-dingdan i_col"></i></p>
                            <p>成功案例</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="news/newsIntroduction">
                            <p><i class="iconfont icon-xinwen-dangqian i_col"></i></p>
                            <p>新闻活动</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="aboutus/aboutIntroduction">
                            <p><i class="iconfont icon-bangzhuguanyuwomen i_col"></i></p>
                            <p>关于埃德森</p>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="catProductBottom">
                <router-link to="project/project">
                    <p><i class="iconfont icon-fenleicur i_col"></i></p>
                    <p>项目服务</p>
                </router-link>
                <router-link to="management/projectManagement">
                    <p><i class="iconfont icon-wo1 i_col"></i></p>
                    <p>项目管理</p>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
    import "../../../static/icon/iconfont.css";
    import "../../../static/icon/base.css";

</script>

<style>
    html,body,.tmpl {
        height: 100%;
    }
    * {
        box-sizing: border-box;
    }
    body {
        color: #fff;
        margin: 0;
    }
    #header {
        padding: 0.2rem 0 0.2rem 0.2rem;
        height: 6%;
    }
    #header img {
        width: 2rem;
        height: 0.6rem;
    }
    .slider {
        height: 30%;
        margin-top: 0.2rem;
    }
    .categoryOfProduct {
        padding-top: 0.2rem;
        padding-left: 0.2rem;
        height: 54%;
    }
    .categoryOfProduct .catProductTop {
        height: 70%;
    }
    .categoryOfProduct .catProductTop > a {
        display: inline-block;
        float: left;
        width: 28%;
        height: 100%;
        font-size: 0.24rem;
        margin-right: 0.1rem;
        background: #71a93c;
        border-radius: 0.1rem;
        text-decoration: none;
        color: #fff;
        font-family: "Microsoft YaHei";
        padding-top: 25%;
    }
    .categoryOfProduct .catProductTop > a p {
        text-align: center;
    }
    .categoryOfProduct .catProductTop > ul {
        height: 100%;
        width: 70%;
        float: left;
        margin: 0;
        list-style: none;
        padding-left: 0;
    }
    .categoryOfProduct .catProductTop > ul li {
        width: 50%;
        height: 50%;
        padding: 0.1rem;
        float: left;
    }
    .categoryOfProduct .catProductTop > ul li:nth-child(1),
    .categoryOfProduct .catProductTop > ul li:nth-child(2) {
        padding-top: 0;
    }
    .categoryOfProduct .catProductTop > ul li:nth-child(3),
    .categoryOfProduct .catProductTop > ul li:nth-child(4) {
        padding-bottom: 0;
    }
    .categoryOfProduct .catProductTop > ul li a {
        display: inline-block;
        height: 100%;
        width: 100%;
        background: #38a9e3;
        border-radius: 5px;
        color: #fff;
        font-family: "Microsoft YaHei";
        text-decoration: none;
        padding-top: 30%;
    }
    .categoryOfProduct .catProductTop > ul li a p {
        text-align: center;
    }
    .categoryOfProduct .catProductBottom {
        height: 24%;
        padding-top: 0.2rem;
    }
    .categoryOfProduct .catProductBottom a {
        display: inline-block;
        color: #fff;
        text-decoration: none;
        text-align: center;
        height: 100%;
        border-radius: 0.1rem;
        padding-top: 4%;
    }
    .categoryOfProduct .catProductBottom a:nth-child(1) {
        background: #38a9e3;
        width: 28%;
        margin-right: 0.16rem;
    }
    .categoryOfProduct .catProductBottom a:nth-child(2) {
        background: #71a93c;
        width: 67%;
    }
</style>