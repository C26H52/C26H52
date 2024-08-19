import{_ as p}from"./chunks/ArticleMetadata.bItWbIop.js";import{_ as r,D as h,o as e,c as o,I as c,w as d,k as t,a as k,R as g,b as _,e as m}from"./chunks/framework.FVQzxbLi.js";import"./chunks/md5.RtphNWHi.js";const u="/assets/202112012236800.bcV6cREo.png",C="/assets/202112012236805.dadjq48q.jpeg",y="/assets/202112012236810.DUSwV3aB.png",F="/assets/202209211547666.87va370l.png",D="/assets/202209211548777.WI3TpfR2.png",b="/assets/202209211550888.-IrPxOPZ.png",A="/assets/202209211550999.QkZYUP4W.png",M=JSON.parse('{"title":"F:\\\\ 上的回收站已损坏。是否清空该驱动器上的\\"回收站\\"?","description":"","frontmatter":{"title":"F:\\\\ 上的回收站已损坏。是否清空该驱动器上的\\"回收站\\"?","author":"查尔斯","date":"2021/12/01 22:36","categories":["Bug万象集"],"tags":["Windows"]},"headers":[],"relativePath":"categories/issues/2021/12/01/F盘上的回收站已损坏。是否清空该驱动器上的回收站.md","filePath":"categories/issues/2021/12/01/F盘上的回收站已损坏。是否清空该驱动器上的回收站.md","lastUpdated":1724049930000}'),q={name:"categories/issues/2021/12/01/F盘上的回收站已损坏。是否清空该驱动器上的回收站.md"},f=t("h1",{id:"f-上的回收站已损坏。是否清空该驱动器上的-回收站",tabindex:"-1"},[k('F:\\ 上的回收站已损坏。是否清空该驱动器上的"回收站"? '),t("a",{class:"header-anchor",href:"#f-上的回收站已损坏。是否清空该驱动器上的-回收站","aria-label":'Permalink to "F:\\ 上的回收站已损坏。是否清空该驱动器上的"回收站"?"'},"​")],-1),v=g('<h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h2><p>近期打开移动硬盘时，经常弹出一个提示框，提示内容是：<strong>F:\\ 上的&quot;回收站&quot;已损坏。是否清空该驱动器上的&quot;回收站&quot;?</strong></p><p><img src="'+u+'" alt="202112012236800"></p><p>这个提示框出现过好多回了，除了第一次见到时担心数据丢失，所以比较重视，后来次数多了，点过 “是”，也点过 “否”，只要当下不再影响我就先忽略了。</p><p>但今天在公司打开时，它还没完没了的弹，我决定给它 &quot;上一课&quot;。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>先说明一下我的这块移动硬盘情况，我把它分了两个区，在我的工作电脑上分别占据 E盘、F盘，E盘 打开没问题，打开 F盘就弹出这个提示。</p></div><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><h3 id="尝试1-重新插拔移动硬盘" tabindex="-1">尝试1：重新插拔移动硬盘 <a class="header-anchor" href="#尝试1-重新插拔移动硬盘" aria-label="Permalink to &quot;尝试1：重新插拔移动硬盘&quot;">​</a></h3><p>我首先考虑的是不是接触不良类的问题，于是我在电脑上弹出了移动硬盘，然后把硬盘接线也重新插拔了一下，再插到电脑上。</p><p>再次打开该盘，依然如此，问题未解决。</p><h3 id="尝试2-重启电脑" tabindex="-1">尝试2：重启电脑 <a class="header-anchor" href="#尝试2-重启电脑" aria-label="Permalink to &quot;尝试2：重启电脑&quot;">​</a></h3><p>我又考虑是不是电脑本次出了点故障，于是我重启了电脑。</p><p><img src="'+C+`" alt="202112012236805"></p><p>果然，问题还是没解决了。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>不过，重启的确应该成为解决问题的优先方法，毕竟有这么个说法：&quot;重启可以解决世间 90% 的问题&quot;。巨石强森的电影《摩天营救》里不也是这么演的嘛。很明显，我遇到了剩下那 10% 的问题。</p></div><h3 id="尝试3-删除回收站" tabindex="-1">尝试3：删除回收站 <a class="header-anchor" href="#尝试3-删除回收站" aria-label="Permalink to &quot;尝试3：删除回收站&quot;">​</a></h3><p>行吧，再次回归问题本身，它一直提示是回收站损坏，而且，此时我突然想到周末在使用 FreeFileSync 比较 NAS 和硬盘数据时，我看到过这块硬盘中有多一个 recylce 名词的目录（图标也是回收站图标）。</p><p>而除了系统回收站，其他硬盘回收站其实对我都无所谓，那就想法找到并干掉它。</p><p>然而，即使我开启了隐藏的项目显示，窗口下肉眼仍无法找到它，那就使用 CMD 吧。</p><p>以管理员身份打开 CMD，复制下方命令，改成你那提示的错误盘符，回车，再输入 y 确定后删除。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># $RECYCLE.BIN 是回收站名称</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># rd 是删除命令</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 		/s 代表除目录本身外，还将删除指定目录下的所有子目录和文件，适用于删除目录树。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># f:\\ 根据你自己提示的是哪个盘报错，你就将 f 改成哪个盘</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">rd</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> /s</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> f:</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">RECYCLE.BIN</span></span></code></pre></div><p><img src="`+y+'" alt="202112012236810"></p><p>问题解决了。</p><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><p><strong>C：</strong> 各位同学，在按照本文进行该项问题修复时，请一定要注意 <strong>红色选框</strong>，确认好你的操作是否与笔者一致，下面列出两个容易被忽略的问题。</p><h3 id="执行命令的终端" tabindex="-1">执行命令的终端 <a class="header-anchor" href="#执行命令的终端" aria-label="Permalink to &quot;执行命令的终端&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>这个注意事项是一位同学在 CSDN 上评论遇到的，特别记录一下。</p></div><p><img src="'+F+`" alt="202209211547666"></p><p>笔者是用 CMD 来执行的命令，你如果用了 PowerShell 或其他的终端，需要采用对应的命令语法。</p><p>以 CMD 和 PowerShell 中的 <code>rd</code> 命令为例，在 CMD 中 <code>rd</code> 命令的语法如下：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># [] 代表对应参数可选</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 一般情况下直接使用 /s /q 组合的形式，表示不需要提示确认，直接对指定目录进行删除（包含子目录）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 本文中的命令没加 /q 是本着稳妥的方面，让你确认一次后再删除</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">rd</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [/s] [/q] 目录路径</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">rmdir</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [/s] [/q] 目录路径</span></span></code></pre></div><p><img src="`+D+`" alt="202209211548777"></p><p>而在 PowerShell 中 <code>rd</code> 命令的语法如下：</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>说起来，命令其实差不多，因为是表达相同动作，而且外国人就那么几个单词。就和编程语言里的语法单词也相似一样。</p></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 下面这些命令都可以，笔者习惯在 PowerShell 中使用 rm</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># -r 是 recurse 的意思，表示递归删除（包含子目录）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">rd</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [-r] 目录路径</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">rm</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [-r] 目录路径</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">rmdir</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [-r] 目录路径</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">ri</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [-r] 目录路径</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">del</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [-r] 目录路径</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">erase</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [-r] 目录路径</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">remove-item</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;"> [-Recurse] 目录路径</span></span></code></pre></div><p><img src="`+b+'" alt="202209211550888"></p><p>很显然，当你用 CMD 的 <code>rd</code> 命令语法来在 PowerShell 中删除目录时，自然会报错了。</p><p><img src="'+A+'" alt="202209211550999"></p><h3 id="以管理员身份运行" tabindex="-1">以管理员身份运行 <a class="header-anchor" href="#以管理员身份运行" aria-label="Permalink to &quot;以管理员身份运行&quot;">​</a></h3><p>一般来说，操作系统提供商提供多用户功能的目的，一方面是隔离数据，另一方面是为了防止小白用户操作错误还要怪在他们头上。</p><p>可能不需要管理员身份运行也没问题，但是为了防止部分同学机器的操作系统存在一些 “怪癖”，最好是采用管理员身份来运行，避免无权限之类的问题。</p><p>好了，目前就先简单提这两点注意事项，Good luck。</p>',42);function P(s,E,B,S,x,N){const l=p,n=h("ClientOnly");return e(),o("div",null,[f,c(n,null,{default:d(()=>{var a,i;return[(((a=s.$frontmatter)==null?void 0:a.aside)??!0)&&(((i=s.$frontmatter)==null?void 0:i.showArticleMetadata)??!0)?(e(),_(l,{key:0,article:s.$frontmatter},null,8,["article"])):m("",!0)]}),_:1}),v])}const T=r(q,[["render",P]]);export{M as __pageData,T as default};
