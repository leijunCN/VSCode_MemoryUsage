// 用setTimeOut实现的setInterval
export const setIntervalUsingTimeout = (callback: () => void, interval: number): NodeJS.Timeout => {
  const timerId = setTimeout(() => {
    callback();
    setIntervalUsingTimeout(callback, interval);
  }, interval);
  return timerId;
};

// 用于创建定时器实例
const useIntervalTimer = () => {
  let timerId: NodeJS.Timeout;

  const stop = () => {
    clearTimeout(timerId);
  };

  const start = (callback: () => void, interval: number = 1000) => {
    stop();
    timerId = setIntervalUsingTimeout(callback, interval);
  };

  return {
    start,
    stop,
  };
};

export default useIntervalTimer;
