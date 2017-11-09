webpackJsonp([57],{1160:function(n,s){n.exports={content:["article",{},["p","\u53e6\u5916\uff0c",["strong",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/wiki/HD"},"antd-mobile@1 \u9ad8\u6e05\u65b9\u6848"],"\u5728 antd-mobile2.0 \u4e2d\u5e76\u4e0d\u662f\u5fc5\u987b\u7684"],"\uff0c\u5982\u679c\u4f7f\u7528 ",["code","antd-mobile@1.x"]," \u9ad8\u6e05\u65b9\u6848\uff0c\u5219\u9700\u8981\u505a\u4e0b\u9002\u914d\u5904\u7406\uff0c\u64cd\u4f5c\u5f88\u7b80\u5355\uff0c\u5728\u524d\u9762\u4e3b\u9898\u914d\u7f6e\u7684\u7b2c\u4e09\u6b65\u4e2d\uff0c\u5728 theme \u5b57\u6bb5\u4e2d\u4fee\u6539",["code","hd"],"\u53d8\u91cf\u4e3a 2px \u5373\u53ef\u3002"],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    <span class="token string">"theme"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">"hd"</span><span class="token punctuation">:</span> <span class="token string">"2px"</span><span class="token punctuation">,</span>\n        <span class="token string">"brand-primary"</span><span class="token punctuation">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span>\n        <span class="token string">"color-text-base"</span><span class="token punctuation">:</span>  <span class="token string">"#333"</span><span class="token punctuation">,</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span>'},["code",'{\n    ...\n    "theme": {\n        "hd": "2px",\n        "brand-primary": "red",\n        "color-text-base":  "#333",\n        ...\n    },\n    ...\n}']],["h3","2) less"],["p","\u7528 less \u6587\u4ef6\u8fdb\u884c\u53d8\u91cf\u8986\u76d6\u3002"],["p","\u5efa\u7acb\u4e00\u4e2a\u5355\u72ec\u7684 ",["code","less"]," \u6587\u4ef6\u5982\u4e0b\uff0c\u518d\u5f15\u5165\u8fd9\u4e2a\u6587\u4ef6\u3002"],["pre",{lang:"css",highlighted:'<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"~antd-mobile/dist/antd-mobile.less"</span><span class="token punctuation">;</span></span>   // \u5f15\u5165\u5b98\u65b9\u63d0\u4f9b\u7684 less \u6837\u5f0f\u5165\u53e3\u6587\u4ef6\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"your-theme-file.less"</span><span class="token punctuation">;</span></span>   // \u7528\u4e8e\u8986\u76d6\u4e0a\u9762\u5b9a\u4e49\u7684\u53d8\u91cf'},["code",'@import "~antd-mobile/dist/antd-mobile.less";   // \u5f15\u5165\u5b98\u65b9\u63d0\u4f9b\u7684 less \u6837\u5f0f\u5165\u53e3\u6587\u4ef6\n@import "your-theme-file.less";   // \u7528\u4e8e\u8986\u76d6\u4e0a\u9762\u5b9a\u4e49\u7684\u53d8\u91cf']],["p","\u6ce8\u610f\uff1a\u8fd9\u79cd\u65b9\u5f0f\u5df2\u7ecf\u8f7d\u5165\u4e86\u6240\u6709\u7ec4\u4ef6\u7684\u6837\u5f0f\uff0c\u4e0d\u9700\u8981\u4e5f\u65e0\u6cd5\u548c\u6309\u9700\u52a0\u8f7d\u63d2\u4ef6 ",["code","babel-plugin-import"]," \u7684 ",["code","style"]," \u5c5e\u6027\u4e00\u8d77\u4f7f\u7528\u3002"]],meta:{order:6,title:"\u5b9a\u5236\u4e3b\u9898",filename:"docs/react/customize-theme.zh-CN.md"},description:["section",["p","antd-mobile \u8bbe\u8ba1\u89c4\u8303\u4e0a\u652f\u6301\u4e00\u5b9a\u7a0b\u5ea6\u7684\u6837\u5f0f\u5b9a\u5236\uff0c\u4ee5\u6ee1\u8db3\u4e1a\u52a1\u548c\u54c1\u724c\u4e0a\u591a\u6837\u5316\u7684\u89c6\u89c9\u9700\u6c42\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u4e3b\u8272\u3001\u5706\u89d2\u3001\u8fb9\u6846\u548c\u90e8\u5206\u7ec4\u4ef6\u7684\u89c6\u89c9\u5b9a\u5236\u3002"],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/rmsportal/bvJhBmAfTWsUixLpGLbL.png",alt:null}]],["blockquote",["p","\u672c\u6587\u6863\u4ec5\u4ecb\u7ecd web \u4e0b\u5982\u4f55\u81ea\u5b9a\u4e49 theme\uff0c\u5982\u9700\u4e86\u89e3 react-native \u7ec4\u4ef6\u5b9a\u4e49 theme \u548c style\uff0c\u8bf7\u53c2\u7167 ",["a",{title:null,href:"https://github.com/ant-design/antd-mobile-samples/tree/master/rn-custom-ui#antd-mobile-with-rn-custom-ui"},"react-native \u7ec4\u4ef6\u81ea\u5b9a\u4e49 theme \u548c\u6837\u5f0f"]]],["h2","\u6837\u5f0f\u53d8\u91cf"],["p","antd-mobile \u7684\u6837\u5f0f\u4f7f\u7528\u4e86 ",["a",{title:null,href:"http://lesscss.org/"},"Less"]," \u4f5c\u4e3a\u5f00\u53d1\u8bed\u8a00\uff0c\u5e76\u5b9a\u4e49\u4e86\u4e00\u7cfb\u5217\u5168\u5c40/\u7ec4\u4ef6\u7684\u6837\u5f0f\u53d8\u91cf\uff0c\u4f60\u53ef\u4ee5\u6839\u636e\u9700\u6c42\u8fdb\u884c\u76f8\u5e94\u8c03\u6574\u3002"],["ul",["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less"},"\u9ed8\u8ba4\u6837\u5f0f\u53d8\u91cf"]]]],["h2","\u5b9a\u5236\u65b9\u5f0f"],["p","\u6211\u4eec\u4f7f\u7528 ",["a",{title:null,href:"http://lesscss.org/usage/#using-less-in-the-browser-modify-variables"},"modifyVars"]," \u7684\u65b9\u5f0f\u6765\u8986\u76d6\u53d8\u91cf\u3002"],["h3","1) theme \u5c5e\u6027"],["ul",["li",["p","\u9996\u5148\uff0c\u4f60\u7684\u9879\u76ee\u91cc\u9700\u8981\u5305\u542b\u5982\u4e0b\u4f9d\u8d56 ",["code","babel-plugin-import less less-loader style-loader css-loader"]," \u3002"]]],["pre",{lang:"bash",highlighted:'  <span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-plugin-import <span class="token function">less</span> less-loader style-loader css-loader'},["code","  npm install --save-dev babel-plugin-import less less-loader style-loader css-loader"]],["ul",["li",["p","\u914d\u7f6e babel-plugin-import \u786e\u4fdd\u52a0\u8f7d antd-mobile less \u6587\u4ef6"]]],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">"libraryName"</span><span class="token punctuation">:</span> <span class="token string">"antd-mobile"</span><span class="token punctuation">,</span> <span class="token string">"style"</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code",'{\n    ...\n    "plugins": [\n        ["import", {"libraryName": "antd-mobile", "style": true}],\n        ...\n    ]\n}']],["ul",["li",["p","\u5728 ",["code","package.json"]," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4e00\u4e2a theme \u5b57\u6bb5\uff0c\u91cc\u9762\u5c06\u5305\u542b\u6240\u6709\u6211\u4eec\u60f3\u8981\u4fee\u6539\u7684\u4e3b\u9898\u6837\u5f0f\u3002",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/blob/master/components/style/themes/default.less"},"\u5168\u90e8\u4e3b\u9898\u6837\u5f0f\u53c2\u8003\u8fd9\u91cc"]]]],["pre",{lang:null,highlighted:'  {\n      <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n      <span class="token string">"theme"</span><span class="token punctuation">:</span> {\n          <span class="token string">"brand-primary"</span><span class="token punctuation">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span>\n          <span class="token string">"color-text-base"</span><span class="token punctuation">:</span>  <span class="token string">"#333"</span><span class="token punctuation">,</span>\n          <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n      }<span class="token punctuation">,</span>\n      <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n  }'},["code",'  {\n      ...\n      "theme": {\n          "brand-primary": "red",\n          "color-text-base":  "#333",\n          ...\n      },\n      ...\n  }']],["ul",["li",["p","\u6700\u540e\uff0c\u5728\u4f60\u7684 webpack \uff08\u7248\u672c3.0+\uff09 \u914d\u7f6e\u6587\u4ef6\u91cc\uff0c\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff0c\u4e4b\u540e\u8fd0\u884c\u4f60\u7684 ",["code","npm start"],"\u3002"]]],["blockquote",["p","\u4e0d\u540c\u7248\u672c\u7684 webpack loader \u914d\u7f6e\u65b9\u6cd5\u6709\u5dee\u5f02\uff0c\u8bf7\u67e5\u770b webpack \u5b98\u65b9\u6587\u6863"]],["pre",{lang:"js",highlighted:'  <span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./package.json\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>theme<span class="token punctuation">;</span>\n\n  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n      <span class="token operator">...</span>\n      module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          <span class="token operator">...</span>\n          rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n              <span class="token operator">...</span>\n              <span class="token punctuation">{</span>\n                  test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n                  use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                      <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n                      <span class="token string">\'css-loader\'</span><span class="token punctuation">,</span>\n                  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token punctuation">{</span>\n                  test<span class="token punctuation">:</span> <span class="token regex">/\\.less$/</span><span class="token punctuation">,</span>\n                  use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                      <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n                      <span class="token string">\'css-loader\'</span><span class="token punctuation">,</span>\n                      <span class="token punctuation">{</span>loader<span class="token punctuation">:</span> <span class="token string">\'less-loader\'</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">{</span>modifyVars<span class="token punctuation">:</span> theme<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n                  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n                  include<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n              <span class="token punctuation">}</span><span class="token punctuation">,</span>\n              <span class="token operator">...</span>\n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token operator">...</span>\n  <span class="token punctuation">}</span>'},["code","  const theme = require('./package.json').theme;\n\n  module.exports = {\n      ...\n      module: {\n          ...\n          rules: [\n              ...\n              {\n                  test: /\\.css$/,\n                  use: [\n                      'style-loader',\n                      'css-loader',\n                  ],\n              },\n              {\n                  test: /\\.less$/,\n                  use: [\n                      'style-loader',\n                      'css-loader',\n                      {loader: 'less-loader', options: {modifyVars: theme}},\n                  ],\n                  include: /node_modules/,\n              },\n              ...\n          ],\n      },\n      ...\n  }"]]],toc:["ul"]}}});