// menuId 菜单ID,用于菜单权限配置
// newId 控制新上线功能 news 图标,

export const navMenus = [
  {
    icon: 'group',
    text: '工作台',
    path: '/work',
    name: 'work',
    menuId: 1,
    children: []
  },
  // {
  //   icon: 'myself',
  //   text: '我的',
  //   path: '',
  //   name: 'myself',
  //   children: [
  //     {
  //       text: '我的直播号',
  //       path: '/myself/mylive',
  //       name: 'myself-mylive',
  //       newId: 19
  //     },
  //     {
  //       text: '我的收藏夹',
  //       path: '/collection',
  //       name: 'myself-collection'
  //     },
  //     {
  //       text: '我的历史报告',
  //       path: '/myself/report',
  //       name: 'myself-report'
  //     }
  //   ]
  // },
  {
    icon: 'stock',
    text: '数据大盘',
    path: '',
    name: 'stock',
    menuId: 2,
    children: [
      {
        text: '全网流量大盘',
        path: '/stock/network',
        name: 'stock-network',
        menuId: 3,
        newId: 15
      },
      {
        text: '行业流量大盘',
        path: '/stock/industry',
        name: 'stock-industry',
        menuId: 4,
        newId: 16
      },
      {
        text: '标签流量大盘',
        path: '/stock/tags',
        name: 'stock-tags',
        menuId: 5,
        newId: 17
      },
      {
        text: '品类流量大盘',
        path: '/stock/category',
        name: 'stock-category',
        menuId: 6
      },
      {
        text: '品牌流量大盘',
        path: '/stock/brand',
        name: 'stock-brand',
        menuId: 7
      },
      {
        text: '官方活动分析',
        path: '/activity/list',
        name: 'stock-list',
        menuId: 8
      },
      {
        text: '行业数据报告',
        path: '/activity/report',
        name: 'stock-report',
        menuId: 9
      }
    ]
  },
  {
    icon: 'live',
    text: '直播分析',
    path: '',
    name: 'blogger',
    menuId: 10,
    children: [
      {
        text: '我监控的主播号',
        path: '/work/mylive',
        name: 'blogger-mylive',
        menuId: 11,
        newId: 19
      },
      {
        text: '主播查询',
        path: '/blogger/search',
        name: 'blogger-search',
        menuId: 12
      },
      {
        text: '主播榜单',
        path: '/blogger/list',
        name: 'blogger-list',
        menuId: 13
      },
      // {
      //   text: '纯佣播主',
      //   path: '/blogger/chunyong',
      //   name: 'blogger-chunyong'
      // },
      // {
      //   text: '达人排行榜',
      //   path: '/blogger/talent',
      //   name: 'blogger-talent'
      // },
      // {
      //   text: '商家排行榜',
      //   path: '/blogger/merchant',
      //   name: 'blogger-merchant'
      // },
      {
        text: '明星情报局',
        path: '/star',
        name: 'blogger-star',
        menuId: 15
      },
      {
        text: '热门直播榜',
        path: '/live/hot',
        name: 'blogger-hot',
        menuId: 19,
        newId: 3
      },
      {
        text: '智能直播榜',
        path: '/live/intellect',
        name: 'blogger-intellect',
        menuId: 57
      },
      {
        text: '直播记录搜索',
        path: '/live/search',
        name: 'blogger-search2',
        menuId: 20,
        newId: 4
      },
      // {
      //   text: '销量排行榜',
      //   path: '/live/rank',
      //   name: 'live-rank',
      //   menuId: 21,
      //   newId: 5
      // }
      {
        text: '机构排行榜',
        path: '/blogger/inst',
        name: 'blogger-inst',
        menuId: 14
      }
    ]
  },
  // {
  //   icon: 'star',
  //   text: '明星情报局',
  //   path: '',
  //   name: 'star',
  //   menuId: 15,
  //   children: [
  //     {
  //       text: '明星主播榜',
  //       path: '/star/anchor',
  //       name: 'star-anchor',
  //       menuId: 16
  //     },
  //     {
  //       text: '明星参播榜',
  //       path: '/star/joinLive',
  //       name: 'star-joinLive',
  //       menuId: 17
  //     }
  //   ]
  // },
  // {
  //   icon: 'live',
  //   text: '单场直播分析',
  //   path: '',
  //   name: 'live',
  //   menuId: 18,
  //   children: [

  //   ]
  // },
  {
    icon: 'video',
    text: '短视频分析',
    path: '',
    name: 'video',
    menuId: 22,
    children: [
      {
        text: '视频搜索',
        path: '/video/search',
        name: 'video-search',
        menuId: 23,
        newId: 24
      },
      {
        text: '热门视频',
        path: '/video/hot',
        name: 'video-hot',
        menuId: 24,
        newId: 23
      },
      {
        text: '话题热榜',
        path: '/video/trend',
        name: 'video-trend',
        menuId: 25
      }
    ]
  },
  {
    icon: 'analysis',
    text: '商品分析',
    path: '',
    name: 'goods',
    menuId: 26,
    children: [
      {
        text: '商品搜索',
        path: '/goods/search',
        name: 'goods-search',
        menuId: 27
      },
      {
        text: '爆款商品榜',
        path: '/goods/explosion',
        name: 'goods-explosion',
        menuId: 28
      },
      {
        text: '商品黑马榜',
        path: '/goods/horse',
        name: 'goods-horse',
        menuId: 29
      },
      {
        text: '淘客商品榜',
        path: '/goods/customer',
        name: 'goods-customer',
        menuId: 30
      }
      // {
      //   text: '播主销量榜',
      //   path: '/goods/sell',
      //   name: 'goods-sell'
      // }
    ]
  },
  {
    icon: 'brand',
    text: '品牌分析',
    path: '',
    name: 'brand',
    menuId: 31,
    children: [
      {
        text: '品牌搜索',
        path: '/brand/search',
        name: 'brand-search',
        menuId: 32,
        newId: 21
      },
      {
        text: '品牌排行榜',
        path: '/brand/rank',
        name: 'brand-rank',
        menuId: 33,
        newId: 22
      }
    ]
  },
  {
    icon: 'competitor',
    text: '竞店分析',
    path: '',
    name: 'competitor',
    menuId: 34,
    children: [
      {
        text: '竞店搜索',
        path: '/competitor/search',
        name: 'competitor-search',
        menuId: 35
      },
      {
        text: '店铺排行榜',
        path: '/competitor/shop',
        name: 'competitor-shop',
        menuId: 36
      }
    ]
  },
  {
    icon: 'hotword',
    text: '热品词分析',
    path: '',
    name: 'hotword',
    menuId: 37,
    children: [
      {
        text: '热品词搜索',
        path: '/hotword/search',
        name: 'hotword-search',
        menuId: 38
      },
      {
        text: '热品词榜单',
        path: '/hotword/rank',
        name: 'hotword-rank',
        menuId: 39
      },
      {
        text: '用户需求榜',
        path: '/hotword/demand',
        name: 'hotword-demand',
        menuId: 40
      }
    ]
  },
  // {
  //   icon: 'activity',
  //   text: '专题分析',
  //   path: '',
  //   name: 'activity',
  //   children: [

  //   ]
  // },
  {
    icon: 'treasure',
    text: '工具箱',
    path: '',
    name: 'treasure',
    menuId: 41,
    children: [
      {
        text: '数据对比工具',
        path: '/treasure/compare',
        name: 'treasure-compare',
        menuId: 42,
        newId: 20
      },
      {
        text: '排名查询工具',
        path: '/treasure/ranking',
        name: 'treasure-ranking',
        menuId: 43
        // newId: 20
      },
      {
        text: '实时监测工具',
        path: '/treasure/monitor',
        name: 'treasure-monitor',
        menuId: 44
      },
      {
        text: '数据导出工具',
        path: '/treasure/export',
        name: 'treasure-export',
        menuId: 45
      },
      {
        text: '开播提醒工具',
        path: '/treasure/track',
        name: 'treasure-track',
        menuId: 46
      },
      {
        text: '实时数据大屏',
        path: '/treasure/realtime',
        name: 'treasure-realtime',
        menuId: 47
      }
    ]
  },
  {
    icon: 'person',
    text: '个人中心',
    path: '/setting',
    name: 'setting',
    menuId: 48,
    children: []
  },
  {
    icon: 'collect',
    text: '我的收藏',
    path: '/collection',
    name: 'collection',
    menuId: 49,
    children: []
  },
  {
    icon: 'charge',
    text: '购买续费',
    path: '/charge',
    name: 'charge',
    menuId: 50,
    children: []
  }
  // {
  //   icon: 'help',
  //   text: '帮助中心',
  //   path: '',
  //   children: []
  // }
]
