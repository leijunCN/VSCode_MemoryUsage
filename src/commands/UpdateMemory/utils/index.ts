// 进制
export const BASE: number = 1024;

// 当前支持的内存单位
export enum MemoryUnit {
  Byte = 'B',
  Kilobyte = 'KB',
  Megabyte = 'MB',
  Gigabyte = 'GB',
  Terabyte = 'TB',
  Petabyte = 'PB',
}

// 内存单位进制
export const getNextUnit = (unit?: MemoryUnit): MemoryUnit => {
  switch (unit) {
    case MemoryUnit.Byte:
      return MemoryUnit.Kilobyte;
    case MemoryUnit.Kilobyte:
      return MemoryUnit.Megabyte;
    case MemoryUnit.Megabyte:
      return MemoryUnit.Gigabyte;
    case MemoryUnit.Gigabyte:
      return MemoryUnit.Terabyte;
    case MemoryUnit.Terabyte:
      return MemoryUnit.Petabyte;
    default:
      return MemoryUnit.Byte;
  }
};

// 内存数量转化
export const formatMemory = (memory: number = 0, unit?: MemoryUnit): string => {
  const curUnit = getNextUnit(unit);
  const nextMemory = memory / BASE;
  if (nextMemory >= 1) {
    const curMemory = Math.round(nextMemory * 100) / 100;
    return formatMemory(curMemory, curUnit);
  }
  return `${memory}${curUnit}`;
};
