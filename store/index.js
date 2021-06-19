export const state = function () {
  return {
    products2: [
      [{
          id: 1,
          text: "護手霜A1款",
          price: 100,
          imgsrc: "https://cdn.bella.tw/files/AF24A07BEE-SP-7874082.jpg",
          title: "Title1"
        },
        {
          id: 2,
          text: "護手霜A2款",
          price: 200,
          imgsrc: "https://cdn.bella.tw/files/AF24A07BEE-SP-7874082.jpg",
          title: "Title2"
        },
        {
          id: 3,
          text: "護手霜A3款",
          price: 100,
          imgsrc: "https://cdn.bella.tw/files/AF24A07BEE-SP-7874082.jpg",
          title: "Title3"

        }
      ],
      [{
          id: 4,
          text: "護手霜B1款",
          price: 100,
          imgsrc: "https://cdn.bella.tw/files/L%E2%80%99OCCITANE%E5%8E%9F%E9%87%8E%E4%B9%8B%E5%BF%83%E8%8A%B1%E8%88%9E%E8%AD%B7%E6%89%8B%E9%9C%9C%2030ml%EF%BC%8FNT_400.jpg",
          title: "Title1"
        },
        {
          id: 5,
          text: "護手霜B2款",
          price: 200,
          imgsrc: "https://cdn.bella.tw/files/L%E2%80%99OCCITANE%E5%8E%9F%E9%87%8E%E4%B9%8B%E5%BF%83%E8%8A%B1%E8%88%9E%E8%AD%B7%E6%89%8B%E9%9C%9C%2030ml%EF%BC%8FNT_400.jpg",
          title: "Title1"
        },
        {
          id: 6,
          text: "護手霜B3款",
          price: 300,
          imgsrc: "https://cdn.bella.tw/files/L%E2%80%99OCCITANE%E5%8E%9F%E9%87%8E%E4%B9%8B%E5%BF%83%E8%8A%B1%E8%88%9E%E8%AD%B7%E6%89%8B%E9%9C%9C%2030ml%EF%BC%8FNT_400.jpg",
          title: "Title1"
        }
      ]

    ],
    cart: []

  }
}

export const mutations = {
  increment(state) {
    state.counter++
  },
  addProduct(state, payLoad) {
    //陣列尋找是否有此商品
    var obj = state.cart.find(function (item) {
      return item.id == payLoad.id;
    })

    if (obj) {
      //找到後數量相加
      obj.count = obj.count + payLoad.count;
    } else {
      //商品的第一次應該不在購物車
      //應該是該商品的第一次
      var findObj;
      state.products2.forEach(function (item) {
        if (!findObj) {
          findObj = item.find(function (product) {
            return product.id == payLoad.id;
          })
        }
      });

      if (findObj) {
        //找到後放上數量
        findObj.count = payLoad.count;
      }
      state.cart.push(findObj);
    }

  }
}
