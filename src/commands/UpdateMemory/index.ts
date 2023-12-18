import * as vscode from 'vscode';
import { formatMemory } from './utils';

// const statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);

// 注册命令，当命令被执行时更新状态栏
const UpdateMemory = vscode.commands.registerCommand('memoryusage.updateMemory', () => {
  const usedMemory = formatMemory(process.memoryUsage.rss()); // 获取当前使用的内存，单位是MB
  // statusBarItem.text = `内存占用：${usedMemory}`;
  // statusBarItem.show();
  vscode.window.setStatusBarMessage(`内存占用：${usedMemory}`, 5000);
});

export default UpdateMemory;
