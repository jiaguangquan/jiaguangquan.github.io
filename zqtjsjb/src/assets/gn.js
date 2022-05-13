const regionarray = [
  {
    CODE: "370000",
    PARENT_CODE: "#",
    NAME: "山东省",
    open: true
  },
  {
    CODE: "370100",
    PARENT_CODE: "370000",
    NAME: "济南市"
  },
  {
    CODE: "370102",
    PARENT_CODE: "370100",
    NAME: "历下区"
  },
  {
    CODE: "370103",
    PARENT_CODE: "370100",
    NAME: "市中区"
  },
  {
    CODE: "370104",
    PARENT_CODE: "370100",
    NAME: "槐荫区"
  },
  {
    CODE: "370105",
    PARENT_CODE: "370100",
    NAME: "天桥区"
  },
  {
    CODE: "370112",
    PARENT_CODE: "370100",
    NAME: "历城区"
  },
  {
    CODE: "370113",
    PARENT_CODE: "370100",
    NAME: "长清区"
  },
  {
    CODE: "370124",
    PARENT_CODE: "370100",
    NAME: "平阴县"
  },
  {
    CODE: "370125",
    PARENT_CODE: "370100",
    NAME: "济阳县"
  },
  {
    CODE: "370126",
    PARENT_CODE: "370100",
    NAME: "商河县"
  },
  {
    CODE: "370181",
    PARENT_CODE: "370100",
    NAME: "章丘市"
  },
  {
    CODE: "370191",
    PARENT_CODE: "370100",
    NAME: "高新区"
  },
  {
    CODE: "371202",
    PARENT_CODE: "370100",
    NAME: "莱芜区"
  },
  {
    CODE: "371203",
    PARENT_CODE: "370100",
    NAME: "钢城区"
  },
  {
    CODE: "371291",
    PARENT_CODE: "370100",
    NAME: "莱芜高新区"
  },
  {
    CODE: "371292",
    PARENT_CODE: "370100",
    NAME: "莱芜经济开发区"
  },
  {
    CODE: "371293",
    PARENT_CODE: "370100",
    NAME: "莱芜雪野旅游区"
  },
  {
    CODE: "371294",
    PARENT_CODE: "370100",
    NAME: "莱芜钢城经济开发区"
  },
  {
    CODE: "370300",
    PARENT_CODE: "370000",
    NAME: "淄博市"
  },
  {
    CODE: "370302",
    PARENT_CODE: "370300",
    NAME: "淄川区"
  },
  {
    CODE: "370303",
    PARENT_CODE: "370300",
    NAME: "张店区"
  },
  {
    CODE: "370304",
    PARENT_CODE: "370300",
    NAME: "博山区"
  },
  {
    CODE: "370305",
    PARENT_CODE: "370300",
    NAME: "临淄区"
  },
  {
    CODE: "370306",
    PARENT_CODE: "370300",
    NAME: "周村区"
  },
  {
    CODE: "370321",
    PARENT_CODE: "370300",
    NAME: "桓台县"
  },
  {
    CODE: "370322",
    PARENT_CODE: "370300",
    NAME: "高青县"
  },
  {
    CODE: "370323",
    PARENT_CODE: "370300",
    NAME: "沂源县"
  },
  {
    CODE: "370391",
    PARENT_CODE: "370300",
    NAME: "高新区"
  },
  {
    CODE: "370392",
    PARENT_CODE: "370300",
    NAME: "文昌湖区"
  },
  {
    CODE: "370393",
    PARENT_CODE: "370300",
    NAME: "淄博经济开发区"
  },
  {
    CODE: "370400",
    PARENT_CODE: "370000",
    NAME: "枣庄市"
  },
  {
    CODE: "370402",
    PARENT_CODE: "370400",
    NAME: "市中区"
  },
  {
    CODE: "370403",
    PARENT_CODE: "370400",
    NAME: "薛城区"
  },
  {
    CODE: "370404",
    PARENT_CODE: "370400",
    NAME: "峄城区"
  },
  {
    CODE: "370405",
    PARENT_CODE: "370400",
    NAME: "台儿庄区"
  },
  {
    CODE: "370406",
    PARENT_CODE: "370400",
    NAME: "山亭区"
  },
  {
    CODE: "370481",
    PARENT_CODE: "370400",
    NAME: "滕州市"
  },
  {
    CODE: "370491",
    PARENT_CODE: "370400",
    NAME: "高新技术产业开发区"
  },
  {
    CODE: "370500",
    PARENT_CODE: "370000",
    NAME: "东营市"
  },
  {
    CODE: "370502",
    PARENT_CODE: "370500",
    NAME: "东营区"
  },
  {
    CODE: "370503",
    PARENT_CODE: "370500",
    NAME: "河口区"
  },
  {
    CODE: "370522",
    PARENT_CODE: "370500",
    NAME: "利津县"
  },
  {
    CODE: "370523",
    PARENT_CODE: "370500",
    NAME: "广饶县"
  },
  {
    CODE: "370591",
    PARENT_CODE: "370500",
    NAME: "农业高新技术产业示范区"
  },
  {
    CODE: "370593",
    PARENT_CODE: "370500",
    NAME: "东营港经济开发区"
  },
  {
    CODE: "370594",
    PARENT_CODE: "370500",
    NAME: "现代畜牧业示范区"
  },
  {
    CODE: "370600",
    PARENT_CODE: "370000",
    NAME: "烟台市"
  },
  {
    CODE: "370602",
    PARENT_CODE: "370600",
    NAME: "芝罘区"
  },
  {
    CODE: "370611",
    PARENT_CODE: "370600",
    NAME: "福山区"
  },
  {
    CODE: "370612",
    PARENT_CODE: "370600",
    NAME: "牟平区"
  },
  {
    CODE: "370613",
    PARENT_CODE: "370600",
    NAME: "莱山区"
  },
  {
    CODE: "370634",
    PARENT_CODE: "370600",
    NAME: "长岛县"
  },
  {
    CODE: "370681",
    PARENT_CODE: "370600",
    NAME: "龙口市"
  },
  {
    CODE: "370682",
    PARENT_CODE: "370600",
    NAME: "莱阳市"
  },
  {
    CODE: "370683",
    PARENT_CODE: "370600",
    NAME: "莱州市"
  },
  {
    CODE: "370684",
    PARENT_CODE: "370600",
    NAME: "蓬莱市"
  },
  {
    CODE: "370685",
    PARENT_CODE: "370600",
    NAME: "招远市"
  },
  {
    CODE: "370686",
    PARENT_CODE: "370600",
    NAME: "栖霞市"
  },
  {
    CODE: "370687",
    PARENT_CODE: "370600",
    NAME: "海阳市"
  },
  {
    CODE: "370691",
    PARENT_CODE: "370600",
    NAME: "经济技术开发区"
  },
  {
    CODE: "370692",
    PARENT_CODE: "370600",
    NAME: "高新技术产业开发区"
  },
  {
    CODE: "370693",
    PARENT_CODE: "370600",
    NAME: "昆嵛山国家级自然保护区"
  },
  {
    CODE: "370700",
    PARENT_CODE: "370000",
    NAME: "潍坊市"
  },
  {
    CODE: "370702",
    PARENT_CODE: "370700",
    NAME: "潍城区"
  },
  {
    CODE: "370703",
    PARENT_CODE: "370700",
    NAME: "寒亭区"
  },
  {
    CODE: "370704",
    PARENT_CODE: "370700",
    NAME: "坊子区"
  },
  {
    CODE: "370705",
    PARENT_CODE: "370700",
    NAME: "奎文区"
  },
  {
    CODE: "370724",
    PARENT_CODE: "370700",
    NAME: "临朐县"
  },
  {
    CODE: "370725",
    PARENT_CODE: "370700",
    NAME: "昌乐县"
  },
  {
    CODE: "370781",
    PARENT_CODE: "370700",
    NAME: "青州市"
  },
  {
    CODE: "370782",
    PARENT_CODE: "370700",
    NAME: "诸城市"
  },
  {
    CODE: "370783",
    PARENT_CODE: "370700",
    NAME: "寿光市"
  },
  {
    CODE: "370784",
    PARENT_CODE: "370700",
    NAME: "安丘市"
  },
  {
    CODE: "370785",
    PARENT_CODE: "370700",
    NAME: "高密市"
  },
  {
    CODE: "370786",
    PARENT_CODE: "370700",
    NAME: "昌邑市"
  },
  {
    CODE: "370791",
    PARENT_CODE: "370700",
    NAME: "国家高新技术产业开发区"
  },
  {
    CODE: "370792",
    PARENT_CODE: "370700",
    NAME: "滨海经济技术开发区"
  },
  {
    CODE: "370793",
    PARENT_CODE: "370700",
    NAME: "综合保税区"
  },
  {
    CODE: "370794",
    PARENT_CODE: "370700",
    NAME: "经济开发区"
  },
  {
    CODE: "370795",
    PARENT_CODE: "370700",
    NAME: "峡山生态经济开发区"
  },
  {
    CODE: "370800",
    PARENT_CODE: "370000",
    NAME: "济宁市"
  },
  {
    CODE: "370811",
    PARENT_CODE: "370800",
    NAME: "任城区"
  },
  {
    CODE: "370812",
    PARENT_CODE: "370800",
    NAME: "兖州区"
  },
  {
    CODE: "370826",
    PARENT_CODE: "370800",
    NAME: "微山县"
  },
  {
    CODE: "370827",
    PARENT_CODE: "370800",
    NAME: "鱼台县"
  },
  {
    CODE: "370828",
    PARENT_CODE: "370800",
    NAME: "金乡县"
  },
  {
    CODE: "370829",
    PARENT_CODE: "370800",
    NAME: "嘉祥县"
  },
  {
    CODE: "370830",
    PARENT_CODE: "370800",
    NAME: "汶上县"
  },
  {
    CODE: "370831",
    PARENT_CODE: "370800",
    NAME: "泗水县"
  },
  {
    CODE: "370832",
    PARENT_CODE: "370800",
    NAME: "梁山县"
  },
  {
    CODE: "370881",
    PARENT_CODE: "370800",
    NAME: "曲阜市"
  },
  {
    CODE: "370883",
    PARENT_CODE: "370800",
    NAME: "邹城市"
  },
  {
    CODE: "370891",
    PARENT_CODE: "370800",
    NAME: "高新技术产业开发区"
  },
  {
    CODE: "370892",
    PARENT_CODE: "370800",
    NAME: "北湖省级旅游度假区"
  },
  {
    CODE: "370893",
    PARENT_CODE: "370800",
    NAME: "经济开发区"
  },
  {
    CODE: "370900",
    PARENT_CODE: "370000",
    NAME: "泰安市"
  },
  {
    CODE: "370902",
    PARENT_CODE: "370900",
    NAME: "泰山区"
  },
  {
    CODE: "370911",
    PARENT_CODE: "370900",
    NAME: "岱岳区"
  },
  {
    CODE: "370921",
    PARENT_CODE: "370900",
    NAME: "宁阳县"
  },
  {
    CODE: "370923",
    PARENT_CODE: "370900",
    NAME: "东平县"
  },
  {
    CODE: "370982",
    PARENT_CODE: "370900",
    NAME: "新泰市"
  },
  {
    CODE: "370983",
    PARENT_CODE: "370900",
    NAME: "肥城市"
  },
  {
    CODE: "370991",
    PARENT_CODE: "370900",
    NAME: "高新区"
  },
  {
    CODE: "371000",
    PARENT_CODE: "370000",
    NAME: "威海市"
  },
  {
    CODE: "371002",
    PARENT_CODE: "371000",
    NAME: "环翠区"
  },
  {
    CODE: "371003",
    PARENT_CODE: "371000",
    NAME: "文登区"
  },
  {
    CODE: "371082",
    PARENT_CODE: "371000",
    NAME: "荣成市"
  },
  {
    CODE: "371083",
    PARENT_CODE: "371000",
    NAME: "乳山市"
  },
  {
    CODE: "371091",
    PARENT_CODE: "371000",
    NAME: "火炬高技术产业开发区"
  },
  {
    CODE: "371092",
    PARENT_CODE: "371000",
    NAME: "经济技术开发区"
  },
  {
    CODE: "371093",
    PARENT_CODE: "371000",
    NAME: "临港经济技术开发区"
  },
  {
    CODE: "371094",
    PARENT_CODE: "371000",
    NAME: "综合保税区"
  },
  {
    CODE: "371100",
    PARENT_CODE: "370000",
    NAME: "日照市"
  },
  {
    CODE: "371102",
    PARENT_CODE: "371100",
    NAME: "东港区"
  },
  {
    CODE: "371103",
    PARENT_CODE: "371100",
    NAME: "岚山区"
  },
  {
    CODE: "371121",
    PARENT_CODE: "371100",
    NAME: "五莲县"
  },
  {
    CODE: "371122",
    PARENT_CODE: "371100",
    NAME: "莒县"
  },
  {
    CODE: "371191",
    PARENT_CODE: "371100",
    NAME: "经济技术开发区"
  },
  {
    CODE: "371192",
    PARENT_CODE: "371100",
    NAME: "山海天旅游度假区"
  },
  {
    CODE: "371193",
    PARENT_CODE: "371100",
    NAME: "国际海洋城"
  },
  {
    CODE: "371300",
    PARENT_CODE: "370000",
    NAME: "临沂市"
  },
  {
    CODE: "371302",
    PARENT_CODE: "371300",
    NAME: "兰山区"
  },
  {
    CODE: "371311",
    PARENT_CODE: "371300",
    NAME: "罗庄区"
  },
  {
    CODE: "371312",
    PARENT_CODE: "371300",
    NAME: "河东区"
  },
  {
    CODE: "371321",
    PARENT_CODE: "371300",
    NAME: "沂南县"
  },
  {
    CODE: "371322",
    PARENT_CODE: "371300",
    NAME: "郯城县"
  },
  {
    CODE: "371323",
    PARENT_CODE: "371300",
    NAME: "沂水县"
  },
  {
    CODE: "371324",
    PARENT_CODE: "371300",
    NAME: "兰陵县"
  },
  {
    CODE: "371325",
    PARENT_CODE: "371300",
    NAME: "费县"
  },
  {
    CODE: "371326",
    PARENT_CODE: "371300",
    NAME: "平邑县"
  },
  {
    CODE: "371327",
    PARENT_CODE: "371300",
    NAME: "莒南县"
  },
  {
    CODE: "371328",
    PARENT_CODE: "371300",
    NAME: "蒙阴县"
  },
  {
    CODE: "371329",
    PARENT_CODE: "371300",
    NAME: "临沭县"
  },
  {
    CODE: "371391",
    PARENT_CODE: "371300",
    NAME: "高新区"
  },
  {
    CODE: "371392",
    PARENT_CODE: "371300",
    NAME: "开发区"
  },
  {
    CODE: "371393",
    PARENT_CODE: "371300",
    NAME: "临港经济开发区"
  },
  {
    CODE: "371394",
    PARENT_CODE: "371300",
    NAME: "蒙山旅游区"
  },
  {
    CODE: "371400",
    PARENT_CODE: "370000",
    NAME: "德州市"
  },
  {
    CODE: "371402",
    PARENT_CODE: "371400",
    NAME: "德城区"
  },
  {
    CODE: "371403",
    PARENT_CODE: "371400",
    NAME: "陵城区"
  },
  {
    CODE: "371422",
    PARENT_CODE: "371400",
    NAME: "宁津县"
  },
  {
    CODE: "371423",
    PARENT_CODE: "371400",
    NAME: "庆云县"
  },
  {
    CODE: "371424",
    PARENT_CODE: "371400",
    NAME: "临邑县"
  },
  {
    CODE: "371425",
    PARENT_CODE: "371400",
    NAME: "齐河县"
  },
  {
    CODE: "371426",
    PARENT_CODE: "371400",
    NAME: "平原县"
  },
  {
    CODE: "371427",
    PARENT_CODE: "371400",
    NAME: "夏津县"
  },
  {
    CODE: "371428",
    PARENT_CODE: "371400",
    NAME: "武城县"
  },
  {
    CODE: "371481",
    PARENT_CODE: "371400",
    NAME: "乐陵市"
  },
  {
    CODE: "371482",
    PARENT_CODE: "371400",
    NAME: "禹城市"
  },
  {
    CODE: "371491",
    PARENT_CODE: "371400",
    NAME: "经济技术开发区"
  },
  {
    CODE: "371492",
    PARENT_CODE: "371400",
    NAME: "运河开发区"
  },
  {
    CODE: "371500",
    PARENT_CODE: "370000",
    NAME: "聊城市"
  },
  {
    CODE: "371502",
    PARENT_CODE: "371500",
    NAME: "东昌府区"
  },
  {
    CODE: "371521",
    PARENT_CODE: "371500",
    NAME: "阳谷县"
  },
  {
    CODE: "371522",
    PARENT_CODE: "371500",
    NAME: "莘县"
  },
  {
    CODE: "371523",
    PARENT_CODE: "371500",
    NAME: "茌平县"
  },
  {
    CODE: "371524",
    PARENT_CODE: "371500",
    NAME: "东阿县"
  },
  {
    CODE: "371525",
    PARENT_CODE: "371500",
    NAME: "冠县"
  },
  {
    CODE: "371526",
    PARENT_CODE: "371500",
    NAME: "高唐县"
  },
  {
    CODE: "371581",
    PARENT_CODE: "371500",
    NAME: "临清市"
  },
  {
    CODE: "371591",
    PARENT_CODE: "371500",
    NAME: "高新区"
  },
  {
    CODE: "371592",
    PARENT_CODE: "371500",
    NAME: "开发区"
  },
  {
    CODE: "371593",
    PARENT_CODE: "371500",
    NAME: "度假区"
  },
  {
    CODE: "371600",
    PARENT_CODE: "370000",
    NAME: "滨州市"
  },
  {
    CODE: "371602",
    PARENT_CODE: "371600",
    NAME: "滨城区"
  },
  {
    CODE: "371603",
    PARENT_CODE: "371600",
    NAME: "沾化区"
  },
  {
    CODE: "371621",
    PARENT_CODE: "371600",
    NAME: "惠民县"
  },
  {
    CODE: "371622",
    PARENT_CODE: "371600",
    NAME: "阳信县"
  },
  {
    CODE: "371623",
    PARENT_CODE: "371600",
    NAME: "无棣县"
  },
  {
    CODE: "371624",
    PARENT_CODE: "371600",
    NAME: "沾化县"
  },
  {
    CODE: "371625",
    PARENT_CODE: "371600",
    NAME: "博兴县"
  },
  {
    CODE: "371626",
    PARENT_CODE: "371600",
    NAME: "邹平县"
  },
  {
    CODE: "371691",
    PARENT_CODE: "371600",
    NAME: "高新区"
  },
  {
    CODE: "371692",
    PARENT_CODE: "371600",
    NAME: "开发区"
  },
  {
    CODE: "371693",
    PARENT_CODE: "371600",
    NAME: "北海新区"
  },
  {
    CODE: "371694",
    PARENT_CODE: "371600",
    NAME: "北海经济开发区"
  },
  {
    CODE: "371700",
    PARENT_CODE: "370000",
    NAME: "菏泽市"
  },
  {
    CODE: "371702",
    PARENT_CODE: "371700",
    NAME: "牡丹区"
  },
  {
    CODE: "371721",
    PARENT_CODE: "371700",
    NAME: "曹县"
  },
  {
    CODE: "371722",
    PARENT_CODE: "371700",
    NAME: "单县"
  },
  {
    CODE: "371723",
    PARENT_CODE: "371700",
    NAME: "成武县"
  },
  {
    CODE: "371724",
    PARENT_CODE: "371700",
    NAME: "巨野县"
  },
  {
    CODE: "371725",
    PARENT_CODE: "371700",
    NAME: "郓城县"
  },
  {
    CODE: "371726",
    PARENT_CODE: "371700",
    NAME: "鄄城县"
  },
  {
    CODE: "371727",
    PARENT_CODE: "371700",
    NAME: "定陶县"
  },
  {
    CODE: "371728",
    PARENT_CODE: "371700",
    NAME: "东明县"
  }
];
