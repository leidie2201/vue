<template>
    <div>
        <header>
            <h3>
                <a @click="back()" class="iconfont icon-xiangzuo"></a>
                详情
            </h3>
        </header>
        <div class="proMenu">
            <ul>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>我的工作台</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <!--<li><img src="../../../static/images/fh-81.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-82.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-83.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-84.png" alt=""></li>-->
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>工程管理</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <!--<li><img src="../../../static/images/fh-22.png" data-src="../../../static/images/fh-22.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-23.png" data-src="../../../static/images/fh-23.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-24.png" data-src="../../../static/images/fh-24.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-25.png" data-src="../../../static/images/fh-25.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-26.png" data-src="../../../static/images/fh-26.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-27.png" data-src="../../../static/images/fh-27.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-28.png" data-src="../../../static/images/fh-28.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-29.png" data-src="../../../static/images/fh-29.png" alt=""></li>-->
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>公共业务</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <!--<li><img src="../../../static/images/fh-45.png" data-src="../../../static/images/fh-45.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-46.png" data-src="../../../static/images/fh-46.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-47.png" data-src="../../../static/images/fh-47.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-48.png" data-src="../../../static/images/fh-48.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-49.png" data-src="../../../static/images/fh-49.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-50.png" data-src="../../../static/images/fh-50.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-51.png" data-src="../../../static/images/fh-51.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-52.png" data-src="../../../static/images/fh-52.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-53.png" data-src="../../../static/images/fh-53.png" alt=""></li>-->
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>技术中心</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <!--<li><img src="../../../static/images/fh-74.png" data-src="../../../static/images/fh-74.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-75.png" data-src="../../../static/images/fh-75.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-76.png" data-src="../../../static/images/fh-76.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-77.png" data-src="../../../static/images/fh-77.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-78.png" data-src="../../../static/images/fh-78.png" alt=""></li>-->
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>报表</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <!--<ul class="secondMenu">-->
                        <!--<li><img src="../../../static/images/fh-1.png" data-src="../../../static/images/fh-1.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-2.png" data-src="../../../static/images/fh-2.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-3.png" data-src="../../../static/images/fh-3.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-4.png" data-src="../../../static/images/fh-4.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-5.png" data-src="../../../static/images/fh-5.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-6.png" data-src="../../../static/images/fh-6.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-7.png" data-src="../../../static/images/fh-7.png" alt=""></li>-->
                        <!--<li><img src="../../../static/images/fh-8.png" data-src="../../../static/images/fh-8.png" alt=""></li>-->
                    <!--</ul>-->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import "../../../static/icon/iconfont.css";
    import "../../../static/icon/base.css";
    export default {
        data(){
            return {

            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            }
        }
    }
</script>

<style>
    header h3 {
        padding:0.15rem 0;
        font-size: 14px;
    }
    .proMenu {
        margin-bottom: 0.2rem;
    }
    .proMenu ul li.active a{
        color: rgb(18, 134, 228);
    }
    .proMenu ul li:nth-child(1) {
        border-top:1px solid #ccc;
    }
    .proMenu ul li a {
        display: inline-block;
        width:100%;
        height:0.8rem;
        line-height:0.8rem;
        padding: 0 0.2rem;
        border-bottom: 1px solid #ccc;
    }
    .proMenu ul li i {
        float: right;
    }
    .secondMenu {
        padding:0 0.1rem;
        display: none;
    }
    .secondMenu img {
        width:100%;
    }
</style>