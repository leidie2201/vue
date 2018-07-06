<template>
    <div>
        <header>
            <h3>
                <a href="../index.html" class="iconfont icon-xiangzuo"></a>
                成功案例
            </h3>
        </header>
        <div class="proBanner">
            <img src="../../../static/images/case.jpg" alt="">
        </div>
        <div class="proMenu">
            <h3>成功案例</h3>
            <div class="caseList">
                <div class="caseMenu" v-for="(item,index) in list" :key="index">
                    <p class="menuTitle">{{ item.casename }}</p>
                    <ul class="menuList clearfix">
                        <li v-for="(value,index) in item.info" :key="index">
                            <router-link :to="'/producte/details/case/'+value.id">
                               <img v-bind:src="value.imageUrl" alt="">
                               <p>{{ value.title }}</p>
                            </router-link>
                        </li>
                    }
                    </ul>
                </div>
            </div>
        </div>
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
                const url = "/caseStreamline";
                var that = this;
                this.$http.post(url, {})
                    .then( response => {
                        const data = response.data;
                        that.list = data.data;
                        debugger;
                        that.list.forEach(item => {
                            item.info.forEach( value => {
                                value.imageUrl = `${that.baseUrl}${value.casepic}`
                            })
                        })
                        console.log(that.list)
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
    .caseMenu>p {
        border-left: 2px solid #3aa9e3;
        padding-left:0.5rem;
        font-weight: 600;
        margin:0.2rem;
        font-size: 14px;
    }
    .caseMenu:nth-child(2),
    .caseMenu:nth-child(3),
    .caseMenu:nth-child(5),
    .caseMenu:nth-child(6),
    .caseMenu:nth-child(7),
    .caseMenu:nth-child(8),
    .caseMenu:nth-child(10),
    .caseMenu:nth-child(11),
    .caseMenu:nth-child(12) {
        display: none;
    }
    .menuList li{
        float: left;
        width:50%;
        height:3rem;
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
        height:2rem;
    }
    .menuList li a p {
        text-align: center;
        font-size: 12px;
    }
</style>