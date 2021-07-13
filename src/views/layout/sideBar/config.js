// menuId 菜单ID,用于菜单权限配置
// newId 控制新上线功能 news 图标,

export const navMenus = [
  {
    icon: 'group',
    text: '查询文档',
    path: '/document',
    name: 'document',
    children: []
    // children: [
    //   {
    //     text: 'js',
    //     path: '/document/js',
    //     name: 'document-js'
    //   }
    // ]
  },
  // {
  //   icon: 'stock',
  //   text: '数据大盘',
  //   path: '',
  //   name: 'stock',
  //   menuId: 2,
  //   children: [
  //     {
  //       text: '全网流量大盘',
  //       path: '/stock/network',
  //       name: 'stock-network',
  //       menuId: 3,
  //       newId: 15
  //     },
  //     {
  //       text: '行业流量大盘',
  //       path: '/stock/industry',
  //       name: 'stock-industry',
  //       menuId: 4,
  //       newId: 16
  //     }
  //   ]
  // }
]
