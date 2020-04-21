export default {
    namespaced: true,
    state: {
        active: 0,
        list: [
            // {
            // orderId:'123123123',//订单id固定不变，由多个相关数据组成，包括订单生成事件
            // address:{
            //     //地址
            // },
            // goodsList:{
            //     //商品
            // },
            // type:'' //状态 1待支付 2待收货 3已完成
            // }
            // goodsComment:'',
        ],
        typeList: ["全部订单", "待支付", "待收货", "已完成", "已评价"],
    },
    mutations: {
        change(state, index) {
            state.active = index;
        },
        //添加用户点击了支付的商品数据
        add(state, obj) {
            state.list.push(obj);
        },
        changeGoodsSituation(state, obj) {
            state.list = null;// 清空原本数据
            state.list = obj;//给list赋新数据
        },
        //删除订单
        deleteOrder(state,index){
            state.list.splice(index,1);
        },
        //通过id单独修改数据
        editId(state, obj) {
            for (let i = 0; i < obj.length; i++) {
                for (let j = 0; j < state.list.length; j++) {
                    //修改的数据的id必须等于当前vuex的id
                    if (obj[i].orderId == state.list[j].orderId && obj[i].type == 6) {
                        state.list.splice(j, 1) //状态值为6，删除数据
                    } else if (obj[i].orderId == state.list[j].orderId) {
                        state.list[j].type = obj[i].type;
                    }
                }
            }
        }
    },
    actions: {},
    getters: {},
    modules: {}
}