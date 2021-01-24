// const { guitarModel } = require('../models/guitar.model')
// const { categoryModel } = require('../models/category.model')

// const insert_guitars_toDB = async () => {
//     //Get all the categories ids
//     const electric_category = categoryModel.find({ name: 'Electric Guitars' })
//     const acoustic_category = categoryModel.find({ name: 'Acoustic Guitars' })
//     const classic_category = categoryModel.find({ name: 'Classic Guitars' })
//     const bass_category = categoryModel.find({ name: 'Bass Guitars' })
//     //Insert guitars to electric_category 
//     const guitar_one = new guitarModel({
//         name: 'Fender JT-300MDB Jay Turser',
//         category: electric_category[0]._id,
//         price: '700₪',
//         picture: "https://peimot.com/Cat_471170_4784.png"
//     })
//     const guitar_two = new guitarModel({
//         name: 'Ibanez CORT X-2BK-LH H,H',
//         category: electric_category[0]._id,
//         price: '1300₪',
//         picture: 'https://sound-check.co.il/wp-content/uploads/2020/04/6454.jpg'
//     })
//     const guitar_three = new guitarModel({
//         name: 'Gibson Custom 1968 Les Paul Custom Reissue - Ebony',
//         category: electric_category[0]._id,
//         price: '3500₪',
//         picture: 'https://www.kley-zemer.co.il/Media/Uploads/2523-57-78(1).png'
//     })

// }