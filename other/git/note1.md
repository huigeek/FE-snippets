# git

## 基本概念

- 工作区（workspace）
- 暂存区（缓冲区index）
- 本地仓库（repository）
- 远程仓库（remote）
- 版本库.git文件

git add xx （把工作区的添加到暂存区，红变绿）
git commit xx （把暂存区的提交到本地仓库）
git push origin xx （把本地仓库的推送到远程仓库）

git reset -- xx (本地仓库撤回到暂存区)
git checkout -- xx （暂存区撤回到工作区，绿变红）

## git commit 规范
- feat: 新功能（feature）
- fix: 修复问题
- docs: 更新文档
- refactor: 重构
- build: 构建编译相关的改动
- chore: 构建过程或辅助工具的变动
- test: 增加测试
- style: 修改样式（不影响代码运行）


## 分支命名

- master：主分支，上线版本，布署生产环境的分支。由develop或hotfix分支合并，不能直接在master上修改
- develop：开发分支。开发新功能时，feature分支都是基于develop分支创建的
- feature：开发新功能分支。分支命名：feature/user_module、feature/list_module
- release：预上线分支，发布提测阶段。会release分支代码为基准提测
- hotfix：线上紧急修复分支。命名跟feature类似，hotfix/csrf_token、hotfix/ie_style。修复完成后合并到master和develop上



