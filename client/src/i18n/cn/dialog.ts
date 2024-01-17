const dialogTrans = {
  deleteTipAction: '输入',
  deleteTipPurpose: '进行确认。',
  deleteTitle: `删除 {{type}}`,
  renameTitle: `重命名 {{type}}`,
  releaseTitle: `发布 {{type}}`,
  duplicateTitle: `复制 {{type}}`,
  createAlias: `为 {{type}} 创建别名`,
  compact: `压缩Collection {{type}}`,
  flush: `为 {{type}} 的数据落盘`,
  loadTitle: `加载 {{type}}`,

  loadContent: `您正在尝试加载带有数据的 {{type}}。只有已加载的 {{type}} 可以被搜索。`,
  releaseContent: `您正在尝试发布带有数据的 {{type}}。请注意，数据将不再可用于搜索。`,

  createTitle: `在 "{{name}}" 上创建 {{type}}`,
  emptyTitle: `清空{{type}}的数据`,
  exportTitle: `导出{{type}}的数据`,
  selectFieldToExport: `导出 <b>({{count}}) 字段</b>, 一共 <b><i>{{total}}</i></b> 行.`
};

export default dialogTrans;
