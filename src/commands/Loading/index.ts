import * as vscode from 'vscode';

const Loading = vscode.commands.registerCommand('memoryusage.loading', () => {
  vscode.window.setStatusBarMessage('MemoryUsage加载中...');
});

export default Loading;
