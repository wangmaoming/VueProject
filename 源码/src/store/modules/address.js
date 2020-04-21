export default {
    namespaced: true,
    state: {
        addressList: [
            {
                name: '张三',
                tel: 13750009090,
                province: '广东省',
                city: '广州市',
                county: '天河区',
                postalCode: '515151',
                addressDetail: '人民路1号',
                isDefault: true,
                id: 0
            }
        ],
        defaultId: 0,
        // fromWhere: '',//用来判断从哪个路由进入我的地址
    },
    mutations: {
        addAddress(state, obj) {
            obj.id = state.addressList.length;
            state.addressList.push(obj);
        },
        //添加地址设置默认地址时执行
        setDefaultWhenAdd(state, id) {
            state.addressList.forEach((item) => {
                item.isDefault = false;
            })
            state.addressList[id].isDefault = true;
        },
        changeDefault(state, boo) {
            state.addressList.isDefault = boo;
        },
        //修改地址
        edit(state, obj) {
            let index = state.addressList.findIndex(item => item.id == obj.id);
            state.addressList[index] = obj;
        },
        //删除地址
        delete(state, index) {
            state.addressList.splice(index, 1);
        },
        setDefault(state, id) {
            for (let i = 0; i < state.addressList.length; i++) {
                state.addressList[i].isDefault = false;
            }
            state.addressList[id].isDefault = true;
        }
    },
    actions: {},
    getters: {},
    modules: {}
}