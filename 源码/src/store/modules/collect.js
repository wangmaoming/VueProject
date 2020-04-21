import { Toast } from "vant";
export default {
    namespaced: true,
    state: {
        list: [
            // {
            //     goodsName: '高领衫',
            //     singlePrice: '278',
            // }
        ],
    },
    mutations: {
        //添加商品到收藏夹
        add(state, obj) {
            let goodsIndex = state.list.findIndex(val => val.id == obj.id);
            if (goodsIndex != -1) {
                // state.list.splice(goodsIndex, 1);
                Toast('已取消，期待下次推荐');
            } else {
                Toast('成功添加到收藏夹，快去查看吧！')
                state.list.push(obj)
            }
        },
        // toggleFlag(state) {
        //     state.list.flag = !state.list.flag;
        // },
        //取消收藏
        cancel(state, index) {
            state.list.splice(index, 1)
            Toast('已取消，期待下次推荐')
            state.list.flag = !state.list.flag;
        }
    },
    actions: {},
    getters: {},
    modules: {}
}