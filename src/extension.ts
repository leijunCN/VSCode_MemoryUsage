// 导入VS Code扩展开发的API，模块 'vscode' 包含了VS Code的扩展功能
// 在下面的代码中，导入该模块并给它起了别名 'vscode'
import * as vscode from 'vscode';
import Commands from './commands';
import useIntervalTimer from './utils/timer';

const timer = useIntervalTimer();
// 此方法在扩展被激活时被调用
// 扩展在首次执行命令时被激活
export function activate(context: vscode.ExtensionContext) {
  // commandId 参数必须与 package.json 中的 command 字段匹配
  // 将注册命令的 disposable 对象添加到 subscriptions 数组中
  context.subscriptions.splice(context.subscriptions.length, 0, ...Commands);

  // 在插件激活时先执行一次更新状态栏的命令
  vscode.commands.executeCommand('memoryusage.loading');
  timer.start(() => {
    vscode.commands.executeCommand('memoryusage.updateMemory');
  }, 1500);
}

// 当扩展被停用时，将执行此方法
export function deactivate() {
  // 停用时清理定时器
  timer.stop();
}
