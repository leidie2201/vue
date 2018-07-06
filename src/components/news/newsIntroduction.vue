<template>
    <div>
        <header>
            <h3>
                <a href="../index.html" class="iconfont icon-xiangzuo"></a>
                新闻
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
                <ul class="companyNews contentDom" v-show=" num == 0">
                    <li v-for='(itemCon,index) in tabContents'>
                        <router-link :to="'/producte/details/news/'+itemCon.id" class="clearfix">
                                <div class="contentleft">
                                        <img :src="itemCon.imgUrl" alt="">
                                    </div>
                                <div class="contentright">
                                        <p>{{itemCon.title}}</p>
                                        <p>{{itemCon.summary}}</p>
                                        <p><i class="iconfont icon-shijian"></i>{{itemCon.createtime}}</p>
                                    </div>
                            </router-link>
                    </li>
                </ul>
                <ul class="industryInformation contentDom" v-show=" num == 1">
                    <li v-for='(itemCon,index) in tabContents'>
                        <router-link :to="'/producte/details/news/'+itemCon.id" class="clearfix">
                            <div class="contentleft">
                                <img :src="itemCon.imgUrl" alt="">
                            </div>
                            <div class="contentright">
                                <p>{{itemCon.title}}</p>
                                <p>{{itemCon.summary}}</p>
                                <p><i class="iconfont icon-shijian"></i>{{itemCon.createtime}}</p>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="news_page" v-show="pageflag">
                <ul class="clearfix">
                    <li class="li_col" v-bind:class="{ 'li_col1': forbid1}" @click="togglePage('pre')">上一页</li>
                    <li class="li_col" v-bind:class="{ 'li_col1':forbid2}" @click="togglePage('next')">下一页</li>
                </ul>
            </div>
        </div>
        <div style="height: 2rem;"></div>
    </div>
</template>

<script>
    import "../../../static/icon/iconfont.css";
    import "../../../static/icon/base.css";
    import Qs from 'qs'
    export default{
        data(){
            return {
                baseUrl:"http://www.adssap.com:8812",
                tabs: ["企业新闻", "行业资讯"],
                tabContents: [],
                num: 0,
                new_page:1,
                allpage:"",
                forbid1:true,
                forbid2:false,
                pageflag:false
            }
        },
        mounted(){
            this.gettabContents();
        },
        methods:{
            tab(index) {
                this.num = index;
                this.gettabContents();
            },
            togglePage(tab) {
                debugger;
                if(tab == "pre"){
                    this.new_page -- ;
                    if(this.new_page <1 ){
                        return;
                    }
                    debugger;
                    this.gettabContents(this.new_page);
                    if (this.new_page <=1) {
                        this.forbid1 == true;
                    }
                }else if(tab == "next"){
                    this.new_page++;
                    if(this.new_page>this.allpage){
                        return;
                    }
                    this.gettabContents(this.new_page);
                    if (this.allpage <= this.new_page) {
                        this.forbid2 == true;
                    }
                }
            },
            gettabContents(page){
                const url = "/newsList";
                let param = {};
                param.newstype = this.num;
                if(page){
                    param.page = page;
                }
                var that = this;
                this.$http.post(url, Qs.stringify(param))
                    .then( response => {
                        const data = response.data;
                        if(this.num == 0){
                            that.tabContents = data.data.news;
                        }else if(this.num == 1){
                            that.tabContents = data.data.information;
                        }
                        that.tabContents.forEach(item => {
                            item.imgUrl = `${that.baseUrl}${item.imageurl}`
                        })
                        if(that.num == 0){
                            if(data.data.newsNum <= 1){
                                that.pageflag = false;
                            }else{
                                that.pageflag = true;
                                that.allpage = data.data.newsNum;
                            }
                        }else if(that.num == 1){
                            if(data.data.infNum <= 1){
                                that.pageflag = false;
                            }else{
                                that.pageflag = true;
                                that.allpage = data.data.infNum;
                            }
                        }
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
    .tabMenu {
        width:4rem;
        height:0.8rem;
        margin:0.35rem auto;
        background-color: #79c4ee;
    }
    .tabMenu li {
        float: left;
        width:50%;
        font-size: 12px;
        color: #fff;
        line-height: 0.8rem;
        text-align: center;
    }
    .tabMenu li.active {
        background-color: #2796cc;
    }
    .companyNews li a,.industryInformation li a {
        display: inline-block;
        padding:0.2rem 0;
    }
    .contentleft {
        width:35%;
        float: left;
    }
    .contentleft img {
        height:1.85rem;
        width:100%;
    }
    .contentright {
        width:65%;
        float: left;
        padding-left: 0.2rem;
    }
    .contentright p:nth-child(1){
        margin-top: 0.08rem;
        font-size: 0.3rem;
        color: #000;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }
    .contentright p:nth-child(2) {
        margin-top:0.1rem;
        color: #ccc;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .contentright p:nth-child(3) {
        color: #ccc;
        margin-top:0.1rem;
        text-align: right;

    }
    .contentright p:nth-child(3) i {
        font-size: 0.28rem;
        margin-right:0.1rem;
    }
    .news_page {
        margin-bottom: 0.5rem;

    }
    .news_page ul {
        margin-left:30%;
    }
    .news_page .li_col {
        color: #3aa9e3;
    }
    .news_page .li_col1 {
        color: #ccc;
    }
    .news_page >ul >li {
        float: left;
        margin: 0.1rem;
        padding: 0.1rem 0.2rem;
        border: 1px solid #ccc;
        font-size: 0.28rem;
    }
</style>