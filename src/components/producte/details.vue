<template>
    <div>
        <header>
            <h3>
                <a @click="back()" class="iconfont icon-xiangzuo"></a>
                <span>{{titlename}}</span>
            </h3>
        </header>
        <div class="details">
            <p class="details_tit">{{infodata.title}}</p>
            <div class="details_info">
                <span>原创</span>
                <span>{{infodata.createtime}}</span>
                <span>埃德森</span>
            </div>
            <div class="details_content" v-html="img_url"></div>
        </div>
    </div>
</template>

<script>
    import "../../../static/icon/iconfont.css";
    import "../../../static/icon/base.css";
    import Qs from 'qs'
    export default {
        data(){
            return {
                types:"",
                id:"",
                titlename:"",
                infodata:{
                    title:"",
                    createtime:"",
                    contents:"",
                }
            }
        },
        // 页面中的data和methods对象创建完毕后会自动调用created方法
        mounted() {
            this.types = this.$route.params.types;
            this.id = this.$route.params.id;
            this.getDetailList();
        },
        computed:{
            img_url:function(){
                return this.infodata.contents.replace(/src="/g,'src="http://www.adssap.com:8812')
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            getDetailList(){
                let url = "";
                let param = {};
                let that = this;
                if(this.types == "product"){
                    url = "/productDetails";
                    this.titlename = "产品详情"
                    param.product_id = this.id;
                }else if(this.types == "case"){
                    this.titlename = "案例详情";
                    url = "/caseListAll";
                    param.id = this.id;
                    param.casetype = this.types;
                }else if(this.types == "solution"){
                    this.titlename = "方案详情";
                    url = "/solutionsDetails";
                    param.solutions_id = this.id;
                    param.parent_id = this.types;
                }else if(this.types == "news"){
                    this.titlename = "新闻详情";
                    url = "/newsDetails";
                    param.id = this.id;
                    param.newstype = this.types;
                }
                this.$http.post(url, Qs.stringify(param))
                    .then( response => {
                        let detaildata;
                        const data = response.data;
                        if(that.types == "product"){
                            detaildata = data.data.product_details[0];
                            that.infodata.title = data.data.product_details[0].product_title;
                            that.infodata.createtime = data.data.product_details[0].product_createtime;
                            that.infodata.contents = data.data.product_details[0].product_contents;
                        }else if(that.types == "case"){
                            detaildata= data.data.case_details[0];
                            that.infodata.title = data.data.case_details[0].title;
                            that.infodata.createtime = data.data.case_details[0].createtime;
                            that.infodata.contents = data.data.case_details[0].contents;
                        }else if(that.types == "solution"){
                            detaildata= data.data.solutions_details[0];
                            that.infodata.title = data.data.solutions_details[0].solutions_title;
                            that.infodata.createtime = data.data.solutions_details[0].solutions_createtime;
                            that.infodata.contents = data.data.solutions_details[0].solutions_contents;
                        }else if(that.types == "news"){
                            detaildata= data.data.news_details[0];
                            that.infodata.title = data.data.news_details[0].title;
                            that.infodata.createtime = data.data.news_details[0].createtime;
                            that.infodata.contents = data.data.news_details[0].contents;
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
    .details {
        padding:0 0.2rem;
        margin-bottom:0.3rem;
    }
    .details .details_info {
        color: #ccc;
        margin: 0.2rem 0;
    }
    .details .details_info span:nth-child(1) {
        display: inline-block;
        border: 1px solid #ccc;
        padding: 0.01rem 0.15rem;
        border-radius: 0.25rem;
    }
    .details_tit {
        font-size:14px;
    }
    .details_content p img {
        width:100%;
        height: inherit;
    }
</style>