webpackJsonp([124],{1063:function(t,e){t.exports={content:["section",["p","A foundational component for inputting text into the app via a keyboard."],["h3","Rule"],["ul",["li",["p","Support text input via keyboard or clipboard."]],["li",["p","The cursor can be moved horizontally."]],["li",["p","Handle text with a specific format, eg: hide password."]]]],meta:{category:"Components",type:"Data Entry",title:"InputItem",filename:"components/input-item/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#InputItem-Instance-methods",title:"InputItem Instance methods"},"InputItem Instance methods"]]],api:["section",["h2","API"],["p","Support WEB, React-Native."],["p",["strong",["code","InputItem"]," must wrapped by a ",["a",{title:null,href:"https://mobile.ant.design/components/list"},"List"]]],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","type"],["td","the type of ",["code","InputItem"]," which is one of ",["code","bankCard"],", ",["code","phone"],"(which the maxLength is 11 and setting will be ignored), ",["code","password"],", ",["code","number"],", \uff08 antd-mobile will try to open the number keyboard, but web browser can not open number keyboard with decimal support we suggest one need decimal number support use text input and onChange to custom it.\uff09, ",["code","money"],"(with decimal,",["code","Web Only"],"),   ",["code","text"]],["td","String"],["td",["code","text"]]],["tr",["td","value"],["td","the value of input (see ",["a",{title:null,href:"https://facebook.github.io/react/docs/forms.html"},"react doc"]," for more information about controled component)"],["td","String"],["td"]],["tr",["td","defaultValue"],["td","provides an initial value that will change when the user starts typing."],["td","String"],["td","-"]],["tr",["td","placeholder"],["td","the string that will be rendered before text input has been entered."],["td","String"],["td","''"]],["tr",["td","editable"],["td","whether is editable"],["td","bool"],["td","true"]],["tr",["td","disabled"],["td","whether is disabled"],["td","bool"],["td","false"]],["tr",["td","clear"],["td","whether to display clear(it takes effect only ",["code","editable"]," is ",["code","true"]," and ",["code","disabled"]," is ",["code","false"]," has been set)"],["td","bool"],["td","false"]],["tr",["td","maxLength"],["td","limits the maximum number of characters that can be entered"],["td","number"],["td"]],["tr",["td","onChange"],["td","callback that is called when the text input's text changes"],["td","(val: string): void"],["td","-"]],["tr",["td","onBlur"],["td","callback that is called when the text input is blurred"],["td","(val: string): void"],["td","-"]],["tr",["td","onFocus"],["td","callback that is called when the text input is focused"],["td","(val: string): void"],["td","-"]],["tr",["td","error"],["td","whether to display error"],["td","bool"],["td","false"]],["tr",["td","onErrorClick"],["td","callback that is called when the error icon is clicked"],["td","(e: Object): void"],["td"]],["tr",["td","extra"],["td","the right content of ",["code","InputItem"]],["td","string or node"],["td","''"]],["tr",["td","onExtraClick"],["td","callback that is called when the extra content is clicked"],["td","(e: Object): void"],["td"]],["tr",["td","labelNumber"],["td","number of label text, valid value is 2 to 7"],["td","number"],["td",["code","5"]]],["tr",["td","updatePlaceholder (",["code","web only"],")"],["td","whether to replace the placeholder with cleared content"],["td","bool"],["td","false"]],["tr",["td","prefixListCls (",["code","web only"],")"],["td","the class name prefix of list"],["td","String"],["td",["code","am-list"]]],["tr",["td","name (",["code","web only"],")"],["td","the name of input"],["td","String"],["td"]],["tr",["td","moneyKeyboardAlign (",["code","web only"],")"],["td","text align direction, only ",["code","type='money'"]," support this api\uff0c could be ",["code","'left'"],", ",["code","'right'"]],["td","String"],["td","'right'"]],["tr",["td","locale"],["td","\u56fd\u9645\u5316\uff0c\u53ef\u8986\u76d6\u5168\u5c40",["code","[LocaleProvider](https://mobile.ant.design/components/locale-provider)"],"\u7684\u914d\u7f6e,  when",["code","type"],"is",["code","money"],"\uff0ccan cunstom the keyboard confirm item's label"],["td","Object: { confirmLabel }"],["td","\u65e0"]]]],["blockquote",["p","More available react-native ",["code","InputItem"]," API can be found at ",["a",{title:null,href:"http://facebook.github.io/react-native/docs/textinput.html"},"react-native TextInput"]],["p","Note: ",["code","InputItem"]," does not support negative number if ",["code","type"]," is text, you can use ",["code","type=text"]," to do that."]],["h2","InputItem Instance methods"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","focus (",["code","Web Only"],")"],["td","Force focus back onto the input node"],["td","(): void"],["td","-"]]]]]}}});