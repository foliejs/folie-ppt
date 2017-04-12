title: Tool API Gateway
speaker: 孙祁
url: https://bitbucket.org/teambition/tool-gateway
transition: slide3
files: /js/demo.js,/css/demo.css,/js/zoom.js
theme: light
usemathjax: yes

[slide]
# Tool API Gateway
### A small and configurable service

[slide]
# 背景
> CRM，报销项目插件耦合应用，应用中需要处理各种消费者的请求，造成服务端代码难维护

[slide]
# 基本功能 {:&.flexbox.vleft}
* 服务注册
* 请求限制（IP访问次数，身份限制）
* 服务转发


[slide]
# 功能图 {:&.flexbox.vleft}
<img src="../images/gateway.png">


[slide]
# 整体设计
---
* 定义请求所需验证点 `Validator`
* 定义验证点所需规则 `Policy`
* 顺序验证 validator
* 转发到指定服务

[slide]
# 定义验证点和规则
---
<pre><code class="markdown">
/* validator with policy */
{
  "RobustRequestValidator": [
          "path_policy",
          "rate_limit_policy",
          "header_policy"
        ],
  "APIKeyRequestValidator":[
      ...
  ]
}
</code>
</pre>


[slide]
# 服务配置
<pre><code class="markdown">
{
  "PORT": 8080,
  "POLICY_PATH": "tool-policy-store",
  "RATE_LIMIT_INTERVAL": 60000,
  "REDIS_URL": "redis://172.20.10.160:6379",
  "REDIS_TIMEOUT": 1000,
  "SERVICES": [      // 配置服务
    {
      "name": "deal",
      "path": "/deal",  
      "auth_header": false,
      "secret": null,
      "nodes": [    // deal服务地址
        "http://127.0.0.1:3000"
      ],
      "validators": {
        "RobustRequestValidator": [
          "path_policy",
          {
            "name": "rate_limit_policy",
            "args": {
              "limits": [
                {
                  "limit": 100,
                  "key": "ip"
                }
              ]
            }
          }
        ],
        "APIKeyRequestValidator":[
        "header_policy"
        ]
      }
    }
  ]
}
</code>
</pre>

[slide]
# 链式调用
---
<pre><code class="markdown">
handleRequest(req, res) {
    this.req = req
    this.res = res
    this.requestValidator.validate(req)
        .then(result => this.userValidator.validate(result))
        .then(result => this.robustRequestValidator.validate(result))
        .then(result => this.resolveRequest(result))
        .catch(err => this.rejectRequest(err))
}

</code>
</pre>


[slide]

# Thank You  
