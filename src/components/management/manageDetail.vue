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
                        <span>工作台</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li>
                            <img src="../../../static/images/gzt.png" alt="">
                        </li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>待办流程</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/1.png" data-src="../../../static/images/1.png" alt=""></li>
                        <li><img src="../../../static/images/2.png" data-src="../../../static/images/2.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>人资管理初始化</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/rz-1.png" data-src="../../../static/images/rz-1.png" alt=""></li>
                        <li><img src="../../../static/images/rz-2.png" data-src="../../../static/images/rz-2.png" alt=""></li>
                        <li><img src="../../../static/images/rz-3.png" data-src="../../../static/images/rz-3.png" alt=""></li>
                        <li><img src="../../../static/images/rz-4.png" data-src="../../../static/images/rz-4.png" alt=""></li>
                        <li><img src="../../../static/images/rz-5.png" data-src="../../../static/images/rz-5.png" alt=""></li>
                        <li><img src="../../../static/images/rz-6.png" data-src="../../../static/images/rz-6.png" alt=""></li>
                        <li><img src="../../../static/images/rz-7.png" data-src="../../../static/images/rz-7.png" alt=""></li>
                        <li><img src="../../../static/images/rz-8.png" data-src="../../../static/images/rz-8.png" alt=""></li>
                        <li><img src="../../../static/images/rz-9.png" data-src="../../../static/images/rz-9.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>人资管理之人员档案</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/ry-1.png" data-src="../../../static/images/ry-1.png" alt=""></li>
                        <li><img src="../../../static/images/ry-2.png" data-src="../../../static/images/ry-2.png" alt=""></li>
                        <li><img src="../../../static/images/ry-3.png" data-src="../../../static/images/ry-3.png" alt=""></li>
                        <li><img src="../../../static/images/ry-4.png" data-src="../../../static/images/ry-4.png" alt=""></li>
                        <li><img src="../../../static/images/ry-5.png" data-src="../../../static/images/ry-5.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>人资管理之薪资核算</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/xz-1.png" data-src="../../../static/images/xz-1.png" alt=""></li>
                        <li><img src="../../../static/images/xz-2.png" data-src="../../../static/images/xz-2.png" alt=""></li>
                        <li><img src="../../../static/images/xz-3.png" data-src="../../../static/images/xz-3.png" alt=""></li>
                        <li><img src="../../../static/images/xz-4.png" data-src="../../../static/images/xz-4.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>项目报表</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/bb-1.png" data-src="../../../static/images/bb-1.png" alt=""></li>
                        <li><img src="../../../static/images/bb-2.png" data-src="../../../static/images/bb-2.png" alt=""></li>
                        <li><img src="../../../static/images/bb-3.png" data-src="../../../static/images/bb-3.png" alt=""></li>
                        <li><img src="../../../static/images/bb-4.png" data-src="../../../static/images/bb-4.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>项目竣工</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/jg-1.png" data-src="../../../static/images/jg-1.png" alt=""></li>
                        <li><img src="../../../static/images/jg-2.png" data-src="../../../static/images/jg-2.png" alt=""></li>
                        <li><img src="../../../static/images/jg-3.png" data-src="../../../static/images/jg-3.png" alt=""></li>
                        <li><img src="../../../static/images/jg-4.png" data-src="../../../static/images/jg-4.png" alt=""></li>
                        <li><img src="../../../static/images/jg-5.png" data-src="../../../static/images/jg-5.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>项目实施</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/ss-1.png" data-src="../../../static/images/ss-1.png" alt=""></li>
                        <li><img src="../../../static/images/ss-2.png" data-src="../../../static/images/ss-2.png" alt=""></li>
                        <li><img src="../../../static/images/ss-3.png" data-src="../../../static/images/ss-3.png" alt=""></li>
                        <li><img src="../../../static/images/ss-4.png" data-src="../../../static/images/ss-4.png" alt=""></li>
                        <li><img src="../../../static/images/ss-5.png" data-src="../../../static/images/ss-5.png" alt=""></li>
                        <li><img src="../../../static/images/ss-6.png" data-src="../../../static/images/ss-6.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>项目准备</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/zb-1.png" data-src="../../../static/images/zb-1.png" alt=""></li>
                        <li><img src="../../../static/images/zb-2.png" data-src="../../../static/images/zb-2.png" alt=""></li>
                        <li><img src="../../../static/images/zb-3.png" data-src="../../../static/images/zb-3.png" alt=""></li>
                        <li><img src="../../../static/images/zb-4.png" data-src="../../../static/images/zb-4.png" alt=""></li>
                        <li><img src="../../../static/images/zb-5.png" data-src="../../../static/images/zb-5.png" alt=""></li>
                        <li><img src="../../../static/images/zb-6.png" data-src="../../../static/images/zb-6.png" alt=""></li>
                        <li><img src="../../../static/images/zb-7.png" data-src="../../../static/images/zb-7.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>项目立项详情</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/lx-1.png" data-src="../../../static/images/lx-1.png" alt=""></li>
                        <li><img src="../../../static/images/lx-2.png" data-src="../../../static/images/lx-2.png" alt=""></li>
                        <li><img src="../../../static/images/lx-3.png" data-src="../../../static/images/lx-3.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>销售报表</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/xs-1.png" data-src="../../../static/images/xs-1.png" alt=""></li>
                        <li><img src="../../../static/images/xs-2.png" data-src="../../../static/images/xs-2.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>合同管理</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/ht-1.png" data-src="../../../static/images/ht-1.png" alt=""></li>
                        <li><img src="../../../static/images/ht-2.png" data-src="../../../static/images/ht-2.png" alt=""></li>
                        <li><img src="../../../static/images/ht-3.png" data-src="../../../static/images/ht-3.png" alt=""></li>
                        <li><img src="../../../static/images/ht-4.png" data-src="../../../static/images/ht-4.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>商机管理</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/sj-1.png" data-src="../../../static/images/sj-1.png" alt=""></li>
                        <li><img src="../../../static/images/sj-2.png" data-src="../../../static/images/sj-2.png" alt=""></li>
                        <li><img src="../../../static/images/sj-3.png" data-src="../../../static/images/sj-3.png" alt=""></li>
                        <li><img src="../../../static/images/sj-4.png" data-src="../../../static/images/sj-4.png" alt=""></li>
                        <li><img src="../../../static/images/sj-5.png" data-src="../../../static/images/sj-5.png" alt=""></li>
                        <li><img src="../../../static/images/sj-6.png" data-src="../../../static/images/sj-6.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>投标管理</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/tb-1.png" data-src="../../../static/images/tb-1.png" alt=""></li>
                        <li><img src="../../../static/images/tb-2.png" data-src="../../../static/images/tb-2.png" alt=""></li>
                        <li><img src="../../../static/images/tb-3.png" data-src="../../../static/images/tb-3.png" alt=""></li>
                        <li><img src="../../../static/images/tb-4.png" data-src="../../../static/images/tb-4.png" alt=""></li>
                    </ul>
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