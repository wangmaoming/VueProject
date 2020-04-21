export default {
    namespaced: true, //允许外部调用mutations和actions
    state: {
        list: [ //购物车遍历的数据
            // {
            //     goodsName: "基础润肤化妆水_清爽型",
            //     color: "其他",
            //     size: "400ml",
            //     singlePrice: "50",
            //     totalPrice: "50",
            //     mount: 1,
            //     currentMount: 1,
            //     checked: true,
            //     id: 1,
            //     src: 'https://prodoss01.blob.core.chinacloudapi.cn/yoren-muji-ec-revised-prod/4547315821709.jpg?1533883225#h'
            // },
            // {
            //     goodsName: "男装t恤",
            //     color: "黑色",
            //     size: "L",
            //     singlePrice: "100",
            //     mount: 1,
            //     currentMount: 1,
            //     checked: true,
            //     id: 2
            // },
            // {
            //     goodsName: "男装牛仔裤",
            //     color: "其他",
            //     size: "L",
            //     singlePrice: "300",
            //     mount: 1,
            //     currentMount: 1,
            //     checked: true,
            //     id: 3
            // }
        ],
        listShow: true,
        emptyShow: false,
        allClear: true //控制弹出的模态框
    },
    mutations: {
        //添加商品到购物车
        add(state, obj) {
            //判断添加到购物车的商品是否已经存在购物车中
            let goodsIndex = state.list.findIndex(val => val.id == obj.id);
            if (goodsIndex != -1) {
                state.list[goodsIndex].mount += 1;
            } else {
                state.list.push(obj)
            }
        },
        //从购物车中删除商品
        delete(state, index) {
            state.list.splice(index, 1);
        },
        //用户购买物品后，删除购物车中对应的物品
        emptyGoods(state,arr){
            for(let i=0;i<state.list.length;i++){
                for(let j=0;j<arr.length;j++){
                    if(state.list[i].id == arr[j]){
                        state.list.splice(j,1);
                    }
                }
            }
        },
        //增加商品数量
        plus(state, showNumber) {
            state.list[showNumber].currentMount = parseInt(state.list[showNumber].currentMount) + 1;
        },
        //减小商品数量
        minus(state, showNumber) {
            if (state.list[showNumber].currentMount <= 1) {
                state.list[showNumber].currentMount = 1;
            } else {
                state.list[showNumber].currentMount -= 1;
            }
        },
        //显示商品列表
        showGoodsList(state) {
            state.listShow = true
        },
        //隐藏商品列表
        hideGoodsList(state) {
            state.listShow = false
        },
        //显示“购物车为空”
        showEmpty(state) {
            state.emptyShow = true
        },
        //隐藏“购物车为空”
        hideEmpty(state) {
            state.emptyShow = false
        },
        //购物车清空，控制actionSheet
        clearAll(state) {
            state.allClear = false
        },
        //购物车没清空
        noClear(state) {
            state.allClear = true
        }
    },
    actions: {},
    getters: {
        //计算总价
        totalPrice(state) {
            let total = 0;
            state.list.forEach(item => {
                if (item.checked) {
                    total += parseInt(item.mount) * parseInt(item.singlePrice);
                }
            });
            return total;
        }
    },
    modules: {}
}