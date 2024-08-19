import{_ as t}from"./chunks/ArticleMetadata.bItWbIop.js";import{_ as h,D as k,o as n,c as r,I as d,w as o,k as l,a as c,R as g,b as D,e as A}from"./chunks/framework.FVQzxbLi.js";import"./chunks/md5.RtphNWHi.js";const y="/assets/202210262026166.7NMI1PbT.png",F="/assets/202210262026266.QaUul6zt.png",C="/assets/202210262026566.0Ep_K354.png",O=JSON.parse('{"title":"Docker 安装 OpenLDAP 详细步骤","description":"","frontmatter":{"title":"Docker 安装 OpenLDAP 详细步骤","author":"查尔斯","date":"2022/10/26 20:28","categories":["杂碎逆袭史"],"tags":["LDAP","Docker","容器"],"showComment":false},"headers":[],"relativePath":"categories/fragments/2022/10/26/Docker安装OpenLDAP.md","filePath":"categories/fragments/2022/10/26/Docker安装OpenLDAP.md","lastUpdated":1724049930000}'),m={name:"categories/fragments/2022/10/26/Docker安装OpenLDAP.md"},u=l("h1",{id:"docker-安装-openldap-详细步骤",tabindex:"-1"},[c("Docker 安装 OpenLDAP 详细步骤 "),l("a",{class:"header-anchor",href:"#docker-安装-openldap-详细步骤","aria-label":'Permalink to "Docker 安装 OpenLDAP 详细步骤"'},"​")],-1),_=g(`<div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>笔者下面的步骤及配置是基于指定版本的实践，大多数程序大多数情况下在相差不大的版本时可以直接参考。（当然了，即使是非 Docker 方式安装程序也是一样道理）</p></div><h2 id="拉取镜像" tabindex="-1">拉取镜像 <a class="header-anchor" href="#拉取镜像" aria-label="Permalink to &quot;拉取镜像&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>拉取镜像时需要明确镜像版本（Tag）。</p></div><p>不指定版本（Tag）就拉取镜像，那拉取下来的镜像版本（Tag）默认是 <code>latest</code>（最新的）。<code>latest</code> 会跟随 Docker Registry 中的记录变化，现在拉取下来的 <code>latest</code> 是 x1 版本，但隔了一段时间后你在其他机器上再拉取 <code>latest</code> 可能就是 x2 版本了。</p><p>变化的版本，不利于生产环境部署的稳定。无论是后续在其他环境部署还是扩容集群等场景均要求根据架构要求指定好版本。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> pull</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> osixia/openldap:1.5.0</span></span></code></pre></div><h2 id="运行容器" tabindex="-1">运行容器 <a class="header-anchor" href="#运行容器" aria-label="Permalink to &quot;运行容器&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p><strong>下方的配置，切记要根据个人实际情况来修改。</strong></p></div><ul><li>容器的名称</li><li>镜像名称:版本</li><li>是否设置自启动？</li><li>是否端口映射？</li><li>环境变量配置</li><li>映射的话映射到宿主机哪个端口？</li><li>是否挂载卷？</li><li>挂载的话要挂载宿主机哪个目录？</li><li>......</li><li>等自定义配置</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># LDAP_ORGANISATION 组织名称，默认为 Example Inc</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># LDAP_DOMAIN 域，默认为 example.org</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># LDAP_ADMIN_PASSWORD 管理员密码，默认为 admin</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># LDAP_TLS_VERIFY_CLIENT TLS验证客户端</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#   demand：默认。检查客户端证书，没有证书或证书错误都将立即终止连接</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#   try：检查客户端证书，没有证书（允许连接），证书错误（终止连接）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#   allow：检查客户端证书，没有证书或证书错误，都允许连接</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;">#   never：不验证客户端证书</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">--name </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">openldap</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> osixia/openldap:1.5.0</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">--restart=always </span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;">\\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">-e </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">LDAP_ORGANISATION=&quot;baidu&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">-e </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">LDAP_DOMAIN=&quot;baidu.com&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">-e </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">LDAP_ADMIN_PASSWORD=&quot;123456&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">-e </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">LDAP_TLS_VERIFY_CLIENT=try</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">-p </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">389</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">:389</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> 636</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">:636</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/opt/disk/docker/volumes/openldap/conf:/etc/ldap/slapd.d</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">-v </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/opt/disk/docker/volumes/openldap/data:/var/lib/ldap</span><span style="--shiki-light:#005CC5;--shiki-dark:#F47067;"> \\</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#768390;"># 使用该参数，容器内的 root 用户才拥有真正的 root 权限</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">--privileged</span><span style="--shiki-light:#D73A49;--shiki-dark:#F47067;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span></span></code></pre></div><h2 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-label="Permalink to &quot;验证&quot;">​</a></h2><p>服务器开放好相应端口或设置好安全组规则后，我们使用 Apache Directory Studio 来验证一下。</p><p><img src="`+y+'" alt="202210262026166"></p><p><img src="'+F+'" alt="202210262026266"></p><p><img src="'+C+`" alt="202210262026566"></p><h2 id="docker-compose脚本" tabindex="-1">Docker Compose脚本 <a class="header-anchor" href="#docker-compose脚本" aria-label="Permalink to &quot;Docker Compose脚本&quot;">​</a></h2><p>如果你是用的 docker-compose 来安装，下方附上相应 docker-compose.yml 脚本内容。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">&#39;3&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">  openldap</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">openldap</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">osixia/openldap:1.5.0</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">always</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      LDAP_ORGANISATION</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">baidu</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      LDAP_DOMAIN</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">baidu.com</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      LDAP_ADMIN_PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">123456</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">      LDAP_TLS_VERIFY_CLIENT</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">try</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">389:389</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">636:636</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/opt/disk/docker/volumes/openldap/conf:/etc/ldap/slapd.d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;">/opt/disk/docker/volumes/openldap/data:/var/lib/ldap</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#8DDB8C;">    privileged</span><span style="--shiki-light:#24292E;--shiki-dark:#ADBAC7;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;">true</span></span></code></pre></div><p>编写好 docker-compose.yml 脚本后，在脚本同级目录执行下方命令即可。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark-dimmed vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#F69D50;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#96D0FF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#6CB6FF;"> -d</span></span></code></pre></div>`,20);function B(s,v,b,E,P,L){const e=t,p=k("ClientOnly");return n(),r("div",null,[u,d(p,null,{default:o(()=>{var i,a;return[(((i=s.$frontmatter)==null?void 0:i.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(n(),D(e,{key:0,article:s.$frontmatter},null,8,["article"])):A("",!0)]}),_:1}),_])}const T=h(m,[["render",B]]);export{O as __pageData,T as default};
