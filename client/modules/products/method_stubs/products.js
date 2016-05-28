// export default function ({Meteor, Collections}) {
//   Meteor.methods({
//     'insertProduct'(category_id, name, description, price) {
//       const createdAt = new Date();
//       const prodDetails = {
//         category_id,
//         name,
//         description,
//         price,
//         createdAt,
//         modifiedAt: null,
//         deleted: null,
//         saving: true
//       };
//       Collections.Products.insert(prodDetails);
//     }
//   });
// }
