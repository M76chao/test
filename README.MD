# 尝试公共组件

添加子项目

命令：
```
git subtree add --prefix=<存放子项目的相对路径> <子项目git地址> <分支> --squash
```

例如：
```
git subtree add --prefix=src/Common https://github.com/M76chao/Common.git master
```
问题：
遇见报错Working tree has modifications.  Cannot add.
先commit当前更改，再重新执行上述命令


遇见报错：SSL certificate problem: unable to get local issuer certificate
管理员命令行，执行`git config --system http.sslverify false`
