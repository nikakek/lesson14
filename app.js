const numberArrays = [2, 4, 6, 8, 10, 12];
numberArrays.pop();
numberArrays.unshift(12);
console.log(numberArrays);

const products = {
    phone: ['productTitle',' productPrice '],
    laptop: ['productTitle',' productPrice '],
    tablet: ['productTitle',' productPrice ']
};

const numbers = [1,2,3,4,5];
const equals = numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4];
console.log(equals/5);


const phone = {
    phoneName: 'samsung galaxy a32',
    phoneDescription: ['4gb ram', '5000mAh', '1080p'],
    phonePrice: 769,
    shopAddresses: ['tbilisi' ,'qutaisi'],
    phoneMemoryInGB: 128,
};

console.log('phone name is ' + phone.phoneName,',phone price is ' + phone.phonePrice + ' lari', ' and you can buy it at ' + phone.shopAddresses[0] );