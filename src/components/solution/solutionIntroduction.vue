<template>
    <div>
        <header>
            <h3>
                <a @click="back()" class="iconfont icon-xiangzuo"></a>
                解决方案
            </h3>
        </header>
        <div class="proBanner">
            <img src="../../../static/images/solution-01.png" alt="">
        </div>
        <div class="proMenu">
            <h3>解决方案</h3>
            <ul class="menuList clearfix">
                <li v-for="(item,index) in list" :key="index">
                    <router-link :to="'/producte/details/solution/'+item.info[0].solutions_id">
                        <img v-bind:src="item.info[0].imageUrl" alt="">
                        <p>{{ item.info[0].solutions_title }}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div style="height: 1rem;"></div>
    </div>
</template>

<script>
    import "../../../static/icon/iconfont.css";
    import "../../../static/icon/base.css";
    export default {
        data(){
           return {
               list:[],
               baseUrl:"http://www.adssap.com:8812"
           }
        },
        created(){
            this.getList();
        },
        methods:{
            getList(){
                const url = "/solutionsList";
                this.$http.post(url, {})
                    .then( response => {
                        console.log(response);
                        const data = response.data;
                        this.list = data.data;
                        this.list.forEach(item => {
                            item.info[0].imageUrl = `${this.baseUrl}${item.info[0].solutions_pic}`
                        })
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            },
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