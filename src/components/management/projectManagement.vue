<template>
    <div>
        <header>
            <h3>
                <a href="../index.html" class="iconfont icon-xiangzuo"></a>
                项目服务
            </h3>
        </header>
        <div class="proMenu">
            <ul>
                <li class="clearfix">
                    <router-link :to="'/management/manageDetail'">
                        <img src="../../../static/images/laIcon.jpg" alt="">
                        <span> 立昂技术</span>
                        <i class="iconfont icon-right"></i>
                    </router-link>
                </li>
                <li class="clearfix">
                    <router-link :to="'/management/projectManagement'">
                        <img src="../../../static/images/shIcon.jpg" alt="">
                        <span>盛弘商城</span>
                        <i class="iconfont icon-right"></i>
                    </router-link>
                </li>
                <li class="clearfix">
                    <router-link :to="'/management/fenghuo'">
                        <img src="../../../static/images/fhIcon.jpg" alt="">
                        <span>烽火富华</span>
                        <i class="iconfont icon-right"></i>
                    </router-link>
                </li>
                <li class="clearfix">
                    <router-link :to="'/management/fenjin'">
                        <img src="../../../static/images/fjIcon.jpg" alt="">
                        <span>奋进电力</span>
                        <i class="iconfont icon-right"></i>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style>
    header h3 {
        padding:0.15rem 0;
        font-size: 14px;
    }
    .proMenu {
        margin-bottom: 0.6rem;
    }
    .proMenu ul li {
        border-bottom: 1px solid #ccc;
        height:1.3rem;
        line-height:1.3rem;
        padding: 0 0.2rem;
    }
    .proMenu ul li:nth-child(1) {
        border-top:1px solid #ccc;
    }
    .proMenu ul li a {
        display: inline-block;
        width:100%;
        height:100%;
    }
    .proMenu ul li img {
        margin-right:0.2rem;
        width:0.8rem;
        vertical-align: middle;
    }
    .proMenu ul li i {
        float: right;
    }
</style>