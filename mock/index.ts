// mock/index.ts
import type { MockMethod } from "vite-plugin-mock";  // ！！！看这里，这个MockMethod 是个类型，不是方法，导入的时候要type。要么就直接不导入，直接在文件中到处一个数组即可
const arr: any = [];
for (let index = 0; index < 20; index++) {
  arr.push({
    customer_name: Boolean,
    status_text: "登录成功",
    os: "Windows 10",
    browser: "Chrome(99.0.4844.51)",
    ip: "192.168.9.110",
    created: "2021-12-14 10:41:02",
    location: "局域网 局域网",
  });
}

const logList = {
  total: 31,
  page: 1,
  page_size: 20,
  list: arr,
};

const statusList = {
  data: [
    { label: "@cname", value: '@integer(10, 30)' },
    { label: "@cname", value: '@integer(10, 30)' },
  ],
};

export default [
  {
    url: "/api/getList",
    method: "post",
    response: () => {
      return logList;
    },
  },
  {
    url: "/api/getStatusList",
    method: "get",
    response: () => {
      return statusList;
    },
  },
] as MockMethod[];
