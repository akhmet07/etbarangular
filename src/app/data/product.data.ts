import { Product } from '../types/card';

export const product: Product = 
  {
    id: 1,
    availability: true,
    company: 'Google',
    title: 'Google Pixel 1 64GB',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKCh89zT1pTXH8a1GiEvFj3oeuktsGwc6wT9Miz7EiuKYknDGOK0-VLwbIShv2XAlVwFU&usqp=CAU',
    rating: {
      value: 3,
      reviews: 4,
    },
    price: {
      value: 53000,
      discount: 0.3,
    },
    bage: {
      color: '#FF3366',
      text: 'Скидка'
    }
  }

export const products: Array<Product> = [
      {
        id: 1,
        availability: true,
        company: 'Google',
        title: 'Google Pixel 1 64GB',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKCh89zT1pTXH8a1GiEvFj3oeuktsGwc6wT9Miz7EiuKYknDGOK0-VLwbIShv2XAlVwFU&usqp=CAU',
        rating: {
          value: 5,
          reviews: 4,
        },
        price: {
          value: 53000,
          discount: 0.3,
        },
        bage: {
          color: '#FF3366',
          text: 'Скидка'
        }
      },
      {
        id: 2,
        availability: true,
        company: 'Yandex',
        title: 'Yandex Pixel 2 64GB',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWB9ciNukWc9x8HsuGVPEzS-G5ySok9XMxT03Y-R0FJTwf5tZavNXZ8VcvrIETbPlLOL8&usqp=CAU',
        rating: {
          value: 5,
          reviews: 4,
        },
        price: {
          value: 66000,
          discount: 0.17,
        },
        bage: {
          color: '#FF3366',
          text: 'Скидка'
        }
      },
      {
        id: 3,
        availability: true,
        company: 'Mail',
        title: 'Mail Pixel 3 64GB',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKCh89zT1pTXH8a1GiEvFj3oeuktsGwc6wT9Miz7EiuKYknDGOK0-VLwbIShv2XAlVwFU&usqp=CAU',
        rating: {
          value: 5,
          reviews: 4,
        },
        price: {
          value: 63000,
          discount: undefined,
        },
        bage: {
          color: 'green',
          text: 'Быстрая доставка'
        }
      },
      {
        id: 4,
        availability: false,
        company: 'Mail',
        title: 'Mail Pixel 4 64GB',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWB9ciNukWc9x8HsuGVPEzS-G5ySok9XMxT03Y-R0FJTwf5tZavNXZ8VcvrIETbPlLOL8&usqp=CAU',
        rating: {
          value: 5,
          reviews: 4,
        },
        price: {
          value: 63000,
          discount: 0.2,
        },
        bage: {
          color: '#FF3366',
          text: 'Скидка'
        }
      },
      {
        id: 5,
        availability: true,
        company: 'Google',
        title: 'Google Pixel 5 64GB',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWB9ciNukWc9x8HsuGVPEzS-G5ySok9XMxT03Y-R0FJTwf5tZavNXZ8VcvrIETbPlLOL8&usqp=CAU',
        rating: {
          value: 5,
          reviews: 4,
        },
        price: {
          value: 53000,
          discount: 0.3,
        },
        bage: {
          color: '#FF3366',
          text: 'Скидка'
        }
      },
      {
        id: 6,
        availability: true,
        company: 'Yandex',
        title: 'Yandex Pixel 6 64GB',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWB9ciNukWc9x8HsuGVPEzS-G5ySok9XMxT03Y-R0FJTwf5tZavNXZ8VcvrIETbPlLOL8&usqp=CAU',
        rating: {
          value: 5,
          reviews: 4,
        },
        price: {
          value: 66000,
          discount: 0.17,
        },
        bage: {
          color: '#FF3366',
          text: 'Скидка'
        }
      },
      {
        id: 7,
        availability: true,
        company: 'Mail',
        title: 'Mail Pixel 7 64GB',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWB9ciNukWc9x8HsuGVPEzS-G5ySok9XMxT03Y-R0FJTwf5tZavNXZ8VcvrIETbPlLOL8&usqp=CAU',
        rating: {
          value: 5,
          reviews: 4,
        },
        price: {
          value: 63000,
          discount: undefined,
        },
        bage: {
          color: '#FFFFF',
          text: 'Быстрая доставка'
        }
      },
      {
        id: 8,
        availability: false,
        company: 'Mail',
        title: 'Mail Pixel 8 64GB',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWB9ciNukWc9x8HsuGVPEzS-G5ySok9XMxT03Y-R0FJTwf5tZavNXZ8VcvrIETbPlLOL8&usqp=CAU',
        rating: {
          value: 5,
          reviews: 4,
        },
        price: {
          value: 63000,
          discount: 0.2,
        },
        bage: {
          color: '#FF3366',
          text: 'Скидка'
        }
      },
      {
        id: 9,
        availability: true,
        company: 'Google',
        title: 'Google Pixel 9 64GB',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWB9ciNukWc9x8HsuGVPEzS-G5ySok9XMxT03Y-R0FJTwf5tZavNXZ8VcvrIETbPlLOL8&usqp=CAU',
        rating: {
          value: 5,
          reviews: 4,
        },
        price: {
          value: 53000,
          discount: 0.3,
        },
        bage: {
          color: '#FF3366',
          text: 'Скидка'
        }
      },
      {
        id: 10,
        availability: true,
        company: 'Yandex',
        title: 'Yandex Pixel 10 64GB',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWB9ciNukWc9x8HsuGVPEzS-G5ySok9XMxT03Y-R0FJTwf5tZavNXZ8VcvrIETbPlLOL8&usqp=CAU',
        rating: {
          value: 5,
          reviews: 4,
        },
        price: {
          value: 66000,
          discount: 0.17,
        },
        bage: {
          color: '#FF3366',
          text: 'Скидка'
        }
      },
      {
        id: 11,
        availability: true,
        company: 'Mail',
        title: 'Mail Pixel 11 64GB',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWB9ciNukWc9x8HsuGVPEzS-G5ySok9XMxT03Y-R0FJTwf5tZavNXZ8VcvrIETbPlLOL8&usqp=CAU',
        rating: {
          value: 5,
          reviews: 4,
        },
        price: {
          value: 63000,
          discount: undefined,
        },
        bage: {
          color: '#FF3366',
          text: 'Скидка'
        }
      },
      {
        id: 12,
        availability: false,
        company: 'Mail',
        title: 'Mail Pixel 12 64GB',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWB9ciNukWc9x8HsuGVPEzS-G5ySok9XMxT03Y-R0FJTwf5tZavNXZ8VcvrIETbPlLOL8&usqp=CAU',
        rating: {
          value: 5,
          reviews: 4,
        },
        price: {
          value: 63000,
          discount: 0.2,
        },
        bage: {
          color: '#FF3366',
          text: 'Скидка'
        }
      }
    ]