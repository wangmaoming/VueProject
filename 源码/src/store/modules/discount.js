export default {
    namespaced: true,
    state: {
        coupon :[
            {
                available: 1,
                condition: "无使用门槛\n最多优惠1.5元",
                reason: "",
                value: 150,
                name: "优惠券名称",
                startAt: 1489104000,
                endAt: 1514592000,
                valueDesc: "1.5",
                unitDesc: "元"
            },
            {
                available: 1,
                condition: "无使用门槛\n最多优惠4元",
                reason: "",
                value: 400,
                name: "4元兑换券",
                startAt: 1489104000,
                endAt: 1514592000,
                valueDesc: "4.0",
                unitDesc: "元"
              }
        ]
    },
    mutations: {
        deleteCoupon(state,index){
            state.coupon.splice(index,1);
        }
    },
    actions: {},
    modules: {},
}