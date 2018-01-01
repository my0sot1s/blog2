// import axios from 'axios'
//
// export const InfinitiFetcher = {
//   data: function () {
//     return {
//       loading: false,
//       data: []
//     }
//   },
//   methods: {
//     fetcher: function (type) {
//       if (type !== `append`) this.loader = true
//       axios.get(`https://te-nguyen.herokuapp.com/api/Blog/getBlogInfo?limit=${this.limit}&page=${this.page}`)
//         .then(({data}) => {
//           if (!data.data.length || data.data.length === 0) this.lock = true
//           else {
//             if (type === `append`) this.data.push(...data.data)
//             else this.data = data.data
//           }
//         })
//         .then(() => {
//           setTimeout(() => {
//             this.loader = false
//           }, 500)
//         })
//     }
//   }
// }
