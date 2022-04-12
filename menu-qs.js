/*
 * @Author: wuwj8
 * @Date: 2022-04-06 14:36:50
 * @LastEditors: your name
 * @LastEditTime: 2022-04-06 14:37:25
 * @FilePath: \tdp-application-center\1.js
 * @Description:
 */
// var menu_list = [
//     {
//         id: '1',
//         menu_name: '设置',
//         menu_url: 'setting',
//         parent_id: 0
//     },
//     {
//         id: '1-1',
//         menu_name: '权限设置',
//         menu_url: 'setting.permission',
//         parent_id: '1'
//     },
//     {
//         id: '1-1-1',
//         menu_name: '用户管理列表',
//         menu_url: 'setting.permission.user_list',
//         parent_id: '1-1'
//     },
//     {
//         id: '1-1-1-1',
//         menu_name: '用户管理列表1',
//         menu_url: 'setting.permission.user_list',
//         parent_id: '1-1-1'
//     },
//     {
//         id: '1-1-2',
//         menu_name: '用户管理新增',
//         menu_url: 'setting.permission.user_add',
//         parent_id: '1-1'
//     },
//     {
//         id: '1-1-3',
//         menu_name: '角色管理列表',
//         menu_url: 'setting.permission.role_list',
//         parent_id: '1-1'
//     },
//     {
//         id: '1-2',
//         menu_name: '菜单设置',
//         menu_url: 'setting.menu',
//         parent_id: '1'
//     },
//     {
//         id: '1-2-1',
//         menu_name: '菜单列表',
//         menu_url: 'setting.menu.menu_list',
//         parent_id: '1-2'
//     },
//     {
//         id: '1-2-2',
//         menu_name: '菜单添加',
//         menu_url: 'setting.menu.menu_add',
//         parent_id: '1-2'
//     },
//     {
//         id: '2',
//         menu_name: '订单',
//         menu_url: 'order',
//         parent_id: 0
//     },
//     {
//         id: '2-1',
//         menu_name: '报单审核',
//         menu_url: 'order.orderreview',
//         parent_id: '2'
//     },
//     {
//         id: '2-2',
//         menu_name: '退款管理',
//         menu_url: 'order.refundmanagement',
//         parent_id: '2'
//     }
// ];

// function setTree(data) {
//     const temp = {};
//     const treeData = [];
//     data.forEach(function (item) {
//         temp[item.id] = item;
//     });
//     data.forEach((item) => {
//         const parent = temp[item.parent_id];
//         if (parent) {
//             (parent.children || (parent.children = [])).push(item);
//         } else {
//             treeData.push(item);
//         }
//     });
//     return treeData;
// }

// console.log(setTree(menu_list));
