const price = 10000 // 소비자 가격
const priceKrw = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(price) + "원"
let tax = price / 11 * 10
tax = Math.round(tax)
tax = Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(tax)
tax = tax + "원"

const price = 100000
const priceToKrwFormat = (price) => {
    const priceKrw = new Intl.NumberFormat('kr-KO', { style: 'currency', currency:'KRW' }).format(price) + '원'

    let tax = price / 11 * 10
    tax = Math.round(tax)
    tax = new Intl.NumberFormat('kr-KO', { style : 'currency', currency: 'KRW '}).format(tax)
    tax = tax + "원"

    let originalPrice = price / 11
originalPrice = Math.round(originalPrice)
originalPrice = new Intl.NumberFormat('kr-KO', { style: 'currency', currency: 'KRW' }).format(originalPrice)
originalPrice = originalPrice + "원"


    return {
        priceKrw: priceKrw
        tax: tax
        originalPrice: originalPrice
    }
}

console.log(priceToKrwFormat(price))

// console.log(priceKrw)
// console.log(tax)
// console.log(originalPrice)