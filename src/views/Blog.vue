<template>
  <el-button type="primary" class="buttonHead" @click="this.$router.push('/')">返    回</el-button>
  <div class="articles-area">
    <el-card style="text-align: left;width: 990px;margin: 35px auto 0 auto">
      <div>
        <span style="font-size: 20px"><strong>{{article[0].articleTitle}}</strong></span>
        <el-divider content-position="left">{{article[0].articleDate}}</el-divider>
        <div class="markdown-body">
          <div v-html="article[0].articleContentHtml"></div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data () {
    return {
      article: [
        {
          articleTitle:'《白卷》项目简介',
          articleDate:'2022-04-30',
          articleContentHtml:'<p><img src="https://i.loli.net/2019/12/15/sYnuTIrDUwAfGgo.png" alt="wjlogo.png" /></p>\n' +
              '<hr />\n' +
              '<p><img src="https://img.shields.io/github/license/Antabot/White-Jotter" alt="lisense" /><br />\n' +
              '<img src="https://img.shields.io/github/v/release/Antabot/White-Jotter" alt="release" /></p>\n' +
              '<p>这是一个简单的前后端分离项目，主要采用 Vue.js + SpringBoot 技术栈开发。</p>\n' +
              '<p>除了用作入门练习，我还希望该项目可以作为一些常见 Web 项目的脚手架，帮助大家简化搭建网站的流程。之所以叫白卷，是因为它从 0 开始，会随着时间的推移逐渐完善。</p>\n' +
              '<p>欢迎加入微信圈子 【开发者】 分享、讨论学习经验：</p>\n' +
              '<p><img src="https://i.loli.net/2020/01/17/HySWdM7wDfF8EKC.png" alt="圈子" /></p>\n' +
              '<h1><a id="_17"></a>整体效果</h1>\n' +
              '<h2><a id="1_19"></a>1.首页</h2>\n' +
              '<p>作为展示页面，包括开发这个项目的主要参考资料、近期更新和 Slogan</p>\n' +
              '<p><img src="https://img-blog.csdnimg.cn/20190403215932913.png" alt="首页" /></p>\n' +
              '<h2><a id="2_25"></a>2.图书馆</h2>\n' +
              '<p>提供图书信息展示功能</p>\n' +
              '<p><img src="https://i.loli.net/2019/12/03/AGLbIupct68ThBD.png" alt="图书馆" /></p>\n' +
              '<h2><a id="3_31"></a>3.登录页面</h2>\n' +
              '<p><img src="https://i.loli.net/2019/04/14/5cb2fd5b78ae7.png" alt="登录页面" /></p>\n' +
              '<h2><a id="4_35"></a>4.后台管理</h2>\n' +
              '<p>包含 dashboard、内容管理、用户及权限管理等</p>\n' +
              '<p><img src="https://img-blog.csdnimg.cn/20191202200516251.png" alt="后台" /></p>\n' +
              '<h1><a id="_41"></a>技术栈</h1>\n' +
              '<h2><a id="1_43"></a>1.前端技术栈</h2>\n' +
              '<p>1.Vue<br />\n' +
              '2.ElementUI<br />\n' +
              '3.axios</p>\n' +
              '<h2><a id="2_49"></a>2.后端技术栈</h2>\n' +
              '<p>1.Spring Boot<br />\n' +
              '2.Spring Data + JPA<br />\n' +
              '3.MySQL<br />\n' +
              '4.Shiro</p>\n' +
              '<h1><a id="_56"></a>部署方法</h1>\n' +
              '<p>1.clone 项目到本地</p>\n' +
              '<p><code>git clone https://github.com/Antabot/White-Jotter</code></p>\n' +
              '<p>2.数据库脚本放在 <code>wj</code> 项目的根目录下，在MySQL中执行数据库脚本</p>\n' +
              '<p>3.数据库配置在 <code>wj</code> 项目的 <code>src\\main\\resources</code> 目录下的<code>application.properties</code> 文件中，mysql 版本为 8.0.15</p>\n' +
              '<p>4.在IntelliJ IDEA中运行 <code>wj</code> 项目，为了保证项目成功运行，可以右键点击 <code>pom.xml</code> 选择 maven -&gt; reimport ，并重启项目</p>\n' +
              '<p>至此，服务端就启动成功了，同时，运行 <code>wj-vue</code> 项目，访问 <code>http://localhost:8080</code> ，即可进入登录页面，默认账号是 <code>admin</code>，密码是 <code>123</code></p>\n' +
              '<p>如果要做二次开发，请继续看第五、六步。</p>\n' +
              '<p>5.进入到 <code>wj-vue</code> 目录中，在命令行依次输入如下命令：</p>\n' +
              '<pre><code class="lang-"># 安装依赖\n' +
              'npm install\n' +
              '\n' +
              '# 在 localhost:8080 启动项目\n' +
              'npm run dev\n' +
              '\n' +
              '</code></pre>\n' +
              '<p>由于在 <code>wj-vue</code> 项目中已经配置了端口转发，将数据转发到SpringBoot上，因此项目启动之后，在浏览器中输入 <code>http://localhost:8080</code> 就可以访问我们的前端项目了，所有的请求通过端口转发将数据传到 SpringBoot 中（注意此时不要关闭 SpringBoot 项目）。</p>\n' +
              '<p>6.最后可以用 <code>WebStorm</code> 等工具打开 <code>wj-vue</code>项目，继续开发，开发完成后，当项目要上线时，依然进入到 <code>wj-vue</code> 目录，然后执行如下命令：</p>\n' +
              '<pre><code class="lang-">npm run build\n' +
              '</code></pre>\n' +
              '<p>该命令执行成功之后， <code>wj-vue</code> 目录下生成一个 <code>dist</code> 文件夹，可以将该文件夹中的两个文件 <code>static</code> 和 <code>index.html</code> 拷贝到 <code>wj</code> 项目中 <code>resources/static/</code> 目录下，然后直接运行 <code>wj</code> 项目，访问 <code>http://localhost:8443</code> ，实际上是把前端打包后作为静态文件，但不推荐使用这种方式。</p>\n' +
              '<h1><a id="_93"></a>教程</h1>\n' +
              '<p>我在 CSDN 上分享了开发这个项目的教程，有兴趣的小伙伴可以点击下面的链接查看。</p>\n' +
              '<p>1.<a href="https://blog.csdn.net/Neuf_Soleil/article/details/88925013" target="_blank">项目简介</a></p>\n' +
              '<p>2.<a href="https://blog.csdn.net/Neuf_Soleil/article/details/88926242" target="_blank">使用 CLI 搭建 Vue.js 项目</a></p>\n' +
              '<p>3.<a href="https://blog.csdn.net/Neuf_Soleil/article/details/88955387" target="_blank">前后端结合测试（登录页面开发）</a></p>\n' +
              '<p>4.<a href="https://blog.csdn.net/Neuf_Soleil/article/details/89294300" target="_blank">数据库的引入</a></p>\n' +
              '<p>5.<a href="https://blog.csdn.net/Neuf_Soleil/article/details/89298717" target="_blank">使用 Element 辅助前端开发</a></p>\n' +
              '<p>6.<a href="https://learner.blog.csdn.net/article/details/89422585" target="_blank">前端路由与登录拦截器</a></p>\n' +
              '<p>7.<a href="https://learner.blog.csdn.net/article/details/89853305" target="_blank">导航栏与图书页面设计</a></p>\n' +
              '<p>8.<a href="https://learner.blog.csdn.net/article/details/92413933" target="_blank">数据库设计与增删改查</a></p>\n' +
              '<p>9.<a href="https://learner.blog.csdn.net/article/details/95310666" target="_blank">核心功能的前端实现</a></p>\n' +
              '<p>10.<a href="https://learner.blog.csdn.net/article/details/97619312" target="_blank">图片上传与项目的打包部署</a></p>\n' +
              '<p>11.<a href="https://learner.blog.csdn.net/article/details/100849732" target="_blank">用户角色权限管理模块设计</a></p>\n' +
              '<p>12.<a href="https://learner.blog.csdn.net/article/details/101121899" target="_blank">访问控制及其实现思路</a></p>\n' +
              '<p>13.<a href="https://learner.blog.csdn.net/article/details/102690035" target="_blank">使用 Shiro 实现用户信息加密与登录认证</a></p>\n' +
              '<p>14.<a href="https://learner.blog.csdn.net/article/details/102788866" target="_blank">用户认证方案与完善的访问拦截</a></p>\n' +
              '<p>15.<a href="https://learner.blog.csdn.net/article/details/103114893" target="_blank">动态加载后台菜单</a></p>\n' +
              '<p>16.<a href="https://learner.blog.csdn.net/article/details/103250775" target="_blank">功能级访问控制的实现</a></p>\n' +
              '<p>(持续更新中)</p>\n' +
              '<h1><a id="_131"></a>近期更新</h1>\n' +
              '<p>12-01 实现功能级权限控制<br />\n' +
              '11-30 利用 vue-elment-admin 项目完善后台界面设计<br />\n' +
              '11-17 重构项目，完成搭建后台基础界面，实现按角色加载菜单，取消前台访问限制<br />\n' +
              '04-27 使用前端拦截器，数据库迁移至 mysql 8.0.15，后台管理页面初始化<br />\n' +
              '04-13 完成图片的上传功能<br />\n' +
              '04-11 完成图书分类功能<br />\n' +
              '04-08 完成图书分页功能<br />\n' +
              '04-06 完成图书查询功能<br />\n' +
              '04-05 完成图书修改功能<br />\n' +
              '04-04 完成图书删除功能<br />\n' +
              '04-03 完成图书新增功能</p>\n'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
@import "../assets/markdown.css";
.buttonHead{
    /* background-color:black; */
    margin-left:93%;
    margin-top:-0.2%;
    position:fixed;
    z-index:25;
    /* position:relative; */
}
</style>
