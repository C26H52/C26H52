import{_ as p}from"./chunks/ArticleMetadata.bItWbIop.js";import{_ as k,D as e,o as n,c as C,I as r,w as d,k as t,a as g,R as o,b as A,e as D}from"./chunks/framework.FVQzxbLi.js";import"./chunks/md5.RtphNWHi.js";const y="/assets/202201260941889.GJRZvJA-.png",u="/assets/202201260942561.LffePadq.png",f=JSON.parse('{"title":"JavaScript 无法存储 Java Long 类型数据问题","description":"","frontmatter":{"title":"JavaScript 无法存储 Java Long 类型数据问题","author":"查尔斯","date":"2022/01/26 09:07","categories":["Bug万象集"],"tags":["JavaScript"]},"headers":[],"relativePath":"categories/issues/2022/01/26/JavaScript 无法存储 Java  Long 类型数据问题.md","filePath":"categories/issues/2022/01/26/JavaScript 无法存储 Java  Long 类型数据问题.md","lastUpdated":1724049930000}'),B={name:"categories/issues/2022/01/26/JavaScript 无法存储 Java  Long 类型数据问题.md"},c=t("h1",{id:"javascript-无法存储-java-long-类型数据问题",tabindex:"-1"},[g("JavaScript 无法存储 Java Long 类型数据问题 "),t("a",{class:"header-anchor",href:"#javascript-无法存储-java-long-类型数据问题","aria-label":'Permalink to "JavaScript 无法存储 Java Long 类型数据问题"'},"​")],-1),q=o(`<h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h2><p>今天在解决一个需求问题的时候，遇到了一个难得一见的 JS 问题。这个问题大概是和一些同学在开发环境使用 == 来比较包装类型的整数一样，由于比较的数值在缓存范围内，因缘际会的错过了 bug 的出现。</p><p>简单说一下问题经过，是这样的，笔者这个需求最终要求接口返回一组自定义结构的 k-v （不是单纯的键值对）数据，用于在前端表单中进行分类展示。</p><p>后端响应的数据结构类似如下：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;errorMsg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;extend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;items&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;extend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;CentOS 8.1 64位&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;val&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">8014753905961037835</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                }, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;extend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;CentOS 8.0 64位&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;val&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">8014753905961037838</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                }, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            ], </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;CentOS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;pubProperty&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;val&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">14</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;extend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;items&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;extend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;RedHat Enterprise Linux 8.0 64位&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;val&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">7979917486755315712</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                }, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;extend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;RedHat Enterprise Linux 7.7 64位&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;val&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">8014753905961037829</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            ], </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Redhat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;pubProperty&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;val&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    ], </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div><p>在前端表单中的展示效果大概如下：</p><p><img src="`+y+'" alt="202201260941889"></p><h2 id="原因分析" tabindex="-1">原因分析 <a class="header-anchor" href="#原因分析" aria-label="Permalink to &quot;原因分析&quot;">​</a></h2><p>笔者相信各位同学都应该猜得到，当提交表单的时候，前端肯定会把选中的镜像的 val 值传递给后端，然后由后端继续进行处理。</p><p>但是就在这个环节，由前端传给后端的 val 值竟然错了，例如：当选中了 CentOS 8.1 64 位这个镜像时，本该传递的 val 值为 8014753905961037835，实际传递的却是： 8014753905961038000。</p><p>后端接口测试的响应数据没问题，那问题显然就是出在前端了。</p><p>最终，配合前端开发定位这个问题的原因是因为： JavaScript 中无法存储 Java 中的 Long 类型数据，当位数超过 JavaScript 整数存储的范围，就会以0来代替了。</p><p><img src="'+u+`" alt="202201260942561"></p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><p>JavaScript 存储不了就存储不了吧，咱们这个需求还得解决啊，最终的解决方法就是将后端响应回来的 Long 类型数据转换为字符串。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">// 在序列化为 JSON 时将该字段转换为 String 类型</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">JsonFormat</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">shape</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> JsonFormat.Shape.STRING)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">private</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> Long</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> val;</span></span></code></pre></div><p>后端响应的数据结构类似如下：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;code&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;errorMsg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;result&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;extend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;items&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;extend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;CentOS 8.1 64位&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;val&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;8014753905961037835&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                }, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;extend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;CentOS 8.0 64位&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;val&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;8014753905961037838&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                }, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            ], </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;CentOS&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;pubProperty&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;val&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">14</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;extend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;items&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;extend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;RedHat Enterprise Linux 8.0 64位&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;val&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;7979917486755315712&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                }, </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;extend&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">null</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;RedHat Enterprise Linux 7.7 64位&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line highlighted"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">                    &quot;val&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;8014753905961037829&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">                }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">            ], </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;Redhat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;pubProperty&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">, </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">            &quot;val&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">    ], </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#8DDB8C;">    &quot;success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">}</span></span></code></pre></div>`,18);function E(s,F,v,_,m,S){const h=p,l=e("ClientOnly");return n(),C("div",null,[c,r(l,null,{default:d(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(n(),A(h,{key:0,article:s.$frontmatter},null,8,["article"])):D("",!0)]}),_:1}),q])}const L=k(B,[["render",E]]);export{f as __pageData,L as default};
