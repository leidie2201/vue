<template>
    <div class="tpl">
        <header>
            <h3>
                <a @click="back()" class="iconfont icon-xiangzuo"></a>
                产品介绍
            </h3>
        </header>
        <div class="proBanner">
            <img src="../../../static/images/product.jpg" alt="">
        </div>
        <div class="proMenu">
            <h3>产品介绍</h3>
            <ul class="menuList clearfix">
                <li v-for="(item,index) in dataList" :key="index">
                    <router-link :to="'/producte/details/product/'+item.product_id">
                        <img v-bind:src="item.imageUrl" alt="">
                        <p>{{ item.product_title }}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div style="height: 0.5rem"></div>
    </div>
</template>

<script>
    import "../../../static/icon/iconfont.css";
    import "../../../static/icon/base.css";
    export default {
        data(){
            return {
                dataList: [],
                baseUrl:"http://www.adssap.com:8812"
            }
        },
        // 页面中的data和methods对象创建完毕后会自动调用created方法
        created() {
            this.getList();
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            getList(){
                const url = "/productList";
                let that = this
                this.$http.post(url, {})
                    .then( response => {
                        const data = response.data;
                        that.dataList = data.data;
                        that.dataList.forEach(item => {
                            item.imageUrl = `${that.baseUrl}${item.product_pic}`
                        })
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
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
    }
    .proMenu h3 {
        height:0.6rem;
        width:2.5rem;
        margin:0.3rem auto;
        color: #fff;
        text-align: center;
        line-height: 0.6rem;
        background: #2796cc;
        font-weight: normal;
    }
    .menuList {
        margin-bottom:1rem;
    }
    .menuList li{
        float: left;
        width:50%;
        height:4rem;
        padding-right: 0.2rem;
        margin-bottom:0.2rem;
    }
    .menuList li:nth-child(2n) {
        padding-right: 0;
    }
    .menuList li a {
        display: inline-block;
        width:100%;
    }
    .menuList li a img {
        width:100%;
        height:3rem;
    }
    .menuList li a p {
        text-align: center;
        font-size: 0.12rem;
    }
</style>