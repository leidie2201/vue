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
                        <span>合同管理</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/sh-bg.png" alt=""></li>
                        <li><img src="../../../static/images/sh-gd.png" alt=""></li>
                        <li><img src="../../../static/images/sh-ht.png" alt=""></li>
                        <li><img src="../../../static/images/sh-ps.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>商机管理</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/sj-jz.png" data-src="../images/sj-jz.png" alt=""></li>
                        <li><img src="../../../static/images/sj-ps.png" data-src="../images/sj-ps.png" alt=""></li>
                        <li><img src="../../../static/images/sj-xx.png" data-src="../images/sj-xx.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>投标管理</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/tb-bs.png" data-src="../images/tb-bs.png" alt=""></li>
                        <li><img src="../../../static/images/tb-bzj.png" data-src="../images/tb-bzj.png" alt=""></li>
                        <li><img src="../../../static/images/tb-ps.png" data-src="../images/tb-ps.png" alt=""></li>
                        <li><img src="../../../static/images/tb-zj.png" data-src="../images/tb-zj.png" alt=""></li>
                        <li><img src="../../../static/images/tb-zz.png" data-src="../images/tb-zz.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>销售项目管理</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/gl-rw.png" data-src="../images/gl-rw.png" alt=""></li>
                        <li><img src="../../../static/images/gl-sj.png" data-src="../images/gl-sj.png" alt=""></li>
                        <li><img src="../../../static/images/gl-tg.png" data-src="../images/gl-tg.png" alt=""></li>
                        <li><img src="../../../static/images/gl-th.png" data-src="../images/gl-th.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>产品立项流程</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/lx-lx.png" data-src="../images/lx-lx.png" alt=""></li>
                        <li><img src="../../../static/images/lx-ps.png" data-src="../images/lx-ps.png" alt=""></li>
                        <li><img src="../../../static/images/lx-sz.png" data-src="../images/lx-sz.png" alt=""></li>
                        <li><img src="../../../static/images/lx-wl.png" data-src="../images/lx-wl.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>供应商管理</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/gys-jy.png" data-src="../images/gys-jy.png" alt=""></li>
                        <li><img src="../../../static/images/gys-ps.png" data-src="../images/gys-ps.png" alt=""></li>
                        <li><img src="../../../static/images/gys-rz.png" data-src="../images/gys-rz.png" alt=""></li>
                        <li><img src="../../../static/images/hys-tt.png" data-src="../images/hys-tt.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>事业部管理</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/syb-bg.png" data-src="../images/syb-bg.png" alt=""></li>
                        <li><img src="../../../static/images/syb-rj.png" data-src="../images/syb-rj.png" alt=""></li>
                        <li><img src="../../../static/images/syb-zl.png" data-src="../images/syb-zl.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>财务管理</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/cw-clf.png" data-src="../images/cw-clf.png" alt=""></li>
                        <li><img src="../../../static/images/cw-dj.png" data-src="../images/cw-dj.png" alt=""></li>
                        <li><img src="../../../static/images/cw-fy.png" data-src="../images/cw-fy.png" alt=""></li>
                        <li><img src="../../../static/images/cw-hk.png" data-src="../images/cw-hk.png" alt=""></li>
                        <li><img src="../../../static/images/cw-jz.png" data-src="../images/cw-jz.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>仓库管理</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/ck-dd.png" data-src="../images/ck-dd.png" alt=""></li>
                        <li><img src="../../../static/images/ck-tl.png" data-src="../images/ck-tl.png" alt=""></li>
                        <li><img src="../../../static/images/ck-wl.png" data-src="../images/ck-wl.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>行政管理</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/xz-bg.png" data-src="../images/xz-bg.png" alt=""></li>
                        <li><img src="../../../static/images/xz-cl.png" data-src="../images/xz-cl.png" alt=""></li>
                        <li><img src="../../../static/images/xz-dj.png" data-src="../images/xz-dj.png" alt=""></li>
                        <li><img src="../../../static/images/xz-jc.png" data-src="../images/xz-jc.png" alt=""></li>
                        <li><img src="../../../static/images/xz-yc.png" data-src="../images/xz-yc.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>人事管理</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/rs-ly.png" data-src="../images/rs-ly.png" alt=""></li>
                        <li><img src="../../../static/images/rs-rc.png" data-src="../images/rs-rc.png" alt=""></li>
                        <li><img src="../../../static/images/rs-tx.png" data-src="../images/rs-tx.png" alt=""></li>
                        <li><img src="../../../static/images/rs-zg.png" data-src="../images/rs-zg.png" alt=""></li>
                        <li><img src="../../../static/images/rs-zy.png" data-src="../images/rs-zy.png" alt=""></li>
                        <li><img src="../../../static/images/rs-zz.png" data-src="../images/rs-zz.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>项目竣工</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/jg-nb.png" data-src="../images/jg-nb.png" alt=""></li>
                        <li><img src="../../../static/images/jg-sh.png" data-src="../images/jg-sh.png" alt=""></li>
                        <li><img src="../../../static/images/jg-xz.png" data-src="../images/jg-xz.png" alt=""></li>
                        <li><img src="../../../static/images/jg-yc.png" data-src="../images/jg-yc.png" alt=""></li>
                        <li><img src="../../../static/images/jg-ys.png" data-src="../images/jg-ys.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>项目实施</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/ss-bg.png" data-src="../images/ss-bg.png" alt=""></li>
                        <li><img src="../../../static/images/ss-bgsp.png" data-src="../images/ss-bgsp.png" alt=""></li>
                        <li><img src="../../../static/images/ss-fk.png" data-src="../images/ss-fk.png" alt=""></li>
                        <li><img src="../../../static/images/ss-jd.png" data-src="../images/ss-jd.png" alt=""></li>
                        <li><img src="../../../static/images/ss-js.png" data-src="../images/ss-js.png" alt=""></li>
                        <li><img src="../../../static/images/ss-tfg.png" data-src="../images/ss-tfg.png" alt=""></li>
                    </ul>
                </li>
                <li class="clearfix">
                    <a href="javascript:;">
                        <span>项目准备</span>
                        <i class="iconfont icon-right"></i>
                    </a>
                    <ul class="secondMenu">
                        <li><img src="../../../static/images/zb-fbs.png" data-src="../images/zb-fbs.png" alt=""></li>
                        <li><img src="../../../static/images/zb-rw.png" data-src="../images/zb-rw.png" alt=""></li>
                        <li><img src="../../../static/images/zb-ss.png" data-src="../images/zb-ss.png" alt=""></li>
                        <li><img src="../../../static/images/zb-xx.png" data-src="../images/zb-xx.png" alt=""></li>
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